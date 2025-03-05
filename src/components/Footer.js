import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Portfolio</h2>
            <p>Professional Marketing Portfolio</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> Vancouver, BC</p>
            <p><i className="fas fa-envelope"></i> kritisahni0912@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +1 (778) 319-4470</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Your Portfolio. All Rights Reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
