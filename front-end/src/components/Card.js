// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const Card = ({ name, imageUrl, text }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{text}</p>
    </CardContainer>
  );
};

export default Card;