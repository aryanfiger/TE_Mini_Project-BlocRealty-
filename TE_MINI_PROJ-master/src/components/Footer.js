import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>EstateBit</h5>
            <p className="text-muted">Your trusted real estate partner.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/properties" className="text-muted text-decoration-none">
                  Properties
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-muted">&copy; 2023 EstateBit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;