import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cardReducer from './cardSlice';
import searchReducer from './searchSlice';


export const store = configureStore({
 reducer: {
  products: productsReducer,
  card: cardReducer,
  search: searchReducer,
 },
});
