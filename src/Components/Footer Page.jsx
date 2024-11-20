import React from 'react';
import { Link } from 'react-router-dom';
import './Footerpage.css'; // Import CSS for the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Hair Oil</h1>
          <p> Your Healthy hair care</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hair Oil Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};



export default Footer;
