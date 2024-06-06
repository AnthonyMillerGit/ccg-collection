// src/api.js
import axios from 'axios';

const API_URL = 'https://api.magicthegathering.io/v1';

export const fetchCards = async (page = 1, pageSize = 20) => {
  try {
    const response = await axios.get(`${API_URL}/cards`, {
      params: {
        page,
        pageSize,
      },
    });
    return response.data.cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const searchCards = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/cards`, { params: { name: query } });
    return response.data.cards;
  } catch (error) {
    console.error("Error searching cards:", error);
    throw error;
  }
};