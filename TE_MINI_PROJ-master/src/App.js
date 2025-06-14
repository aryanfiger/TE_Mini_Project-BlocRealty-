import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./components/Home";
import Properties from "./components/Properties";
import SingleProperty from "./components/SingleProperty";
import Contact from "./components/Contact";
import Login from "./components/Login";  
import Signup from "./components/Signup"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./components/Dashboard/UserDashboard";
import Tenant from "./components/Dashboard/Tenant";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />                       {/* Home Page */}
        <Route path="/properties" element={<Properties />} />       {/* All Properties */}
        <Route path="/properties/:id" element={<SingleProperty />} /> {/* Single Property (Old) */}
        
        <Route path="/contact" element={<Contact />} />             {/* Contact Page */}
        <Route path="/login" element={<Login />} />                 {/* Login Page */}
        <Route path="/signup" element={<Signup />} />               {/* Signup Page */}
        <Route path="/dashboard" element={<UserDashboard />} />     {/* User Dashboard */}
        <Route path="/rental" element={<Tenant />} />               {/* Rental Graph / Data */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
