// src/components/AlumniCoordinators.js
import React from 'react';
import { Link } from 'react-router-dom';

const AlumniCoordinators = () => {
  return (
    <div>
      <h2>Alumni Coordinators</h2>
      <p>Select one of the following:</p>
      <ul>
        <li><Link to="/faculty-coordinators">Faculty Coordinators</Link></li>
        <li><Link to="/student-coordinators">Student Coordinators</Link></li>
      </ul>
    </div>
  );
};

export default AlumniCoordinators;
