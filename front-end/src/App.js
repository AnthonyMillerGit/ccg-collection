// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import CollectionPage from './components/CollectionPage';
import GamesPage from './components/GamesPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;