// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #777;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/cards');
  };

  return (
    <LandingContainer>
      <Title>Welcome to Card Collection</Title>
      <Subtitle>Discover and collect your favorite cards</Subtitle>
      <Button onClick={handleStart}>Get Started</Button>
    </LandingContainer>
  );
};

export default LandingPage;