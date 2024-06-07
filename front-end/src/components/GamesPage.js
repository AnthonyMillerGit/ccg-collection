// src/components/GamesPage.js
import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const GamesPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <h1>Games</h1>
        <p>This is the games page where you can search for cards.</p>
      </PageContainer>
    </>
  );
};

export default GamesPage;