// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import LandingPage from './components/LandingPage';
import { fetchCards } from './api';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (!showLanding) {
      const getCards = async () => {
        try {
          const data = await fetchCards(page, pageSize);
          setCards(data);
        } catch (error) {
          console.error("Error fetching cards:", error);
        }
      };

      getCards();
    }
  }, [page, pageSize, showLanding]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleStart = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {showLanding ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <>
          <h1>Card Collection</h1>
          <div>
            {cards.map(card => (
              <Card key={card.id} name={card.name} imageUrl={card.imageUrl} text={card.text} />
            ))}
          </div>
          <div>
            <button onClick={handlePreviousPage} disabled={page === 1}>
              Previous
            </button>
            <button onClick={handleNextPage}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;