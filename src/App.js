// App.js
import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import HeroSection from "./herosection/HeroSection";
import Testimonial from "./testimonials/Testimonial";
import Footer from "./footer/Footer";
import InteractivePhoto from "./interactivephoto/interactivephoto";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InteractivePhoto />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
