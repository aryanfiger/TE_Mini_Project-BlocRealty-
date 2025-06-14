import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-1 px-2">
        {/* Logo */}
        <Link className="text-2xl font-bold text-blue-600" to="/">
          B<span className="text-yellow-500">Loc</span>Realty.
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/properties">Properties</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/services">Services</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/about">About</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/contact">Contact</Link>
        </div>

        {/* Sign Up Button */}
        <Link to="/signup">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
