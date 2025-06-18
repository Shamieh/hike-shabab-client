import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './css/HikeDetails.css';

const HikeDetails = () => {
  const { id } = useParams();
  const [hike, setHike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avgTemp, setAvgTemp] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // Fetch hike details
  useEffect(() => {
    axios.get(`http://localhost:3001/api/hikes/${id}`)
      .then((res) => {
        setHike(res.data);
        return res.data.location || "Amman"; // fallback to Amman
      })
      .then((location) => {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`);
      })
      .then((weatherRes) => {
        const temp = weatherRes.data.forecast.forecastday[0].day.avgtemp_c;
        setAvgTemp(temp);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load hike or weather.");
        setLoading(false);
      });
  }, [id]);

  const reserveHike = () => {
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    axios.post("http://localhost:3001/api/reservations", {
      user_id: user.id,
      schedule_id: hike.id, // hike.id here is the hike_schedule id
    })
      .then(() => alert("✅ Hike reserved!"))
      .catch((err) => {
        if (err.response?.data?.message) {
          alert("⚠ " + err.response.data.message);
        } else {
          alert("❌ Reservation failed.");
        }
      });
  };

  if (loading) return <p>Loading hike details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="hike-container">
      <h1 className="hike-title"><strong>{hike.name}</strong></h1>

      <h2 className="hike-subtitle">Hike Summary</h2>
      <div className="hike-summary">
        <ul className="summary-list">
          <li><strong>Date:</strong> {new Date(hike.date).toLocaleDateString()}</li>
          <li><strong>Time:</strong> {hike.time}</li>
          <li><strong>Average Temperature:</strong> {avgTemp}°C</li>
          <li><strong>Location:</strong> {hike.location}</li>
          <li><strong>Difficulty:</strong> {hike.difficulty}</li>
          <li><strong>Max Capacity:</strong> {hike.max_capacity}</li>
        </ul>

        <div className="image-placeholder">
          <img src={hike.image_url} alt={hike.name} />
        </div>
      </div>

      <div className="hike-description">
        <h3>Detailed Description</h3>
        <p>{hike.description}</p>
      </div>

      <div className="hike-actions">
        <Button variant="success" onClick={reserveHike}>
          Reserve Hike
        </Button>
      </div>
    </div>
  );
};

export default HikeDetails;