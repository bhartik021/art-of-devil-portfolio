import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Tools = () => {
  const tools = [
    {
      name: 'Adobe Premiere Pro',
      shortName: 'Pr',
      description: 'Professional video editing and post-production workflows',
      color: '#9999FF',
      bgColor: 'linear-gradient(135deg, #9999FF 0%, #B8B8FF 100%)',
      category: 'Video Editing',
      features: ['Timeline Editing', 'Color Correction', 'Audio Mixing', 'Export Optimization']
    },
    {
      name: 'Adobe Photoshop',
      shortName: 'Ps',
      description: 'Advanced photo manipulation and digital art creation',
      color: '#31A8FF',
      bgColor: 'linear-gradient(135deg, #31A8FF 0%, #7CC7FF 100%)',
      category: 'Photo Editing',
      features: ['Photo Retouching', 'Compositing', 'Digital Painting', 'Typography Design']
    },
    {
      name: 'Adobe After Effects',
      shortName: 'Ae',
      description: 'Motion graphics, visual effects, and cinematic compositions',
      color: '#D291FF',
      bgColor: 'linear-gradient(135deg, #D291FF 0%, #9A6AFF 100%)',
      category: 'Visual Effects',
      features: ['Motion Graphics', 'Visual Effects', '3D Compositions', 'Animation']
    }
  ];

  return (
    <section id="tools" className="tools-section">
      {/* Background Elements */}
      <div className="tools-bg-elements">
        <div className="tools-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`tools-particle tools-particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="tools-shapes">
          <div className="tools-shape tools-hexagon-1"></div>
          <div className="tools-shape tools-hexagon-2"></div>
          <div className="tools-shape tools-diamond"></div>
        </div>
      </div>

      <Container className="tools-container">
        {/* Section Header */}
        <Row className="text-center mb-5">
          <Col lg={12}>
            <div className="tools-header" data-aos="fade-up">
              <div className="tools-badge">
                <i className="bi bi-gear-fill"></i>
                <span>Professional Arsenal</span>
              </div>
              <h2 className="tools-title" data-aos="fade-up" data-aos-delay="200">
                <span className="title-line">Creative Professional</span>
                <span className="title-highlight">Software Use</span>
              </h2>
              <p className="tools-description" data-aos="fade-up" data-aos-delay="400">
                Leveraging the most advanced creative software to transform your vision into reality, 
                with professional expertise across the complete Adobe Creative Suite.
              </p>
            </div>
          </Col>
        </Row>

        {/* Tools Grid */}
        <Row className="tools-grid">
          {tools.map((tool, index) => (
            <Col lg={4} md={6} className="mb-4" key={tool.name}>
              <div 
                className="tool-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                style={{ '--tool-color': tool.color }}
              >
                <div className="tool-header">
                  <div className="tool-icon-container">
                    <div 
                      className="adobe-logo-authentic"
                      style={{ 
                        '--tool-color': tool.color,
                        background: tool.bgColor
                      }}
                    >
                      <span className="adobe-letters">{tool.shortName}</span>
                      <div className="adobe-shine-overlay"></div>
                      <div className="tool-glow"></div>
                    </div>
                    <div className="adobe-product-name">{tool.name}</div>
                  </div>
                  <div className="tool-category">{tool.category}</div>
                </div>
                
                <div className="tool-content">
                  <p className="tool-description">{tool.description}</p>
                  
                  <div className="tool-features">
                    <h4 className="features-title">Expertise Areas</h4>
                    <ul className="features-list">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <i className="bi bi-check-circle-fill feature-check"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="tool-overlay"></div>
                <div className="tool-border-glow"></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="tools-cta" data-aos="fade-up" data-aos-delay="600">
              <div className="cta-content">
                <h3 className="cta-title">Ready to Create Something Extraordinary?</h3>
                <p className="cta-description">
                  Let's bring your vision to life with professional-grade tools and artistic expertise.
                </p>
                <a href="#contact" className="cta-button">
                  <span>Start Your Project</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
