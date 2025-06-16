import React from 'react';
import './css/Tips.css';

const Tips = () => {
  return (
    <div className="tips-container">
      {/* Hiking Tips Section */}
      <div className="section mb-5">
        <h1>
          <strong>🥾 Hiking Tips</strong>
        </h1>
        <br />

       <h3>
          <strong>✅ Pre-Hike Checklists</strong>
        </h3>
        <p>
          <strong>Plan Your Route</strong><br />Research the trail length, difficulty, and estimated time. Let someone know where you're going and when you'll return.
        </p>
        <p>
          <strong>Pack Essentials</strong><br />Use the Ten Essentials list: bring water, food, map, flashlight, first aid kit, and weather-appropriate clothing.
        </p>
        <p>
          <strong>Check Your Gear</strong><br />Make sure your backpack is comfortable, shoes are broken in, and all gear is in good working condition before heading out.
        </p>
      </div>


      <div className="section">
        <h3>
        <strong>🦺 Safety Advice</strong>
        </h3>
        <p>
          <strong>Stay on Marked Trails</strong><br />Avoid shortcuts or unmarked paths to protect the environment and reduce the risk of getting lost or injured.
        </p>
        <p>
          <strong>Monitor Weather Conditions</strong><br />Check the forecast before you go and be prepared for sudden changes. Avoid hiking during storms or extreme heat.
        </p>
        <p>
          <strong>Know Emergency Procedures</strong><br />Carry a whistle and charged phone. Learn basic first aid and how to signal for help if needed.
        </p>
      </div>
    </div>
  );
};

export default Tips;