import React from 'react';
import { Link } from 'react-router-dom';

// Minimal Home Page Component
const HomePage = ({ teamName }) => {
  return (
    <div className="minimal-home">
      <h1>Welcome to <span className="team-name">{teamName}</span> Team</h1>
      <p>Manage your team members efficiently in one centralized platform.</p>
      
      <div className="home-buttons">
        <Link to="/add-member" className="btn btn-primary btn-lg">
          Add New Member
        </Link>
        <Link to="/members" className="btn btn-outline-primary btn-lg">
          View Team
        </Link>
      </div>
    </div>
  );
};

export default HomePage;