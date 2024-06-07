// src/api.js
import axios from 'axios';

const SCRYFALL_API_URL = 'https://api.scryfall.com';

export const fetchCards = async (page = 1, pageSize = 20) => {
  try {
    const response = await axios.get(`${SCRYFALL_API_URL}/cards/search`, {
      params: {
        q: '',
        page,
        unique: 'cards',
        order: 'set',
        dir: 'asc',
        include_extras: false,
        include_multilingual: false,
        include_variations: false,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const searchCards = async (query) => {
  try {
    const response = await axios.get(`${SCRYFALL_API_URL}/cards/search`, {
      params: {
        q: query,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error searching cards:", error);
    throw error;
  }
};