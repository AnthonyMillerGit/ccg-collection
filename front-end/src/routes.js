// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cards" element={<App />} />
    </Routes>
  </Router>
);

export default RoutesComponent;