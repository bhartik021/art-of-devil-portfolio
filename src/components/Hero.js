import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div 
          className="mouse-glow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`
          }}
        ></div>
      </div>

      <Container className="hero-content">
        <Row className="min-vh-100 align-items-center">
          <Col lg={7} className="hero-text-content">
            {/* Brand Logo Section */}
            <div className="hero-brand-container" data-aos="fade-right">
              <div className="brand-logo-wrapper">
                <img 
                  src="/images/light-theme-logo.png" 
                  alt="Art of Devil - Video Editing Studio Logo" 
                  className="hero-brand-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hero-logo-fallback" style={{display: 'none'}}>
                  <div className="hero-logo-text">ART OF DEVIL</div>
                  <div className="hero-logo-subtitle">MADE BY HUMAN FROM ANOTHER DIMENSION</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="hero-main-content">
              <h1 className="hero-title" data-aos="fade-right" data-aos-delay="400">
                <span className="title-line-1">Crafting <span className="title-highlight">Beauty</span></span>
                <span className="title-line-2">From Shadows</span>
              </h1>

              <p className="hero-description" data-aos="fade-right" data-aos-delay="600">
                Where light meets darkness, stories unfold. Professional photographer and video editor 
                transforming ordinary moments into extraordinary visual poetry that captures the soul's deepest emotions.
              </p>

              <div className="hero-stats" data-aos="fade-right" data-aos-delay="700">
                <div className="stat-item">
                  <div className="stat-number">666+</div>
                  <div className="stat-label">Souls Captured</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years in Art</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Creative Visions</div>
                </div>
              </div>

              <div className="hero-actions" data-aos="fade-right" data-aos-delay="900">
                <button 
                  className="hero-btn hero-btn-primary"
                  onClick={() => scrollToSection('gallery')}
                >
                  <span className="btn-text">Explore Portfolio</span>
                  <div className="btn-glow"></div>
                  <i className="bi bi-arrow-right btn-icon"></i>
                </button>
                
                <button 
                  className="hero-btn hero-btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="btn-text">Start Project</span>
                  <i className="bi bi-lightning btn-icon"></i>
                </button>
              </div>

              <div className="hero-social-proof" data-aos="fade-right" data-aos-delay="1100">
                <div className="social-proof-text">Trusted by creative minds worldwide</div>
                <div className="social-proof-icons">
                  <i className="bi bi-camera-reels"></i>
                  <i className="bi bi-film"></i>
                  <i className="bi bi-palette"></i>
                  <i className="bi bi-magic"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} className="hero-visual-content">
            <div className="hero-visual-container" data-aos="fade-left" data-aos-delay="500">
              <div className="visual-element visual-camera">
                <div className="camera-body">
                  <div className="camera-lens">
                    <div className="lens-inner"></div>
                    <div className="lens-reflection"></div>
                  </div>
                  <div className="camera-flash"></div>
                </div>
              </div>
              
              <div className="visual-element visual-film-strip">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="film-frame">
                    <div className="frame-content"></div>
                  </div>
                ))}
              </div>

              <div className="visual-element visual-color-palette">
                <div className="palette-colors">
                  <div className="color-spot color-1"></div>
                  <div className="color-spot color-2"></div>
                  <div className="color-spot color-3"></div>
                  <div className="color-spot color-4"></div>
                </div>
              </div>

              <div className="hero-image-frame">
                <img 
                  src="/images/hero-image.jpg" 
                  alt="Art of Devil - Professional Video Editor and Motion Graphics Designer Portfolio" 
                  className="hero-main-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  <i className="bi bi-camera2"></i>
                  <span>Visual Magic Happens Here</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1300">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </Container>

      {/* Geometric Background Elements */}
      <div className="hero-geometry">
        <div className="geo-shape geo-circle-1"></div>
        <div className="geo-shape geo-circle-2"></div>
        <div className="geo-shape geo-triangle-1"></div>
        <div className="geo-shape geo-line-1"></div>
        <div className="geo-shape geo-line-2"></div>
      </div>
    </section>
  );
};

export default Hero;
