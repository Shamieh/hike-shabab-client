import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './css/MyHikes.css';

const MyHikes = () => {
  const [hikes, setHikes] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:3001/api/reservations/${user.id}`)
      .then(res => setHikes(res.data))
      .catch(() => setHikes([]));
  }, []);

  const cancelReservation = async (id) => {
    await axios.delete(`http://localhost:3001/api/reservations/delete/${id}`);
    setHikes(hikes.filter(h => h.id !== id));
  };

  if (!user) return <p>Please login to view your hikes.</p>;

  return (
    <div className="myhikes-container">
      <h1>My Upcoming Hikes</h1>
      <p className="subtitle">Here are the hikes you’ve reserved. Get ready!</p>
      
      {hikes.length === 0 ? (
        <p className="no-hikes-msg">You have no upcoming hikes.</p>
      ) : (
        hikes.map(hike => (
          <div className="hike-card-item" key={hike.id}>
            <img src={hike.image_url} alt={hike.name} />
            <div className="hike-card-info">
              <h3>{hike.name}</h3>
              <p>Date & Time: {new Date(hike.date).toLocaleDateString()} at {hike.time}</p>
            </div>
            <div className="hike-card-buttons">

              <Button variant="danger" onClick={() => cancelReservation(hike.id)}>
                Cancel Reservation
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyHikes;
