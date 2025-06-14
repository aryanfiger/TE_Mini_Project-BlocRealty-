import React from "react";
import team1 from "../pictures/team-1.jpg"
import team2 from "../pictures/team-2.jpg"
import team3 from "../pictures/team-3.jpg"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "EstateBit helped me find my dream home in no time. Highly recommended!",
    image: team1,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "The team was professional and made the entire process seamless.",
    image: team2,
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "Great service and a wide range of properties to choose from.",
    image: team3,
  },
];

const Testimonials = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="card text-center p-4">
                <img
                  src={testimonial.image}
                  className="rounded-circle mx-auto mb-3"
                  alt={testimonial.name}
                  width="100"
                  height="100"
                />
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text text-muted">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;