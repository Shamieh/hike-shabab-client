import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <section className="hero-section">
      <img
        src="/hero-bg.png"
        alt="Jordan hiking landscape"
        className="hero-bg-image"
      />

      <div className="hero-overlay">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title">Discover Jordan's Trails</h1>
              <p className="hero-subtitle">
                Join guided hiking adventures through breathtaking landscapes,
                with HikeShabab.
              </p>
              {!user && (
                <div className="hero-buttons">
                  <Button
                    className="btn-explore me-3"
                    size="lg"
                    onClick={() => navigate('/login')}
                  >
                    Explore Hikes
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
