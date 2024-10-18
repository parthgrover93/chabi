import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero d-flex flex-column flex-md-row bg-dark text-white">
      <div className="hero-content col-md-6">
        <h1>
          THE HUB FOR <span className="highlight">UNLOCKING</span> TRUE
          POTENTIAL
        </h1>
        <button className="hero-btn">Button</button>
        <p>No credit card required</p>
      </div>
      <div className="hero-cards w-100 justify-content-center">
        <div
          className="card build"
          style={{
            backgroundImage: "url('https://picsum.photos/300/200?random=1')",
          }}
        >
          <h2>BUILD</h2>
          <p>
            Advanced training with interactive videos, quizzes, & custom
            learning journeys.
          </p>
        </div>
        <div
          className="card engage"
          style={{
            backgroundImage: "url('https://picsum.photos/300/200?random=2')",
          }}
        >
          <h2>ENGAGE</h2>
          <p>Engage with interactive content that keeps you involved.</p>
        </div>
        <div
          className="card grow"
          style={{
            backgroundImage: "url('https://picsum.photos/300/200?random=3')",
          }}
        >
          <h2>GROW</h2>
          <p>Grow your skills and knowledge with our tailored programs.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
