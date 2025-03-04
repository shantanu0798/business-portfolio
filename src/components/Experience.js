import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'lululemon (Remote, Vancouver, BC)',
      position: 'Digital Engagement Educator',
      period: 'Nov 2024 – Present',
      description: [
        'Provide elevated customer experiences through digital channels, ensuring brand consistency and satisfaction',
        'Collaborate with cross-functional teams to gather customer insights and improve engagement strategies',
        'Monitor and analyze digital interactions to identify opportunities for enhancing the guest experience'
      ]
    },
    {
      id: 2,
      company: 'lululemon (Remote, Vancouver, BC)',
      position: 'GEC Educator',
      period: 'Nov 2023 – Nov 2024',
      description: [
        'Supported guests with product inquiries and brand knowledge via phone and online platforms',
        'Maintained high customer satisfaction scores by responding quickly and thoroughly to guest needs',
        'Implemented feedback loops to share customer insights with product and marketing teams'
      ]
    },
    {
      id: 3,
      company: 'Aritzia (On-site, Vancouver, BC)',
      position: 'Social Specialist',
      period: 'Jul 2023 – Oct 2023',
      description: [
        'Managed social media channels, creating engaging content that aligned with Aritzia’s brand identity',
        'Monitored analytics to track follower growth, engagement rates, and ROI of social campaigns',
        'Coordinated with cross-functional teams to ensure consistent brand voice and timely campaign launches'
      ]
    },
    {
      id: 4,
      company: 'Aritzia (On-site, Vancouver, BC)',
      position: 'Concierge Advisor',
      period: 'Mar 2023 – Jul 2023',
      description: [
        'Provided personalized styling assistance and product recommendations to in-store clients',
        'Maintained ongoing client relationships, contributing to repeat business and positive word-of-mouth',
        'Streamlined concierge workflows to reduce wait times and elevate the customer experience'
      ]
    },
    {
      id: 5,
      company: 'Major Tom (Hybrid, Vancouver, BC)',
      position: 'Market Research Assistant (Co-op)',
      period: 'Apr 2023 – Jul 2023',
      description: [
        'Conducted in-depth market research and competitor analyses to support digital marketing strategies',
        'Collected and synthesized data to identify consumer trends, informing campaign optimizations',
        'Collaborated with cross-functional teams on strategic recommendations for new and existing clients'
      ]
    },
    {
      id: 6,
      company: 'Vancouver Asian Film Festival (On-site, Greater Vancouver, BC)',
      position: 'Marketing Coordinator (Internship)',
      period: 'Jan 2023 – Apr 2023',
      description: [
        'Coordinated marketing campaigns to promote festival events, workshops, and screenings',
        'Managed social media postings, increasing follower engagement and ticket sales',
        'Assisted in planning and executing cross-promotions with local sponsors and community organizations'
      ]
    },
    {
      id: 7,
      company: 'Young Women in Business (YWiB) SFU (Full-time)',
      position: 'Marketing and Design Coordinator',
      period: 'Sep 2022 – Apr 2023',
      description: [
        'Developed marketing materials for digital and print, supporting organizational outreach and events',
        'Designed visually compelling brand assets to align with YWiB SFU’s mission and vision',
        'Partnered with leadership teams to align marketing strategies with membership growth goals'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'University of Marketing',
      degree: 'Master of Business Administration',
      specialization: 'Marketing',
      period: '2013 - 2015'
    },
    {
      id: 2,
      institution: 'Simon Fraser University',
      degree: 'Bachelor in Business Administration',
      specialization: 'Major in Marketing',
      period: '2009 - 2013'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Google Analytics Certification',
      issuer: 'Google',
      year: '2022'
    },
    {
      id: 2,
      name: 'HubSpot Inbound Marketing Certification',
      issuer: 'HubSpot Academy',
      year: '2021'
    },
    {
      id: 3,
      name: 'Facebook Blueprint Certification',
      issuer: 'Meta',
      year: '2020'
    },
    {
      id: 4,
      name: 'Content Marketing Certification',
      issuer: 'Content Marketing Institute',
      year: '2019'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        
        <div className="experience-container">
          <div className="experience-column">
            <h3 className="section-subtitle">Work Experience</h3>
            <div className="timeline">
              {experiences.map(exp => (
                <div className="timeline-item" key={exp.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                    <p className="period">{exp.period}</p>
                    <ul>
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-column">
            <h3 className="section-subtitle">Education</h3>
            <div className="timeline">
              {education.map(edu => (
                <div className="timeline-item" key={edu.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.specialization}</p>
                    <p className="period">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="section-subtitle certifications-title">Certifications</h3>
            <div className="certifications">
              {certifications.map(cert => (
                <div className="certification-item" key={cert.id}>
                  <div className="certification-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="certification-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
