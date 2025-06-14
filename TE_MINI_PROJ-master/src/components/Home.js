// src/components/Home.js
import React from "react";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      
    </div>
  );
};

export default Home;
