// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import riskReducer from '../slices/riskSlice';

export const store = configureStore({
  reducer: {
    risk: riskReducer,
  },
});
