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
      description:
        "Advanced training with interactive videos, quizzes, & custom learning journeys.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "START",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "GROW",
      description: "Grow your skills and knowledge with our tailored programs.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  return (
    <section className="hero d-flex flex-column flex-md-row bg-dark text-white">
      <div className="hero-content">
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
            className={`card ${activeCard === index ? "active" : ""}`}
            style={{
              backgroundImage: `url('${card.image}')`,
            }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(0)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
