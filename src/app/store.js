// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/CartSlice';

// Create the store first
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Subscribe to changes AFTER the store is created
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

