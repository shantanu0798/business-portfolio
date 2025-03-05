import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="headline">Marketing Research Analyst and Designer</h1>
          
          <div className="hero-columns">
            <div className="hero-column">
              <p className="hero-text">
              I’m currently elevating digital experiences at lululemon by ensuring brand consistency and guest satisfaction through cross-functional collaboration.
              </p>
            </div>
            <div className="hero-column">
              <p className="hero-text">
              I’m a passionate educator who leverages data, research, and thoughtful design to create impactful engagement strategies that scale.
              </p>
              <a href="#contact" className="cta-button">
                GET IN TOUCH <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="skill-tags">
            <div className="skill-tag strategy">MARKET RESEARCH ® '23</div>
            <div className="skill-tag research">USER EXPERIENCE RESEARCH ℠</div>
            <div className="skill-tag design">DATA ANALYTICS ©</div>
            <div className="skill-tag branding">BRANDING & IDENTITY © '22</div>
            <div className="skill-tag">CONSUMER INSIGHTS ™</div>
            <div className="skill-tag">MARKETING STRATEGY →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
