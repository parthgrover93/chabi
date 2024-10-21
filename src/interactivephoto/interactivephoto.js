import React, { useState, useEffect } from "react";
import "./InteractivePhoto.css";

const images = [
  [
    {
      title: "BUILD1",
      description: "Caraousel 1 Content 1",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "BUILD2",
      description: "Caraousel 1 Content 2",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "BUILD3",
      description: "Caraousel 1 Content 3",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      title: "BUILD4",
      description: "Caraousel 1 Content 4",
      image: "https://picsum.photos/300/200?random=4",
    },
  ],
  [
    {
      title: "START1",
      description: "Caraousel 2 Content 1",
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      title: "START2",
      description: "Caraousel 2 Content 2",
      image: "https://picsum.photos/300/200?random=6",
    },
    {
      title: "START3",
      description: "Caraousel 2 Content 3",
      image: "https://picsum.photos/300/200?random=7",
    },
    {
      title: "START4",
      description: "Caraousel 2 Content 4",
      image: "https://picsum.photos/300/200?random=8",
    },
  ],
  [
    {
      title: "BEGIN1",
      description: "Caraousel 3 Content 1",
      image: "https://picsum.photos/300/200?random=9",
    },
    {
      title: "BEGIN2",
      description: "Caraousel 3 Content 2",
      image: "https://picsum.photos/300/200?random=10",
    },
    {
      title: "BEGIN3",
      description: "Caraousel 3 Content 3",
      image: "https://picsum.photos/300/200?random=11",
    },
    {
      title: "BEGIN4",
      description: "Caraousel 3 Content 4",
      image: "https://picsum.photos/300/200?random=12",
    },
  ],
];

function InteractivePhoto() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // New state to track selected button
  const [isAnimating, setIsAnimating] = useState(false);

  const getCurrentImage = () => {
    if (selectedImageIndex === null) {
      return images[currentSlider][3]; // Show default image when no button is selected
    }
    return images[currentSlider][selectedImageIndex];
  };

  const handleParentIndicatorClick = (index) => {
    setCurrentSlider(index);
    setSelectedImageIndex(null); // Reset selection when changing slider
    setSelectedButton(null); // Reset button selection
  };

  // Handle button clicks with toggle feature
  const handlePauseClick = () => {
    if (selectedButton === "pause") {
      setSelectedImageIndex(null); // Unselect button (reset to default)
      setSelectedButton(null); // No button selected
    } else {
      setSelectedImageIndex(0); // Select first image
      setSelectedButton("pause"); // Track pause button
    }
  };

  const handlePlayClick = () => {
    if (selectedButton === "play") {
      setSelectedImageIndex(null); // Unselect button (reset to default)
      setSelectedButton(null); // No button selected
    } else {
      setSelectedImageIndex(1); // Select second image
      setSelectedButton("play"); // Track play button
    }
  };

  const handleStopClick = () => {
    if (selectedButton === "stop") {
      setSelectedImageIndex(null); // Unselect button (reset to default)
      setSelectedButton(null); // No button selected
    } else {
      setSelectedImageIndex(2); // Select third image
      setSelectedButton("stop"); // Track stop button
    }
  };

  // Automatically switch parent indicator
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlider((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    if (selectedImageIndex !== null) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [selectedImageIndex]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlider]);

  return (
    <>
      <section className="d-flex flex-column flex-md-row bg-white text-black">
        <div className="interactivephoto-container col-md-5 mt-3">
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

        <div className="container col-md-*">
          <div className="m-5 d-flex flex-row-reverse">
            <div
              className="image w-100"
              style={{
                backgroundImage: `url('${getCurrentImage().image}')`,
              }}
            >
              {currentSlider === 0 && (
                <div className="panel m-3">
                  <button
                    onClick={handlePauseClick}
                    className={`panel-button ${
                      selectedButton === "pause" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">||</span>
                  </button>
                  <button
                    onClick={handlePlayClick}
                    className={`panel-button ${
                      selectedButton === "play" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">▶</span>
                  </button>
                  <button
                    onClick={handleStopClick}
                    className={`panel-button ${
                      selectedButton === "stop" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">■</span>
                  </button>
                </div>
              )}
              {currentSlider === 1 && (
                <div className="panel m-3">
                  <button
                    onClick={handlePauseClick}
                    className={`panel-button ${
                      selectedButton === "pause" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">||2</span>
                  </button>
                  <button
                    onClick={handlePlayClick}
                    className={`panel-button ${
                      selectedButton === "play" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">▶2</span>
                  </button>
                  <button
                    onClick={handleStopClick}
                    className={`panel-button ${
                      selectedButton === "stop" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">■2</span>
                  </button>
                </div>
              )}
              {currentSlider === 2 && (
                <div className="panel m-3">
                  <button
                    onClick={handlePauseClick}
                    className={`panel-button ${
                      selectedButton === "pause" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">||3</span>
                  </button>
                  <button
                    onClick={handlePlayClick}
                    className={`panel-button ${
                      selectedButton === "play" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">▶3</span>
                  </button>
                  <button
                    onClick={handleStopClick}
                    className={`panel-button ${
                      selectedButton === "stop" ? "active-button" : ""
                    }`}
                  >
                    <span className="icon">■3</span>
                  </button>
                </div>
              )}
              <div className="text-area">
                <h2>{getCurrentImage().title}</h2>
                <p>{getCurrentImage().description}</p>
              </div>
            </div>
          </div>

          {/* Indicator */}
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
      <div className="container mt-5 col-md-5">
        <h1>Because they love us</h1>
        <p className="">
          This is a dummy data that has been added just to display how the page
          will look. Update the data once it is done.
        </p>
      </div>
    </>
  );
}

export default InteractivePhoto;
