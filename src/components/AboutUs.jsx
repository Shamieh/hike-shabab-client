import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './css/AboutUs.css';

const AboutUs = () => {
    return (
        <>

    <section className="about-us-section">
      
      <img 
        src="/aboutus.jpg" 
        alt="about us" 
        className="about-us-bg-image"
      />
      
      <div className="about-us-overlay">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="about-us-title">
                About HikeShabab
              </h1>
            </Col>
          </Row>
        </Container>
              
      </div>
    </section>
    <div className="about-us-subtitle">
        <p>

               Welcome to HikeShabab, your dedicated platform for discovering and booking incredible guided hiking adventures across Jordan's stunning landscapes.
We built HikeShabab out of a shared love for the outdoors and a desire to connect people with the natural beauty of Jordan. Our mission is to make exploring Jordan's diverse trails accessible, safe, and truly unforgettable.
On HikeShabab, you can:
        </p>

<li>Explore & Discover: Browse a curated selection of guided hikes, complete with details on location, date, and difficulty.
</li>
<li>Book Your Adventure: Easily reserve your spot on upcoming expeditions.
</li>
<li>Get Ready: Find essential tips on hiking safety and gear preparation.
</li>
<p>

Join us at HikeShabab and let's explore the magic of Jordan, one step at a time!
              </p>
</div>
              </>
    );
}

export default AboutUs;
