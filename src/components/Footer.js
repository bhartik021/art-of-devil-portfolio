import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'bi-house-fill' },
    { name: 'Gallery', href: '#gallery', icon: 'bi-images' },
    { name: 'About', href: '#about', icon: 'bi-person-lines-fill' },
    { name: 'Contact', href: '#contact', icon: 'bi-chat-dots-fill' }
  ];

  const services = [
    { name: 'Portrait Photography', href: '#photography', icon: 'bi-person-fill' },
    { name: 'Eternal Vows', href: '#photography', icon: 'bi-heart-fill' },
    { name: 'Event Photography', href: '#photography', icon: 'bi-calendar-event-fill' },
    { name: 'Video Editing', href: '#videography', icon: 'bi-scissors' },
    { name: 'Color Grading', href: '#videography', icon: 'bi-palette-fill' },
    { name: 'Visual Effects', href: '#videography', icon: 'bi-magic' }
  ];

  const socialLinks = [
    { icon: 'bi-instagram', link: 'https://www.instagram.com/art_of_devil?igsh=dG8wZnA1N3pjcjE4', name: 'Instagram', color: '#E4405F' },
    { icon: 'bi-youtube', link: 'https://youtube.com/@artofdevil28?si=wCtLzSoIOoDo7pZA', name: 'YouTube', color: '#FF0000' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="footer-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`footer-particle footer-particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="footer-shapes">
          <div className="footer-shape footer-circle-1"></div>
          <div className="footer-shape footer-circle-2"></div>
        </div>
      </div>

      <Container className="footer-container">
        {/* Main Footer Content */}
        <Row className="footer-main">
          {/* Brand Section */}
          <Col lg={4} md={6} className="mb-5 mb-lg-0">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <img 
                  src="/images/dark-theme-logo.jpg" 
                  alt="Art of Devil Photography - Professional Wedding Photography Logo" 
                  className="footer-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="footer-logo-fallback" style={{display: 'none'}}>
                  <div className="footer-logo-text">ART OF DEVIL</div>
                  <div className="footer-logo-tagline">MADE BY HUMAN FROM ANOTHER DIMENSION</div>
                </div>
              </div>
              
              <p className="footer-description">
                Crafting beautifully cinematic visual narratives that transcend the ordinary, 
                revealing the poetry hidden within every moment and the stories that create lasting memories.
              </p>

              <div className="footer-social">
                <h5 className="social-title">Follow Our Journey</h5>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-5 mb-lg-0">
            <div className="footer-section-wrapper">
              <h5 className="footer-section-title">Navigation</h5>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      <i className={link.icon}></i>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={3} md={6} className="mb-5 mb-lg-0">
            <div className="footer-section-wrapper">
              <h5 className="footer-section-title">Creative Services</h5>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="footer-link">
                      <i className={service.icon}></i>
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <div className="footer-section-wrapper">
              <h5 className="footer-section-title">Contact Us</h5>
              <div className="footer-contact">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Email</span>
                    <a href="mailto:Vk4508429@gmail.com" className="contact-value">
                      Vk4508429@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+918107811960" className="contact-value">
                      +91 8107811960
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Dimension Portal</span>
                    <span className="contact-value">Kota, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="footer-copyright">
                <p>&copy; {currentYear} Art of Devil. All rights reserved.</p>
                <p>Made by Human from Another Dimension</p>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="footer-credits">
                <p>Crafted with <i className="bi bi-heart-fill"></i> and passion</p>
                <div className="footer-badges">
                  <span className="footer-badge">Creative Vision</span>
                  <span className="footer-badge">Visual Excellence</span>
                  <span className="footer-badge">Love Stories</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
