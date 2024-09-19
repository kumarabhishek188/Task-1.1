import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <div className="tabs">
          <button className="tab active">Daily</button>
          <button className="tab">Weekly</button>
          <button className="tab">Monthly</button>
        </div>
        <div className="points">
          <span>Points: 3982</span>
          <span>₹2875.00</span>
        </div>
      </div>

      <div className="profile-card">
        <img src="data:image/png;base64,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" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>ABHISHEK KUMAR</h2>
          <p>@abhishek</p>
          <div className="details">
            <span className="badge">Male</span>
            <span className="member-since">Member Since: Sep 2024</span>
          </div>
          <div className="statistics">
            <div className="stat-item">
              <h3>Daily</h3>
              <p className="points-detail">Points: <strong>775</strong></p>
              <p className="points-detail">Stars: <strong>5</strong></p>
            </div>
            <div className="stat-item">
              <h3>Weekly</h3>
              <p className="points-detail">Points: <strong>487</strong></p>
              <p className="points-detail">Stars: <strong>9</strong></p>
            </div>
            <div className="stat-item">
              <h3>Monthly</h3>
              <p className="points-detail">Points: <strong>1443</strong></p>
              <p className="points-detail">Stars: <strong>5</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
