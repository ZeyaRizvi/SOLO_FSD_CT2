import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import ViewMembersPage from './pages/ViewMembersPage';
import MemberDetailsPage from './pages/MemberDetailsPage';

function App() {
  // Team name configuration - this could be loaded from a configuration file or API in a real app
  const teamName = "SOLO SQUAD";
  
  return (
    <div className="app-container">
      {/* Navbar will be displayed on all pages */}
      <Navbar teamName={teamName} />
      
      {/* Set up routes for different pages */}
      <div className="container page-container">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage teamName={teamName} />} />
          
          {/* Add new team member route */}
          <Route path="/add-member" element={<AddMemberPage />} />
          
          {/* View all team members route */}
          <Route path="/members" element={<ViewMembersPage />} />
          
          {/* View details of a specific team member route */}
          <Route path="/members/:id" element={<MemberDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;