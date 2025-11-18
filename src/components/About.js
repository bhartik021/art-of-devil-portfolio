import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSkillsAnimated(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Cinematic Editing', percentage: 92, icon: 'bi-film' },
    { name: 'Color Grading', percentage: 88, icon: 'bi-palette-fill' },
    { name: 'Motion Graphics', percentage: 85, icon: 'bi-magic' },
    { name: 'Photoshop Mastery', percentage: 96, icon: 'bi-brush-fill' },
    { name: 'Premiere Wizardry', percentage: 90, icon: 'bi-play-circle-fill' },
    { name: 'After Effects', percentage: 87, icon: 'bi-lightning-fill' },
  ];

  const services = [
    {
      icon: 'bi-scissors',
      title: 'Video Editing',
      description: 'Professional post-production that transforms raw footage into compelling visual stories',
      category: 'Editing'
    },
    {
      icon: 'bi-palette-fill',
      title: 'Color Grading',
      description: 'Professional color grading that creates stunning atmospheres and captivating cinematic moods',
      category: 'Grading'
    },
    {
      icon: 'bi-magic',
      title: 'Visual Effects',
      description: 'Motion graphics and effects that bend reality, creating impossible worlds and ethereal experiences',
      category: 'Effects'
    }
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="about-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`about-particle about-particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="about-shapes">
          <div className="about-shape about-circle-1"></div>
          <div className="about-shape about-circle-2"></div>
          <div className="about-shape about-triangle"></div>
        </div>
      </div>

      <Container className="about-container">
        {/* Section Header */}
        <Row className="text-center mb-5">
          <Col lg={12}>
            <div className="about-header" data-aos="fade-up">
              <div className="about-badge">
                <i className="bi bi-person-lines-fill"></i>
                <span>The Artist</span>
              </div>
              <h2 className="about-title" data-aos="fade-up" data-aos-delay="200">
                <span className="title-line">Made by Human from</span>
                <span className="title-highlight">Another Dimension</span>
              </h2>
              <p className="about-description" data-aos="fade-up" data-aos-delay="400">
                A visionary photographer and video editor who transforms ordinary moments into extraordinary 
                visual stories, revealing the beauty hidden in every moment and the emotions that create lasting memories.
              </p>
            </div>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="align-items-center mb-5">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="about-image-container" data-aos="fade-right">
              <div className="about-image-frame">
                <img 
                  src="/images/about-image.jpg" 
                  alt="Art of Devil - Professional Video Editor and Motion Graphics Designer" 
                  className="about-image"
                />
                <div className="about-image-overlay">
                  <div className="overlay-content">
                    <div className="experience-badge">3+ Years</div>
                    <div className="dimension-text">From Another Dimension</div>
                  </div>
                </div>
              </div>
              <div className="image-glow"></div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="about-content" data-aos="fade-left">
              <div className="content-section">
                <h3 className="section-title">The Vision</h3>
                <p className="content-text">
                  With over 3 years of experience pushing the boundaries of visual storytelling, 
                  I specialize in crafting beautiful, emotional narratives that reveal the hidden 
                  beauty within every frame. My art transcends the ordinary, capturing hearts and emotions 
                  in ways that defy conventional photography.
                </p>
              </div>

              <div className="content-section">
                <h3 className="section-title">The Craft</h3>
                <p className="content-text">
                  From intimate portraits that reveal inner beauty to cinematic masterpieces that 
                  blur reality and dreams, I bring a creative perspective to every project. 
                  My work doesn't just capture moments—it transforms them into visual poetry that 
                  speaks to the heart.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Happy Couples</div>
                  <div className="stat-description">Beautiful portraits capturing love stories</div>
                </div>
                <div className="stat-card" data-aos="fade-up" data-aos-delay="700">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Dimensions</div>
                  <div className="stat-description">Creative realms explored</div>
                </div>
                <div className="stat-card" data-aos="fade-up" data-aos-delay="800">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years</div>
                  <div className="stat-description">Mastering the art of photography</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="skills-header text-center mb-5" data-aos="fade-up">
              <h3 className="skills-title">Creative Expertise</h3>
              <p className="skills-description">Professional technical expertise and creative vision</p>
            </div>
          </Col>
          
          <Col lg={6}>
            {skills.slice(0, 3).map((skill, index) => (
              <div key={skill.name} className="skill-item" data-aos="fade-right" data-aos-delay={index * 100}>
                <div className="skill-header">
                  <div className="skill-info">
                    <i className={skill.icon}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: skillsAnimated ? `${skill.percentage}%` : '0%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>

          <Col lg={6}>
            {skills.slice(3).map((skill, index) => (
              <div key={skill.name} className="skill-item" data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="skill-header">
                  <div className="skill-info">
                    <i className={skill.icon}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: skillsAnimated ? `${skill.percentage}%` : '0%',
                      animationDelay: `${(index + 4) * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* Services Section */}
        <Row>
          <Col lg={12}>
            <div className="services-header text-center mb-5" data-aos="fade-up">
              <h3 className="services-title">Creative Services</h3>
              <p className="services-description">Otherworldly creative solutions</p>
            </div>
          </Col>
          
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={service.title}>
              <div className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-icon-container">
                  <i className={service.icon}></i>
                  <div className="service-category">{service.category}</div>
                </div>
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-hover-effect"></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Philosophy Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="philosophy-section" data-aos="fade-up">
              <div className="philosophy-content">
                <h3 className="philosophy-title">The Philosophy</h3>
                <p className="philosophy-text">
                  "In every moment lies a story untold, in every glance dwells an emotion unexplored. 
                  I don't just capture images—I harvest emotions, distill dreams, and transform the ordinary 
                  into the extraordinary. My lens sees beyond the surface, into realms where beauty and love 
                  create timeless memories."
                </p>
                <div className="philosophy-signature">— Art of Devil</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
