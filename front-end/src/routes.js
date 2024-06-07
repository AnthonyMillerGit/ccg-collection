// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import CollectionPage from './components/CollectionPage';
import GamesPage from './components/GamesPage';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/cards" element={<App />} />
    </Routes>
  </Router>
);

export default RoutesComponent;