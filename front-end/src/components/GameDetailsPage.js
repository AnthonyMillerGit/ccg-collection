import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import GameCard from './GameCard';
import { searchMagicTheGatheringCards, getSets } from '../api/scryfall';

const GameDetailsContainer = styled.div`
  padding: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SearchSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #83B4FF;
  color: #FDFFE2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5A72A0;
  }
`;

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('');
  const [manaCost, setManaCost] = useState('');
  const [legality, setLegality] = useState('');
  const [set, setSet] = useState('');
  const [sets, setSets] = useState([]);
  const [type, setType] = useState('');
  const [rarity, setRarity] = useState('');

  useEffect(() => {
    // Fetch sets for the dropdown
    getSets()
      .then(response => {
        setSets(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching sets:', error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (gameId === 'magic-the-gathering') {
      const params = {
        query,
        color,
        manaCost,
        legality,
        set,
        type,
        rarity,
      };
      searchMagicTheGatheringCards(params)
        .then(response => {
          setCards(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching Magic: The Gathering cards:', error);
        });
    }
  };

  return (
    <>
      <Header />
      <GameDetailsContainer>
        <h2>{gameId.replace('-', ' ').toUpperCase()}</h2>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search for cards..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchSelect value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Any Color</option>
            <option value="w">White</option>
            <option value="u">Blue</option>
            <option value="b">Black</option>
            <option value="r">Red</option>
            <option value="g">Green</option>
            <option value="c">Colorless</option>
          </SearchSelect>
          <SearchSelect value={manaCost} onChange={(e) => setManaCost(e.target.value)}>
            <option value="">Any Mana Cost</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </SearchSelect>
          <SearchSelect value={legality} onChange={(e) => setLegality(e.target.value)}>
            <option value="">Any Legality</option>
            <option value="standard">Standard</option>
            <option value="modern">Modern</option>
            <option value="commander">Commander</option>
            <option value="legacy">Legacy</option>
            <option value="vintage">Vintage</option>
          </SearchSelect>
          <SearchSelect value={set} onChange={(e) => setSet(e.target.value)}>
            <option value="">Any Set</option>
            {sets.map(set => (
              <option key={set.code} value={set.code}>
                {set.name}
              </option>
            ))}
          </SearchSelect>
          <SearchSelect value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any Type</option>
            <option value="creature">Creature</option>
            <option value="instant">Instant</option>
            <option value="sorcery">Sorcery</option>
            <option value="artifact">Artifact</option>
            <option value="enchantment">Enchantment</option>
            <option value="planeswalker">Planeswalker</option>
            <option value="land">Land</option>
          </SearchSelect>
          <SearchSelect value={rarity} onChange={(e) => setRarity(e.target.value)}>
            <option value="">Any Rarity</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="mythic">Mythic</option>
          </SearchSelect>
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {cards.map(card => (
          <GameCard key={card.id} card={card} />
        ))}
      </GameDetailsContainer>
    </>
  );
};

export default GameDetailsPage;