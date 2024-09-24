// src/components/Home.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AlumniDetails from './AlumniDetails';
import JobPostings from './JobPostings';
import Announcements from './Announcements';
import AlumniCoordinators from './AlumniCoordinators';
import Careers from './Careers';
import './Home.css'; // Assuming you'll style the Home component

const Home = () => {
  return (
    <div className="home">
        <h1>Hi</h1>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/alumni-details" element={<AlumniDetails />} />
          <Route path="/job-postings" element={<JobPostings />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/faculty-coordinators" element={<AlumniCoordinators />} />
          <Route path="/student-coordinators" element={<AlumniCoordinators />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        
      </div>
    </div>
  );
};

export default Home;
