// src/slices/riskSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const riskSlice = createSlice({
  name: 'risk',
  initialState: {
    options: [5, 5, 5, 5, 5], // Initial values for Very Low
    totalValue: 25, // Initial total value
  },
  reducers: {
    updateOption: (state, action) => {
      const { index, value } = action.payload;
      state.options[index] = value;
      state.totalValue = state.options.reduce((acc, val) => acc + val, 0);
    },
  },
});

export const { updateOption } = riskSlice.actions;

export default riskSlice.reducer;
