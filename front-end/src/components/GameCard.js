import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 200px;
  height: auto;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const GameCard = ({ card }) => {
  return (
    <CardContainer>
      <CardImage src={card.image_uris?.normal} alt={card.name} />
      <CardTitle>{card.name}</CardTitle>
    </CardContainer>
  );
};

export default GameCard;