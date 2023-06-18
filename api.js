// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your API URL

// Simulates an API request to retrieve all items
export const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Simulates an API request to create a new item
export const createItem = async (item) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Simulates an API request to update an item
export const updateItem = async (item) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/items/${item.id}`, item);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Simulates an API request to delete an item
export const deleteItem = async (itemId) => {
  try {
    await axios.delete(`${API_BASE_URL}/items/${itemId}`);
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
