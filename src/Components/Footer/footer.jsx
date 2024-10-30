import React from 'react';
import './Footer.css'; // Ensure to create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Netflix Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
