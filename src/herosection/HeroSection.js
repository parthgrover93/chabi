import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0); // Default to first card

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const cardData = [
    {
      title: "BUILD",
      description: "Test Data",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "START",
      description: "Test Data 2",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "GROW",
      description: "Test Data 3",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  return (
    <section className="hero d-flex flex-column flex-md-row bg-dark text-white">
      <div className="hero-content col-md-4">
        <h1>
          THE HUB <br />
          FOR <span className="highlight">UNLOCKING</span> TRUE POTENTIAL
        </h1>
        <div className="button-container">
          <button className="hero-btn">APPLY</button>
          <p className="cc-info">No credit card required</p>
        </div>
      </div>

      <div className="hero-cards w-100 justify-content-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`hover-area ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(index)}
          >
            <div
              className={`card ${activeCard === index ? "active" : ""}`}
              style={{
                backgroundImage: `url('${card.image}')`,
              }}
            >
              <h2>{card.title}</h2>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
