import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="media-container">
      <div className="sidebar">
        <button className="btn pause"></button>
        <button className="btn play"></button>
        <button className="btn stop"></button>
      </div>
      <div className="media-content">
        <img
          src="https://picsum.photos/300/200?random=1" // Replace with actual image URL
          alt="Chat Experience"
          className="media-image"
        />
        <div className="media-text">
          <h2>One chat experience</h2>
          <p>Help people navigate through difficult parts of your video.</p>
        </div>
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Sidebar;
