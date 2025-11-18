import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const YouTubeShorts = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const youtubeShorts = [
    {
      id: 1,
      videoId: 'r7ZuMB6V1w4',
      title: 'Creative Artistry Unveiled',
      description: 'Exploring creative lighting techniques',
      category: 'Photography',
      duration: '0:45'
    },
    {
      id: 2,
      videoId: '8KkCUheV2l8',
      title: 'Behind the Lens',
      description: 'Creative process exploration',
      category: 'BTS',
      duration: '0:52'
    },
    {
      id: 3,
      videoId: '9ZvuIi9y4DU',
      title: 'Visual Effects',
      description: 'When reality bends to art',
      category: 'Effects',
      duration: '0:38'
    },
    {
      id: 4,
      videoId: 'IjogozGVngU',
      title: 'Cinematic Vision',
      description: 'Storytelling through frames',
      category: 'Cinematic',
      duration: '0:41'
    },
    {
      id: 5,
      videoId: 'qUu2hFKv6CA',
      title: 'Creative Aesthetics',
      description: 'Beauty in creativity revealed',
      category: 'Creative Art',
      duration: '0:47'
    },
    {
      id: 6,
      videoId: 'h2Io5qMdPwY',
      title: 'Composition Magic',
      description: 'Elements align perfectly',
      category: 'Technique',
      duration: '0:35'
    },
    {
      id: 7,
      videoId: 'pzU_1FJL5EM',
      title: 'Motion Mastery',
      description: 'Graphics come alive',
      category: 'Animation',
      duration: '0:43'
    },
    {
      id: 8,
      videoId: 'MYUFhREf2dk',
      title: 'Visual Poetry',
      description: 'When images speak volumes',
      category: 'Artistic',
      duration: '0:39'
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="youtube-shorts" className="youtube-shorts-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-4 fw-bold mb-3 text-white" data-aos="fade-up">
                <i className="bi bi-youtube text-warning me-3"></i>
                YouTube Shorts
              </h2>
              <p className="lead text-light" data-aos="fade-up" data-aos-delay="200">
                Bite-sized glimpses into the art of visual storytelling
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {youtubeShorts.map((video, index) => (
              <Col lg={3} md={4} sm={6} key={video.id}>
                <div 
                  className="youtube-video-card" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="video-thumbnail-container">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="video-thumbnail"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="video-overlay">
                      <div className="play-button">
                        <i className="bi bi-play-fill"></i>
                      </div>
                      <div className="video-duration">{video.duration}</div>
                    </div>
                  </div>
                  <div className="video-info">
                    <span className="video-category">{video.category}</span>
                    <h5 className="video-title">{video.title}</h5>
                    <p className="video-description">{video.description}</p>
                    <div className="video-actions">
                      <button className="btn-play">
                        <i className="bi bi-play-circle-fill me-2"></i>
                        Watch Now
                      </button>
                      <a 
                        href={`https://youtube.com/shorts/${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-youtube"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="text-center mt-5">
            <Col lg={12}>
              <div data-aos="fade-up" className="channel-cta">
                <h4 className="text-white mb-3">Join the Creative Journey</h4>
                <p className="text-light mb-4">
                  Subscribe for exclusive behind-the-scenes content and artistic insights
                </p>
                <a 
                  href="https://youtube.com/@artofdevil28?si=wCtLzSoIOoDo7pZA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="subscribe-btn"
                >
                  <i className="bi bi-youtube me-2"></i>
                  Subscribe to @artofdevil28
                  <span className="subscriber-count">Join the community</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Modal */}
      <Modal 
        show={showModal} 
        onHide={closeModal} 
        centered 
        size="lg"
        className="video-modal"
      >
        <Modal.Body className="p-0">
          {selectedVideo && (
            <div className="modal-video-container">
              <button 
                className="modal-close-btn"
                onClick={closeModal}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="modal-iframe"
              ></iframe>
              <div className="modal-video-info">
                <span className="modal-category">{selectedVideo.category}</span>
                <h5 className="modal-title">{selectedVideo.title}</h5>
                <p className="modal-description">{selectedVideo.description}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default YouTubeShorts;
