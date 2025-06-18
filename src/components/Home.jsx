import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import HikeCard from './HikeCard';
import axios from 'axios';
import './css/HikeCard.css';

const Home = () => {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/hikes")
      .then(res => setHikes(res.data))
      .catch(() => setHikes([]));
  }, []);

  return (
    <div>
      <Hero />
      <div className="hike-grid">
        {hikes.map(hike => (
          <HikeCard key={hike.id} hike={hike} />
        ))}
      </div>
    </div>
  );
};

export default Home;
