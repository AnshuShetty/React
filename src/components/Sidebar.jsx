// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button className="close-btn" onClick={toggleSidebar}>
        {isOpen ? 'X' : '≡'}
      </button>
      {isOpen && (
        <div>
          <div className="profile-section">
            <img src="profile-icon.png" alt="Profile" className="profile-icon" />
            <h3>John Doe</h3>
            <button>Edit Profile</button>
          </div>
          <div className="darkmode-section">
            <label>
              Dark Mode
              <input type="checkbox" />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
