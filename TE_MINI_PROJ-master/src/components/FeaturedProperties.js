import React from "react";
import { Link } from "react-router-dom";
import house1 from "../pictures/house-1.jpg";
import house2 from "../pictures/house-2.jpg";
import house3 from "../pictures/house-3.jpg";

const properties = [
  {
    id: 1,
    image: house1,
    title: "Luxury Apartment",
    location: "New York, USA",
    price: "$1,200,000",
  },
  {
    id: 2,
    image: house2,
    title: "Modern Villa",
    location: "Los Angeles, USA",
    price: "$2,500,000",
  },
  {
    id: 3,
    image: house3,
    title: "Cozy Office",
    location: "Chicago, USA",
    price: "$800,000",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">🏡 Featured Properties</h2>
      <div className="row g-4"> {/* Added spacing between cards */}
        {properties.map((property) => (
          <div key={property.id} className="col-md-4">
            <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              {/* Image */}
              <img
                src={property.image}
                className="card-img-top"
                alt={property.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              {/* Card Content */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{property.title}</h5>
                <p className="card-text text-muted">
                  📍 {property.location}
                </p>
                <p className="card-text text-success fw-bold fs-5">
                  💰 {property.price}
                </p>
                {/* CTA Button */}
                <Link
                  to={`/property/${property.id}`}
                  className="btn btn-primary w-100 fw-bold rounded-pill"
                >
                  View Details 🔍
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
