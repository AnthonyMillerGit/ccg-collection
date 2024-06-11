import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';
import GamesPage from './components/GamesPage';
import GameDetailsPage from './components/GameDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;