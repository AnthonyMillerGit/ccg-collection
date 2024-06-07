// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 250px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardContent = styled.div`
  margin-top: 10px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.2em;
  text-align: center;
`;

const CardText = styled.p`
  font-size: 0.9em;
  text-align: center;
`;

const Card = ({ name, imageUrl, text }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={name} />}
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardText>{text}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;