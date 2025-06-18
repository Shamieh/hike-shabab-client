import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/HikeDetails.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const HikeDetails = () => {
  const { id } = useParams();
  const [hike, setHike] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/hikes/${id}`)
      .then(res => setHike(res.data))
      .catch(err => setError("Failed to load hike details"));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!hike) return <p className="loading">Loading hike details...</p>;

  return (
    <div className="hike-details-container">
      <h2 className="hike-title">{hike.name}</h2>
      <div className="hike-meta">
        <div className="hike-info">
          <ul>
            <li><strong>Location:</strong> {hike.location}</li>
            <li><strong>Date:</strong> {hike.date}</li>
            <li><strong>Time:</strong> {hike.time}</li>
            <li><strong>Difficulty:</strong> {hike.difficulty}</li>
            <li><strong>Max Capacity:</strong> {hike.capacity}</li>
          </ul>
        </div>
        <div className="hike-img">
          <img src={hike.image_url} alt={hike.name} />
        </div>
      </div>

      <div className="hike-description">
        <h3>Description</h3>
        <p>{hike.description}</p>
      </div>

      <div className="hike-actions">
        <Button variant="success">Reserve Hike</Button>
      </div>
    </div>
  );
};

export default HikeDetails;
