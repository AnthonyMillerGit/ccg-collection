// src/components/LandingPage.js
import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

const LandingPage = ({ onStart }) => {
  return (
    <LandingContainer>
      <Title>Welcome to Card Collection</Title>
      <Subtitle>Discover and collect your favorite cards</Subtitle>
      <Button onClick={onStart}>Get Started</Button>
    </LandingContainer>
  );
};

export default LandingPage;