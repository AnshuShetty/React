// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AlumniDetails from './components/AlumniDetails';
import JobPostings from './components/JobPostings';
import Announcements from './components/Announcements';
import AlumniCoordinators from './components/AlumniCoordinators';
import Careers from './components/Careers';
import Sidebar from './components/Sidebar';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/alumni-details" element={<AlumniDetails />} />
          <Route path="/job-postings" element={<JobPostings />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/faculty-coordinators" element={<AlumniCoordinators />} />
          <Route path="/student-coordinators" element={<AlumniCoordinators />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
