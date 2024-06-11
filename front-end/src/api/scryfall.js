import axios from 'axios';

const scryfallInstance = axios.create({
  baseURL: 'https://api.scryfall.com/',
});

export const searchMagicTheGatheringCards = (params) => {
  let query = `cards/search?q=${encodeURIComponent(params.query)}`;

  if (params.color) {
    query += `+color:${params.color}`;
  }

  if (params.manaCost) {
    query += `+mana:${params.manaCost}`;
  }

  if (params.legality) {
    query += `+legal:${params.legality}`;
  }

  if (params.set) {
    query += `+set:${params.set}`;
  }

  if (params.type) {
    query += `+type:${params.type}`;
  }

  if (params.rarity) {
    query += `+rarity:${params.rarity}`;
  }

  return scryfallInstance.get(query);
};

export const getSets = () => {
  return scryfallInstance.get('sets');
};