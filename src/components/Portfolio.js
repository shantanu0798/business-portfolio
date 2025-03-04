import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Brand Redesign Campaign',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete brand identity redesign for a tech startup, including logo, color palette, and brand guidelines.'
    },
    {
      id: 2,
      title: 'Social Media Strategy',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Comprehensive social media strategy that increased engagement by 150% and followers by 200% in 6 months.'
    },
    {
      id: 3,
      title: 'Email Marketing Campaign',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description: 'Targeted email campaign that achieved a 35% open rate and 12% conversion rate, well above industry averages.'
    },
    {
      id: 4,
      title: 'Content Marketing Strategy',
      category: 'content',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description: 'Content strategy that increased organic traffic by 85% and generated 120 qualified leads in the first quarter.'
    },
    {
      id: 5,
      title: 'SEO Optimization Project',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description: 'SEO overhaul that improved search rankings for key terms and increased organic traffic by 200%.'
    },
    {
      id: 6,
      title: 'Product Launch Campaign',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      description: 'Integrated marketing campaign for a new product launch that exceeded sales targets by 45%.'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="portfolio-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'branding' ? 'active' : ''} 
            onClick={() => setFilter('branding')}
          >
            Branding
          </button>
          <button 
            className={filter === 'digital' ? 'active' : ''} 
            onClick={() => setFilter('digital')}
          >
            Digital
          </button>
          <button 
            className={filter === 'social' ? 'active' : ''} 
            onClick={() => setFilter('social')}
          >
            Social Media
          </button>
          <button 
            className={filter === 'content' ? 'active' : ''} 
            onClick={() => setFilter('content')}
          >
            Content
          </button>
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href="#" className="btn btn-small">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
