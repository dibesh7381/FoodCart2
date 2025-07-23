// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cart'));

const initialState = savedCart || {
  cartItems: [],
  totalAmount: 0,
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotal(state.cartItems);
    },
    incrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity++;
      state.totalAmount = calculateTotal(state.cartItems);
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
      state.totalAmount = calculateTotal(state.cartItems);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.totalAmount = calculateTotal(state.cartItems);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

