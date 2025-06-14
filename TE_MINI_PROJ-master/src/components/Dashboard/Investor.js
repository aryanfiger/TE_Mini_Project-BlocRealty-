import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useBlockchain } from "./BlockchainContext"; // Assuming you have this context
import Web3 from "web3";

const Investor = () => {
  const { contract, account } = useBlockchain();
  const [tokenData, setTokenData] = useState([]);
  const [revenueData, setRevenueData] = useState({
    totalRevenue: 0,
    claimable: 0,
    propertyRevenue: {}
  });
  const [marketplaceListings, setMarketplaceListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProperty, setActiveProperty] = useState(null);

  // Colors for different properties in the chart
  const COLORS = ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#3B82F6'];

  useEffect(() => {
    const fetchInvestorData = async () => {
      if (!contract || !account) return;

      try {
        setLoading(true);
        
        // 1. Fetch user token balances
        const result = await contract.methods.getUserTokenDetails(account).call();
        const tokens = result.ids.map((id, index) => ({
          propertyId: id,
          property: `Property ${id}`,
          tokens: parseInt(result.balances[index]),
          hasBalance: parseInt(result.balances[index]) > 0
        }));

        setTokenData(tokens.filter(t => t.hasBalance));
        
        // 2. Calculate revenue data
        let totalClaimable = 0;
        const propertyRevenue = {};
        
        for (const token of tokens) {
          if (token.tokens > 0) {
            const property = await contract.methods.getPropertyDetails(token.propertyId).call();
            const totalRevenue = await contract.methods.totalRevenuePerProperty(token.propertyId).call();
            const claimed = await contract.methods.claimedRevenue(token.propertyId, account).call();
            
            const share = (token.tokens * totalRevenue) / property.totalSupply;
            const unclaimed = share - claimed;
            
            totalClaimable += parseInt(unclaimed);
            propertyRevenue[token.propertyId] = Web3.utils.fromWei(unclaimed.toString(), 'ether');
          }
        }
        
        setRevenueData({
          totalRevenue: "2.5", // This would come from another contract call if available
          claimable: Web3.utils.fromWei(totalClaimable.toString(), 'ether'),
          propertyRevenue
        });

        // 3. Fetch marketplace listings
        const propertyCount = await contract.methods.propertyCount().call();
        const allListings = [];
        
        for (let i = 0; i < propertyCount; i++) {
          const listings = await contract.methods.getListedTokens(i).call();
          allListings.push(...listings.map(listing => ({
            ...listing,
            propertyId: i,
            priceInEth: Web3.utils.fromWei(listing.priceInWei, 'ether')
          })));
        }
        
        setMarketplaceListings(allListings);
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching investor data:", error);
        setLoading(false);
      }
    };

    fetchInvestorData();
  }, [contract, account]);

  const handleListTokens = async (propertyId) => {
    if (!contract || !account || !activeProperty) return;
    
    try {
      await contract.methods.listForSale(
        propertyId,
        activeProperty.amount,
        Web3.utils.toWei(activeProperty.price.toString(), 'ether')
      ).send({ from: account });
      
      alert("Tokens listed successfully!");
    } catch (error) {
      console.error("Error listing tokens:", error);
    }
  };

  const handleClaimRevenue = async () => {
    if (!contract || !account) return;
    
    try {
      for (const token of tokenData) {
        await contract.methods.claimRevenue(token.propertyId).send({ from: account });
      }
      alert("Revenue claimed successfully!");
    } catch (error) {
      console.error("Error claiming revenue:", error);
    }
  };

  const handleBuyTokens = async (listing) => {
    if (!contract || !account) return;
    
    try {
      const totalCost = Web3.utils.toWei(
        (listing.amount * parseFloat(listing.priceInEth)).toString(), 
        'ether'
      );
      
      await contract.methods.buyListedTokens(
        listing.propertyId, 
        listing.seller
      ).send({ 
        from: account,
        value: totalCost
      });
      
      alert("Tokens purchased successfully!");
    } catch (error) {
      console.error("Error buying tokens:", error);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading investor data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Investor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Properties Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">My Properties</h2>

          {/* Token Balance Chart */}
          {tokenData.length > 0 ? (
            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tokenData}>
                  <XAxis dataKey="property" tick={{ fill: "#4B5563" }} />
                  <YAxis tick={{ fill: "#4B5563" }} />
                  <Tooltip 
                    formatter={(value) => [`${value} tokens`, "Token Balance"]}
                    labelFormatter={(label) => `Property ${label.split(' ')[1]}`}
                  />
                  <Bar dataKey="tokens" radius={[8, 8, 0, 0]}>
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-52 flex items-center justify-center text-gray-500">
              No property tokens owned
            </div>
          )}

          {/* List Tokens Modal Trigger */}
          <button 
            onClick={() => setActiveProperty({ propertyId: tokenData[0]?.propertyId || 0, amount: 0, price: 0 })}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow transition mt-4"
          >
            List for Sale
          </button>

          {/* List Tokens Modal */}
          {activeProperty && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-medium mb-4">List Tokens for Sale</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property</label>
                  <select
                    value={activeProperty.propertyId}
                    onChange={(e) => setActiveProperty({...activeProperty, propertyId: parseInt(e.target.value)})}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    {tokenData.map(token => (
                      <option key={token.propertyId} value={token.propertyId}>
                        Property {token.propertyId} (Balance: {token.tokens})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <input
                    type="number"
                    value={activeProperty.amount}
                    onChange={(e) => setActiveProperty({...activeProperty, amount: parseInt(e.target.value)})}
                    className="w-full border border-gray-300 rounded-md p-2"
                    max={tokenData.find(t => t.propertyId === activeProperty.propertyId)?.tokens || 0}
                    min="1"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price per Token (ETH)</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={activeProperty.price}
                    onChange={(e) => setActiveProperty({...activeProperty, price: parseFloat(e.target.value)})}
                    className="w-full border border-gray-300 rounded-md p-2"
                    min="0.0001"
                  />
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => setActiveProperty(null)}
                    className="px-4 py-2 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => handleListTokens(activeProperty.propertyId)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    disabled={!activeProperty.amount || !activeProperty.price}
                  >
                    List Tokens
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Revenue Summary Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue Summary</h2>
          <p className="text-gray-600 mb-2">
            <strong>Total Revenue:</strong> <span className="text-green-600">{revenueData.totalRevenue} ETH</span>
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Claimable:</strong> <span className="text-green-600">{revenueData.claimable} ETH</span>
          </p>
          
          {Object.keys(revenueData.propertyRevenue).length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">By Property:</h4>
              <ul className="space-y-1">
                {Object.entries(revenueData.propertyRevenue).map(([propertyId, amount]) => (
                  <li key={propertyId} className="text-gray-600">
                    <strong>Property {propertyId}:</strong> {amount} ETH
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            onClick={handleClaimRevenue}
            disabled={parseFloat(revenueData.claimable) <= 0}
            className={`mt-4 w-full ${parseFloat(revenueData.claimable) > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white px-5 py-2 rounded-lg shadow transition`}
          >
            {parseFloat(revenueData.claimable) > 0 ? 'Claim Revenue' : 'Nothing to Claim'}
          </button>
        </div>

        {/* Marketplace Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Marketplace</h2>
          
          {marketplaceListings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tokens</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (ETH)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total (ETH)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {marketplaceListings.map((listing, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">Property {listing.propertyId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {`${listing.seller.substring(0, 6)}...${listing.seller.substring(38)}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{listing.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{listing.priceInEth}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {(listing.amount * parseFloat(listing.priceInEth)).toFixed(4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleBuyTokens(listing)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Buy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No tokens currently listed for sale in the marketplace</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investor;