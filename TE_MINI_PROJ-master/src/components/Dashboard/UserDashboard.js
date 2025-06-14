import { useEffect, useState } from "react";

const UserDashboard = () => {
  const [userTokens, setUserTokens] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch user data
    const fetchUserData = async () => {
      try {
        // Mock data instead of blockchain calls
        const tokens = [
          { propertyId: 1, balance: 5 },
          { propertyId: 2, balance: 3 },
        ];
        setUserTokens(tokens);

        // Simulated revenue calculation
        let totalRevenue = 2.5; // Mocked revenue value
        setRevenue(totalRevenue);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleClaimRevenue = () => {
    alert("Revenue claimed successfully! (Simulated action)");
  };

  const handleListTokens = (propertyId) => {
    alert(`List property ${propertyId} for sale (Simulated action)`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading user data...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Your Dashboard</h2>

      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Unclaimed Revenue</h3>
        <p className="text-xl">{revenue} ETH</p>
        <button
          className="mt-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          onClick={handleClaimRevenue}
        >
          Claim All Revenue
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Your Property Tokens</h3>
        <div className="space-y-4">
          {userTokens
            .filter((t) => t.balance > 0)
            .map((token) => (
              <div key={token.propertyId} className="border p-4 rounded-lg">
                <h4 className="font-medium">Property #{token.propertyId}</h4>
                <p>Tokens Owned: {token.balance}</p>
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
                  onClick={() => handleListTokens(token.propertyId)}
                >
                  List for Sale
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
