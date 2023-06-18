// store.js

import { configureStore } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems, createItem, updateItem, deleteItem } from './api';

// Async Thunks
export const fetchItemsAsync = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetchItems();
  return response;
});

export const createItemAsync = createAsyncThunk('items/createItem', async (item) => {
  const response = await createItem(item);
  return response;
});

export const updateItemAsync = createAsyncThunk('items/updateItem', async (item) => {
  const response = await updateItem(item);
  return response;
});

export const deleteItemAsync = createAsyncThunk('items/deleteItem', async (itemId) => {
  await deleteItem(itemId);
  return itemId;
});

// Slice
const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(createItemAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.items.findIndex((item) => item.id === updatedItem.id);
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter((item) => item.id !== itemId);
      });
  },
});

// Store
export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export const { actions: itemsActions } = itemsSlice;
