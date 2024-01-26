// searchSlice.js

import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
 name: 'search',
 initialState: {
  searchTerm: '', // genel arama terimi
  brandSearchTerm: '', // marka arama terimi
  modelSearchTerm: '', // model arama terimi
 },
 reducers: {
  setSearchTerm: (state, action) => {
   state.searchTerm = action.payload;
  },
  setBrandSearchTerm: (state, action) => {
   state.brandSearchTerm = action.payload;
  },
  setModelSearchTerm: (state, action) => {
   state.modelSearchTerm = action.payload;
  },
 },
});

export const { setSearchTerm, setBrandSearchTerm, setModelSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
