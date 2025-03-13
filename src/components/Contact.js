import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitted: true }); // Set submitted to true immediately

    try {
      const response = await fetch('https://0rr9x9qsx4.execute-api.us-east-2.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form on success
      } else {
        const errorData = await response.json(); // Try to parse error response
        setFormStatus({
          submitted: true,
          success: false,
          message: `Submission failed: ${errorData.message || 'Something went wrong.'}`,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Submission failed: Could not connect to server.',
      });
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-card-content">
                <h3>Location</h3>
                <p>Vancouver, BC</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p>kritisahni0912@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-card-content">
                <h3>Phone</h3>
                <p>+1 (778) 319-4470</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kritisahni/" className="social-icon">
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
          
          <div className="contact-form-container">
            {formStatus.submitted && formStatus.success ? (
              <div className="form-success-message">
                <i className="fas fa-check-circle"></i>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
