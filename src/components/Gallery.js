import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Wedding Portfolio - Same Day Edits & Pre-Weddings
  const portfolioData = [
    // Same Day Edits
    {
      id: 1,
      title: "Eternal Moments Same Day Edit",
      category: "same-day-edit",
      type: "videography",
      image: "https://img.youtube.com/vi/kRaqzApa_Ng/maxresdefault.jpg",
      description: "Love story captured and delivered the same day",
      year: "2024",
      youtubeId: "kRaqzApa_Ng",
      youtubeUrl: "https://youtu.be/kRaqzApa_Ng?si=wU0_DQ9IQpYgZzFL",
      duration: "6:30"
    },
    {
      id: 2,
      title: "Sacred Vows Same Day Edit",
      category: "same-day-edit",
      type: "videography",
      image: "https://img.youtube.com/vi/YbyOEDAglQw/maxresdefault.jpg",
      description: "Wedding memories delivered before the night ends",
      year: "2024",
      youtubeId: "YbyOEDAglQw",
      youtubeUrl: "https://youtu.be/YbyOEDAglQw?si=tyCEa1m1rgJCATuE",
      duration: "7:15"
    },
    {
      id: 3,
      title: "Dark Romance Same Day Edit",
      category: "same-day-edit",
      type: "videography",
      image: "https://img.youtube.com/vi/MJbdgxG9VIc/maxresdefault.jpg",
      description: "When shadows dance with sacred ceremonies",
      year: "2024",
      youtubeId: "MJbdgxG9VIc",
      youtubeUrl: "https://youtu.be/MJbdgxG9VIc?si=0yVz3VnFTh-R3CWo",
      duration: "5:45"
    },
    {
      id: 4,
      title: "Cinematic Love Same Day Edit",
      category: "same-day-edit",
      type: "videography",
      image: "https://img.youtube.com/vi/JBIl5UwFQts/maxresdefault.jpg",
      description: "Complete love story crafted in shadows and light",
      year: "2024",
      youtubeId: "JBIl5UwFQts",
      youtubeUrl: "https://youtu.be/JBIl5UwFQts?si=vQ5kOdz3cxVDpQje",
      duration: "8:20"
    },
    // Pre-Wedding Sessions
    {
      id: 5,
      title: "Mystical Pre-Wedding Romance",
      category: "pre-wedding",
      type: "videography",
      image: "https://img.youtube.com/vi/Ky0Ti71j4Po/maxresdefault.jpg",
      description: "Capturing souls before they unite in darkness",
      year: "2024",
      youtubeId: "Ky0Ti71j4Po",
      youtubeUrl: "https://youtu.be/Ky0Ti71j4Po?si=_8jqKI-pRGkygT4f",
      duration: "4:25"
    },
    {
      id: 6,
      title: "Dark Pre-Wedding Chronicles",
      category: "pre-wedding",
      type: "videography",
      image: "https://img.youtube.com/vi/hXE6JA_oMgo/maxresdefault.jpg",
      description: "When love meets shadows before the big day",
      year: "2024",
      youtubeId: "hXE6JA_oMgo",
      youtubeUrl: "https://youtu.be/hXE6JA_oMgo?si=fiE7Aws2gbZCreLB",
      duration: "5:10"
    },
    {
      id: 7,
      title: "Eternal Bond Pre-Wedding",
      category: "pre-wedding",
      type: "videography",
      image: "https://img.youtube.com/vi/VqbzddiOGMY/maxresdefault.jpg",
      description: "Love stories written in shadows and light",
      year: "2024",
      youtubeId: "VqbzddiOGMY",
      youtubeUrl: "https://youtu.be/VqbzddiOGMY?si=4RxjzWIzgvdzbMeJ",
      duration: "3:55"
    },
    {
      id: 8,
      title: "Cinematic Pre-Wedding Journey",
      category: "pre-wedding",
      type: "videography",
      image: "https://img.youtube.com/vi/_NZzghU8yBE/maxresdefault.jpg",
      description: "Where hearts unite before sacred vows",
      year: "2024",
      youtubeId: "_NZzghU8yBE",
      youtubeUrl: "https://youtu.be/_NZzghU8yBE?si=CGgjNCJS9_j9dqlf",
      duration: "6:40"
    },
    // Wedding Teasers
    {
      id: 9,
      title: "Ethereal Wedding Teaser",
      category: "wedding-teaser",
      type: "videography",
      image: "https://img.youtube.com/vi/dyMkT6b3EuI/maxresdefault.jpg",
      description: "A beautiful glimpse into eternal love",
      year: "2024",
      youtubeId: "dyMkT6b3EuI",
      youtubeUrl: "https://youtu.be/dyMkT6b3EuI?si=jAAOZJdgnR4j2ni2",
      duration: "2:30"
    },
    {
      id: 10,
      title: "Dark Romance Wedding Teaser",
      category: "wedding-teaser",
      type: "videography",
      image: "https://img.youtube.com/vi/vUZE6tRN0m8/maxresdefault.jpg",
      description: "Where shadows dance with sacred vows",
      year: "2024",
      youtubeId: "vUZE6tRN0m8",
      youtubeUrl: "https://youtu.be/vUZE6tRN0m8?si=forP6gHcLE61-MHW",
      duration: "1:45"
    },
    {
      id: 11,
      title: "Mystical Love Teaser",
      category: "wedding-teaser",
      type: "videography",
      image: "https://img.youtube.com/vi/mwVi5_HJHbI/maxresdefault.jpg",
      description: "Love stories whispered in darkness",
      year: "2024",
      youtubeId: "mwVi5_HJHbI",
      youtubeUrl: "https://youtu.be/mwVi5_HJHbI?si=LbKccOmtnjZk-nyT",
      duration: "2:15"
    },
    {
      id: 12,
      title: "Cinematic Wedding Glimpse",
      category: "wedding-teaser", 
      type: "videography",
      image: "https://img.youtube.com/vi/k8WFiDrxmB0/maxresdefault.jpg",
      description: "Brief moments of eternal beauty",
      year: "2024",
      youtubeId: "k8WFiDrxmB0",
      youtubeUrl: "https://youtu.be/k8WFiDrxmB0?si=e_5cKKmN-bEsHIma",
      duration: "1:55"
    },
    {
      id: 13,
      title: "Sacred Bonds Wedding Teaser",
      category: "wedding-teaser",
      type: "videography",
      image: "https://img.youtube.com/vi/_fVawJEEKPA/maxresdefault.jpg",
      description: "When souls unite in shadows and light",
      year: "2024",
      youtubeId: "_fVawJEEKPA",
      youtubeUrl: "https://youtu.be/_fVawJEEKPA?si=jTOJ1QWWN-cuc7_O",
      duration: "2:05"
    },
    // Highlights
    {
      id: 14,
      title: "Cinematic Love Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/gCnRro0C22M/maxresdefault.jpg",
      description: "Best moments crafted into visual poetry",
      year: "2024",
      youtubeId: "gCnRro0C22M",
      youtubeUrl: "https://youtu.be/gCnRro0C22M?si=msAFhXSIo_yw6rRt",
      duration: "8:45"
    },
    {
      id: 15,
      title: "Eternal Wedding Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/LlI1LdQLoJE/maxresdefault.jpg",
      description: "Complete wedding day story in shadows and light",
      year: "2024",
      youtubeId: "LlI1LdQLoJE",
      youtubeUrl: "https://youtu.be/LlI1LdQLoJE?si=9SAtjcLm7Nbs6S5X",
      duration: "10:30"
    },
    {
      id: 16,
      title: "Dark Romance Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/TvIPq8ETeYQ/maxresdefault.jpg",
      description: "When love stories become cinematic masterpieces",
      year: "2024",
      youtubeId: "TvIPq8ETeYQ",
      youtubeUrl: "https://youtu.be/TvIPq8ETeYQ?si=_dwg8YYsDhnU2MlH",
      duration: "9:15"
    },
    {
      id: 17,
      title: "Sacred Moments Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/Ue3nUgdjww4/maxresdefault.jpg",
      description: "Every precious moment perfectly preserved",
      year: "2024",
      youtubeId: "Ue3nUgdjww4",
      youtubeUrl: "https://youtu.be/Ue3nUgdjww4?si=-OPZxsAIgXncfMtb",
      duration: "7:50"
    },
    {
      id: 18,
      title: "Mystical Wedding Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/_vZEw-Ah-6s/maxresdefault.jpg",
      description: "Love captured in timeless beauty",
      year: "2024",
      youtubeId: "_vZEw-Ah-6s",
      youtubeUrl: "https://youtu.be/_vZEw-Ah-6s?si=kv2jcsBi1kzTywFD",
      duration: "6:25"
    },
    {
      id: 19,
      title: "Ethereal Love Highlights",
      category: "highlights",
      type: "videography",
      image: "https://img.youtube.com/vi/mwXPfWpC6d4/maxresdefault.jpg",
      description: "Where dreams and reality unite in darkness",
      year: "2024",
      youtubeId: "mwXPfWpC6d4",
      youtubeUrl: "https://youtu.be/mwXPfWpC6d4?si=RUMzFDkh3v_Gemhj",
      duration: "11:20"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work', icon: 'grid-3x3-gap' },
    { key: 'same-day-edit', label: 'Same Day Edit', icon: 'clock' },
    { key: 'pre-wedding', label: 'Pre-Wedding', icon: 'camera2' },
    { key: 'wedding-teaser', label: 'Wedding Teaser', icon: 'heart' },
    { key: 'highlights', label: 'Highlights', icon: 'star' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === activeFilter || item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      {/* Background Elements */}
      <div className="gallery-bg-elements">
        <div className="gallery-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`gallery-particle gallery-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <Container className="gallery-container">
        {/* Section Header */}
        <Row className="text-center mb-5">
          <Col lg={12}>
            <div className="gallery-header" data-aos="fade-up">
              <div className="gallery-badge">
                <i className="bi bi-heart"></i>
                <span>Wedding Video Portfolio</span>
              </div>
              <h2 className="gallery-title" data-aos="fade-up" data-aos-delay="200">
                <span className="title-line">Crafted in <span className="title-highlight">Darkness</span></span>
              </h2>
              <p className="gallery-description" data-aos="fade-up" data-aos-delay="400">
                Complete wedding videography portfolio featuring highlights, pre-wedding sessions, cinematic teasers and same day edits. 
                Love stories crafted in shadows and light, creating cinematic masterpieces that preserve your most precious moments forever.
              </p>
            </div>
          </Col>
        </Row>

        {/* Filter Navigation */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="gallery-filters" data-aos="fade-up" data-aos-delay="600">
              {filters.map((filter, index) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                  data-aos="fade-up"
                  data-aos-delay={600 + (index * 100)}
                >
                  <i className={`bi bi-${filter.icon}`}></i>
                  <span>{filter.label}</span>
                  <div className="filter-indicator"></div>
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Portfolio Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="gallery-card">
                <div className="gallery-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <div className="gallery-category">
                        <i className={`bi bi-${
                          item.category === 'wedding-highlight' ? 'heart-fill' :
                          item.category === 'pre-wedding' ? 'camera2' :
                          item.category === 'same-day-edit' ? 'clock' :
                          item.category === 'wedding-teaser' ? 'heart' :
                          item.category === 'highlights' ? 'star' :
                          item.youtubeUrl ? 'youtube' : 
                          item.type === 'videography' ? 'play-circle' : 'camera'
                        }`}></i>
                        <span>{item.category.replace('-', ' ')}</span>
                        {item.youtubeUrl && <span className="youtube-badge">Video</span>}
                        {item.duration && <span className="duration-badge">{item.duration}</span>}
                      </div>
                      <h4 className="gallery-item-title">{item.title}</h4>
                      <p className="gallery-item-description">{item.description}</p>
                      <div className="gallery-meta">
                        <span className="gallery-year">{item.year}</span>
                        <div className="gallery-actions">
                          {(item.type === 'videography' || item.type === 'shorts') && (
                            <button 
                              className="gallery-action-btn play-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (item.youtubeUrl) {
                                  window.open(item.youtubeUrl, '_blank');
                                }
                              }}
                            >
                              <i className="bi bi-play-fill"></i>
                              {item.youtubeUrl ? (item.type === 'shorts' ? 'Watch Short' : 'Watch') : 'Play'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-glow"></div>
                </div>
                
                {/* Enhanced hover effect */}
                <div className={`gallery-hover-frame ${hoveredItem === item.id ? 'active' : ''}`}>
                  <div className="frame-corner frame-corner-tl"></div>
                  <div className="frame-corner frame-corner-tr"></div>
                  <div className="frame-corner frame-corner-bl"></div>
                  <div className="frame-corner frame-corner-br"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <Row className="text-center mt-5 pt-5">
          <Col lg={12}>
            <div className="gallery-stats" data-aos="fade-up">
              <div className="stat-group">
                <div className="stat-item">
                  <div className="stat-number">19</div>
                  <div className="stat-label">Wedding Videos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Highlights</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Wedding Teasers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Same Day Edits</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
