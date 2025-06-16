import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './css/HikeCard.css';

function HikeCard() {
  return (
    <Card className="hike-card">
      <Card.Img
        variant="top"
        src="/hasa.jpg"
        alt="Wadi Al-Hasa"
        className="hike-card-img"
      />
      <Card.Body>
        <Card.Title className="hike-card-title">Wadi Al-Hasa</Card.Title>
        <Card.Text className="hike-card-text">
          Explore the longest valley in Jordan with water trails and majestic views.
        </Card.Text>
        <Button className="hike-card-btn">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default HikeCard;
