import React from "react";
import { Link } from "react-router-dom";
import "./Properties.css"; // Import custom CSS file for styling
import property1 from "../pictures/house-1.jpg";
import property2 from "../pictures/villa.avif";
import property3 from "../pictures/house-2.jpg";
import property4 from "../pictures/house-2.jpg";

const Properties = () => {
  // Sample property list (Replace with API data if needed)
  const properties = [
    { id: 1, title: "Luxury Villa", price: "$2,500,000", image: property1 },
    { id: 2, title: "Modern Apartment", price: "$850,000", image: property2 },
    { id: 3, title: "Beachfront Condo", price: "$1,200,000", image: property3 },
    { id: 4, title: "Penthouse Suite", price: "$3,000,000", image: property4 },
  ];

  return (
    <div className="properties-container">
      <h2 className="page-title">🏡 Available Properties</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} className="property-img" alt={property.title} />
            <div className="property-info">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-price">{property.price}</p>
              <Link to={`/properties/${property.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
