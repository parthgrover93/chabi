import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>chaabi</span>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <a href="#">Build &#9662;</a>
        </li>
        <li>
          <a href="#">Engage &#9662;</a>
        </li>
        <li>
          <a href="#">Grow &#9662;</a>
        </li>
        <li>
          <a href="#">Resources &#9662;</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <div className="nav-buttons">
        <a href="#" className="btn-login">Log in</a>
        <a href="#" className="btn-try-free">Try chaabi For Free</a>
      </div>
      <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
