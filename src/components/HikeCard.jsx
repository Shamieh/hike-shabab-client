import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HikeCard({ hike }) {
  const navigate = useNavigate();

  const hikeId = hike.schedule_id || hike.id; // fallback in case data comes from different structure

  return (
    <Card className="hike-card">
      <Card.Img variant="top" src={hike.image_url} />
      <Card.Body>
        <Card.Title>{hike.name}</Card.Title>
        <Card.Text>{hike.description}</Card.Text>
        <Button className="hike-card-btn" onClick={() => navigate(`/hike/${hikeId}`)}>
          More Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HikeCard;
