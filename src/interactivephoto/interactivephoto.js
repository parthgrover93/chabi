import React, { useState, useEffect } from "react";
import "./InteractivePhoto.css";

const images = [
  [
    {
      title: "BUILD1",
      description:
        "Advanced training with interactive videos, quizzes, & custom learning journeys.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "BUILD2",
      description:
        "Advanced training with interactive videos, quizzes, & custom learning journeys.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "BUILD3",
      description:
        "Advanced training with interactive videos, quizzes, & custom learning journeys.",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      title: "BUILD4",
      description:
        "Advanced training with interactive videos, quizzes, & custom learning journeys.",
      image: "https://picsum.photos/300/200?random=4",
    },
  ],
  [
    {
      title: "START1",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      title: "START2",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=6",
    },
    {
      title: "START3",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=7",
    },
    {
      title: "START4",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=8",
    },
  ],
  [
    {
      title: "ACM1",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=9",
    },
    {
      title: "ACM2",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=10",
    },
    {
      title: "ACM3",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=11",
    },
    {
      title: "ACM4",
      description: "Engage with interactive content that keeps you involved.",
      image: "https://picsum.photos/300/200?random=12",
    },
  ],
];

function InteractivePhoto() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index === selectedImageIndex ? null : index);
  };

  const getCurrentImage = () => {
    if (currentSlider === 0 && selectedImageIndex === null) {
      return images[currentSlider][3]; // Show "No Selection Image"
    }
    return (
      images[currentSlider][selectedImageIndex] || images[currentSlider][3]
    );
  };

  const handleParentIndicatorClick = (index) => {
    setCurrentSlider(index);
    setSelectedImageIndex(null); // Reset selection when changing slider
  };

  // Automatically switch parent indicator
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlider((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    // Clear the interval if a selection is made
    if (selectedImageIndex !== null) {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [selectedImageIndex]);

  // Handle animation on slider change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match duration of CSS animation

    return () => clearTimeout(timer); // Cleanup timeout
  }, [currentSlider]);

  return (
    <>
      <section className="d-flex flex-column flex-md-row bg-white text-black">
        <div className="interactivephoto-container col-md-6 mt-3">
          <div className="col-md-8">
            <h2>
              INTERACTIVE
              <br /> VIDEOS
            </h2>
            <p>
              Create videos that perform using advanced tools and techniques
              that grab attention
            </p>
          </div>
          <div className="button-container">
            <button className="btn-design">APPLY</button>
          </div>
        </div>

        <div className="container">
          <div className="flex-container">
            <div className="selector-container">
              {Array.from({ length: 3 }, (_, index) => (
                <span
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`selector ${
                    selectedImageIndex === index ? "selected" : "default"
                  }`}
                >
                  {currentSlider === 0 && index === 0 && (
                    <button className="btn pause">1</button>
                  )}
                  {currentSlider === 0 && index === 1 && (
                    <button className="btn play">2</button>
                  )}
                  {currentSlider === 0 && index === 2 && (
                    <button className="btn stop">3</button>
                  )}
                  {currentSlider === 1 && index === 0 && (
                    <button className="btn pause">4</button>
                  )}
                  {currentSlider === 1 && index === 1 && (
                    <button className="btn play">5</button>
                  )}
                  {currentSlider === 1 && index === 2 && (
                    <button className="btn stop">6</button>
                  )}
                  {currentSlider === 2 && index === 0 && (
                    <button className="btn pause">7</button>
                  )}
                  {currentSlider === 2 && index === 1 && (
                    <button className="btn play">8</button>
                  )}
                  {currentSlider === 2 && index === 2 && (
                    <button className="btn stop">9</button>
                  )}
                </span>
              ))}
            </div>
            <div className="m-3">
              <div
                className="image"
                style={{
                  backgroundImage: `url('${getCurrentImage().image}')`,
                }}
              >
                <h2>{getCurrentImage().title}</h2>
                <p>{getCurrentImage().description}</p>
              </div>
            </div>
          </div>

          <div className="indicator-container d-flex">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => handleParentIndicatorClick(index)}
                className={`indicator ${
                  currentSlider === index ? "active" : "inactive"
                } ${
                  isAnimating && currentSlider === index
                    ? "scroll-animation"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="container col-md-5">
        <h1>Because they love us</h1>
        <p className="">
          This is a dummy data that has been added just to display how the page
          will look. Update the data once it is donefd
        </p>
      </div>
    </>
  );
}

export default InteractivePhoto;
