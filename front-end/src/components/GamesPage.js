import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const GamesContainer = styled.div`
  padding: 20px;
`;

const GameLink = styled(Link)`
  display: block;
  margin: 10px 0;
  color: #83B4FF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const GamesPage = () => {
  return (
    <>
      <Header />
      <GamesContainer>
        <h2>Available Games</h2>
        <GameLink to="/games/magic-the-gathering">Magic: The Gathering</GameLink>
        <GameLink to="/games/other-game">Other Game</GameLink>
        {/* Add more games as needed */}
      </GamesContainer>
    </>
  );
};

export default GamesPage;