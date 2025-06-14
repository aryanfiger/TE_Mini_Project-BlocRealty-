import React, { useState } from "react";

const AdminDashboard = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Property A",
      value: 10,
      tokensSold: 500,
      totalTokens: 1000,
      rentalPrice: 1,
      revenueDistributed: 5,
    },
  ]);
  const [totalRevenue, setTotalRevenue] = useState(40);

  // Handle property removal
  const removeProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  // Handle rental price update
  const updateRentalPrice = (id, newPrice) => {
    setProperties(
      properties.map((property) =>
        property.id === id ? { ...property, rentalPrice: newPrice } : property
      )
    );
  };

  // Handle revenue distribution
  const distributeRevenue = (id, amount) => {
    if (totalRevenue >= amount) {
      setTotalRevenue(totalRevenue - amount);
      setProperties(
        properties.map((property) =>
          property.id === id
            ? { ...property, revenueDistributed: property.revenueDistributed + amount }
            : property
        )
      );
    } else {
      alert("Not enough revenue available.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Total Overview */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>
        <p><strong>Total Properties:</strong> {properties.length}</p>
        <p><strong>Total Revenue:</strong> {totalRevenue} ETH</p>
      </div>

      {/* Property Management */}
      {properties.map((property) => (
        <div key={property.id} className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">{property.name}</h2>
          <p><strong>Value:</strong> {property.value} ETH</p>
          <p><strong>Tokens Sold:</strong> {property.tokensSold}/{property.totalTokens}</p>
          <p><strong>Rental Price:</strong> {property.rentalPrice} ETH/month</p>

          {/* Rental Price Management */}
          <input
            type="number"
            placeholder="Set New Rental Price"
            className="border p-2 rounded w-1/2 mr-2"
            onChange={(e) => updateRentalPrice(property.id, parseFloat(e.target.value))}
          />
          
          {/* Distribute Revenue */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
            onClick={() => distributeRevenue(property.id, 1)}
          >
            Distribute 1 ETH
          </button>
          
          <p className="mt-2"><strong>Revenue Distributed:</strong> {property.revenueDistributed} ETH</p>
          
          {/* Remove Property */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
            onClick={() => removeProperty(property.id)}
          >
            Remove Property
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
