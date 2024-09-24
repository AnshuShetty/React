// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route ("/") will load the Home component */}
        <Route path="/" element={<Home />} />

        {/* You can add other routes here if needed */}
        {/* Example: <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
