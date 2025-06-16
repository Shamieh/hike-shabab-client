import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './css/Hero.css';


const Home = () => {
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
              <h1 className="hero-title">
                Discover Jordan's Trails
              </h1>
              <p className="hero-subtitle">
                Join guided hiking adventures through breathtaking landscapes, 
                with HikeShabab.
              </p>
              <div className="hero-buttons">
                <Button className="btn-explore me-3" size="lg">
                  Explore Hikes
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Home;
