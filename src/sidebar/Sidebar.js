import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="video-container">
      <div className="image-section">
        <div className="controls">
          <div className="control-button play"></div>
          <div className="control-button pause"></div>
          <div className="control-button stop"></div>
        </div>
        <img
          src="https://picsum.photos/300/200?random=1"
          alt="video-thumbnail"
          className="image"
        />
      </div>
      <div className="text-section">
        <h2>One chat experience</h2>
        <p>Help people navigate through difficult parts of your video.</p>
      </div>
    </div>
  );
};

export default Sidebar;
