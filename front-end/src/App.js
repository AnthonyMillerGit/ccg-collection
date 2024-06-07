// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import SearchForm from './components/SearchForm';
import { fetchCards, searchCards } from './api';
import GlobalStyle from './styles/globalStyles';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);

  useEffect(() => {
    const getCards = async () => {
      try {
        const data = await fetchCards(page, pageSize);
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    getCards();
  }, [page, pageSize]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleSearch = async (query) => {
    try {
      const data = await searchCards(query);
      setCards(data);
    } catch (error) {
      console.error("Error searching cards:", error);
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Card Collection</h1>
      <SearchForm onSearch={handleSearch} />
      <CardGrid>
        {cards.map((card) => (
          <Card key={card.id} name={card.name} imageUrl={card.image_uris ? card.image_uris.small : ''} text={card.oracle_text} />
        ))}
      </CardGrid>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default App;