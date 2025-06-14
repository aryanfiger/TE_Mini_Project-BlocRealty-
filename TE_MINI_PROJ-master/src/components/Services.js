import React from "react";

const services = [
  {
    id: 1,
    icon: "bi-house",
    title: "Buy a Home",
    description: "Find your dream home with our extensive property listings.",
  },
  {
    id: 2,
    icon: "bi-cash",
    title: "Sell a Home",
    description: "Get the best price for your property with our expert agents.",
  },
  {
    id: 3,
    icon: "bi-building",
    title: "Rent a Property",
    description: "Discover rental properties tailored to your needs.",
  },
];

const Services = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <i className={`bi ${service.icon} display-4 text-primary mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;