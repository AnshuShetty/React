// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>NEXUS CEC</h3>
      </div>
      <ul className="nav-links">
        <li><Link to="/alumni-details">Alumni Details</Link></li>
        <li><Link to="/job-postings">Job Postings</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li className="dropdown">
          <span>Alumni Coordinators</span>
          <ul className="dropdown-content">
            <li><Link to="/faculty-coordinators">Faculty Coordinators</Link></li>
            <li><Link to="/student-coordinators">Student Coordinators</Link></li>
          </ul>
        </li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
