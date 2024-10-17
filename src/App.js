// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection'; 
import Testimonial from './Testimonial';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
