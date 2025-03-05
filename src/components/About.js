import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="/IMG_3736.jpeg" alt="Professional headshot" />
            </div>
          </div>
          <div className="about-text">
            <h3>Marketing Professional with a Passion for Results</h3>
            <p>
              With over 8 years of experience in digital marketing and brand strategy, I've helped companies of all sizes achieve their marketing goals and grow their business. My approach combines data-driven insights with creative thinking to deliver campaigns that resonate with audiences and drive measurable results.
            </p>
            <p>
              I specialize in developing comprehensive marketing strategies, content creation, social media management, and analytics. My work has helped clients increase their online presence, generate quality leads, and improve conversion rates.
            </p>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-bars">
                <div className="skill">
                  <span className="skill-name">Digital Marketing</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span className="skill-name">Content Strategy</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span className="skill-name">Social Media Marketing</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span className="skill-name">SEO & SEM</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span className="skill-name">Analytics & Reporting</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
