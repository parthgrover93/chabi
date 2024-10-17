import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Ideation</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Help Centre</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Documentation</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Request Demo</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div class = "bottom-left">
        <p>An interactive training<br></br>
            platform to upskill<br></br>
             your workforce</p></div>
        
        <p></p>
        <p>About us |Privacy Policy | Terms Of Use <br></br>© 2022 workryt technologies private limited</p>
      </div>
    </div>
  );
};

export default Footer;
