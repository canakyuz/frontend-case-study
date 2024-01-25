import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 products: [],
 filteredProducts: [],
 selectedBrand: null,
};

export const productsSlice = createSlice({
 name: 'products',
 initialState: {
  products: [],
  sorting: '',
 },
 reducers: {
  setProducts: (state, action) => {
   state.products = action.payload;
   state.filteredProducts = action.payload;
  },
  setSorting: (state, action) => {
   state.sorting = action.payload;
  },
  setBrandFilter: (state, action) => {
   state.selectedBrand = action.payload;
   state.filteredProducts = state.products.filter(
    (product) => product.brand === action.payload
   );
  },
  setModelFilter: (state, action) => {
   state.selectedModel = action.payload;
   state.filteredProducts = state.products.filter(
    (product) => product.model === action.payload
   );
  }
 },
});

export const { setProducts, setSorting, setBrandFilter, setModelFilter } = productsSlice.actions;

export default productsSlice.reducer;

