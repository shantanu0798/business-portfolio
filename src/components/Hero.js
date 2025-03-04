import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Professional Marketing Specialist</p>
          <p className="hero-description">
            I create impactful marketing strategies that drive results and help businesses grow.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
