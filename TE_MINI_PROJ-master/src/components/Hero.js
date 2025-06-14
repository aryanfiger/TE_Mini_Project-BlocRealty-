import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">Find Your Dream Home</h1>
        <p className="lead">Explore the best properties available in your area</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price Range"
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;