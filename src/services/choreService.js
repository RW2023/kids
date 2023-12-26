//src/services/choreService.js
import axios from 'axios';

const BASE_URL = '/api/chores';

export const fetchChores = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    // Handle or throw the error as needed
    throw error;
  }
};

// Add more functions here for create, update, delete chores as needed
