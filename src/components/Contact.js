import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Formspree configuration - real email service
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanydvwd'; // This will be your form endpoint

  // Contact information
  const contactInfo = {
    email: 'Vk4508429@gmail.com',
    phone: '+918107811960', // Replace with your actual phone number
    whatsapp: '+918107811960', // Replace with your WhatsApp number
    instagram: 'https://www.instagram.com/art_of_devil?igsh=dG8wZnA1N3pjcjE4',
    youtube: 'https://youtube.com/@artofdevil28?si=wCtLzSoIOoDo7pZA'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using Formspree - real email service
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Inquiry: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setAlertType('success');
        setAlertMessage('Email has been sent!');
        setShowAlert(true);
        
        // Reset form on success
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Email sending failed:', error);
      // No error message shown - fail silently
    } finally {
      setIsLoading(false);
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  // Quick contact method
  const openWhatsApp = () => {
    const message = `Hi, I'm interested in your video editing services. Can we discuss my project?`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  const socialLinks = [
    { icon: 'bi-instagram', link: 'https://www.instagram.com/art_of_devil?igsh=dG8wZnA1N3pjcjE4', name: 'Instagram', color: '#E4405F' },
    { icon: 'bi-youtube', link: 'https://youtube.com/@artofdevil28?si=wCtLzSoIOoDo7pZA', name: 'YouTube', color: '#FF0000' }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background Elements */}
      <div className="contact-bg-elements">
        <div className="contact-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`contact-particle contact-particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="contact-shapes">
          <div className="contact-shape contact-circle-1"></div>
          <div className="contact-shape contact-circle-2"></div>
          <div className="contact-shape contact-triangle"></div>
        </div>
      </div>

      <Container className="contact-container">
        {/* Section Header */}
        <Row className="text-center mb-5">
          <Col lg={12}>
            <div className="contact-header" data-aos="fade-up">
              <div className="contact-badge">
                <i className="bi bi-chat-dots-fill"></i>
                <span>Let's Connect</span>
              </div>
              <h2 className="contact-title" data-aos="fade-up" data-aos-delay="200">
                <span className="title-highlight">Get In Touch</span>
              </h2>
              <p className="contact-description" data-aos="fade-up" data-aos-delay="400">
                Have a project in mind? I'd love to hear about it! Let's work together to bring your 
                creative ideas to life. Drop me a message and let's get started.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="contact-form-container" data-aos="fade-right">
              <div className="form-header">
                <h3 className="form-title">
                  <i className="bi bi-envelope-fill" style={{ color: '#ffc107', marginRight: '10px' }}></i>
                  Send Message
                </h3>
                <p className="form-subtitle">Messages are delivered directly to my email inbox via secure email service</p>
              </div>
              
              {showAlert && (
                <div className={`custom-alert ${alertType === 'error' ? 'alert-error' : ''}`}>
                  <div className="alert-content">
                    <i className={`bi ${alertType === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'}`}></i>
                    <div>
                      <strong>{alertType === 'success' ? 'Success!' : 'Error!'}</strong>
                      <p>
                        {alertMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Form 
                onSubmit={handleSubmit} 
                className="contact-form"
              >
                <Row>
                  <Col md={6} className="mb-4">
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-person-fill"></i>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your name"
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-envelope-fill"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="form-group mb-4">
                  <label className="form-label">
                    <i className="bi bi-chat-square-text-fill"></i>
                    Project Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="What's your project about?"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label">
                    <i className="bi bi-journal-text"></i>
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell me about your project, what you need help with, and any specific requirements..."
                  />
                </div>
                <button type="submit" className="submit-btn contact-submit-btn" disabled={isLoading}>
                  <span className="btn-text">
                    {isLoading ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <i className={`bi ${isLoading ? 'bi-hourglass-split' : 'bi-send-fill'} btn-icon`}></i>
                  <div className="btn-glow"></div>
                </button>
              </Form>

            </div>
          </Col>

          {/* Contact Information */}
          <Col lg={5}>
            <div className="contact-info-container" data-aos="fade-left">
              <div className="info-header">
                <h3 className="info-title">Let's Connect</h3>
                <p className="info-subtitle">WhatsApp for instant communication, or follow my work on social media</p>
              </div>

              {/* WhatsApp Info */}
              <div className="whatsapp-info-section" data-aos="fade-up" data-aos-delay="200">
                <div className="whatsapp-info-card">
                  <div className="whatsapp-icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div className="whatsapp-content">
                    <h4>Preferred Contact Method</h4>
                    <p>WhatsApp for instant communication</p>
                    <button 
                      onClick={openWhatsApp}
                      className="whatsapp-direct-btn"
                    >
                      <i className="bi bi-whatsapp"></i>
                      Start WhatsApp Chat
                    </button>
                  </div>
                </div>
              </div>


              {/* Social Media */}
              <div className="social-section" data-aos="fade-up" data-aos-delay="400">
                <h4 className="social-title">Follow My Work</h4>
                <p className="social-subtitle">See my latest artwork and behind-the-scenes content</p>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      data-aos="fade-up"
                      data-aos-delay={500 + (index * 50)}
                      style={{ '--social-color': social.color }}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="hours-section" data-aos="fade-up" data-aos-delay="600">
                <h4 className="hours-title">Working Hours</h4>
                <div className="hours-grid">
                  <div className="hours-row">
                    <span className="hours-day">Monday - Friday</span>
                    <span className="hours-time">9 AM - 6 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Saturday</span>
                    <span className="hours-time">10 AM - 2 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Sunday</span>
                    <span className="hours-time">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
