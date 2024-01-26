import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Brand from '../home/Brand';
import { setBrandFilter } from '../../redux/productsSlice';

const mockStore = configureStore([]);

describe('Brand component', () => {
 let store;

 beforeEach(() => {
  store = mockStore({
   products: {
    selectedBrand: 'Brand1',
    products: [
     { id: 1, brand: 'Brand1' },
     { id: 2, brand: 'Brand2' },
     { id: 3, brand: 'Brand3' },
    ],
   },
  });
 });

 test('renders with initial state', () => {
  const { getByText, getByPlaceholderText } = render(
   <Provider store={store}>
    <Brand />
   </Provider>
  );

  // Check if the component renders properly
  expect(getByText('Brands')).toBeTruthy();

  // Check if the search input is rendered
  expect(getByPlaceholderText('Search')).toBeTruthy();

  // Check if the list of brands is rendered
  expect(getByText('Brand1')).toBeTruthy();
  expect(getByText('Brand2')).toBeTruthy();
  expect(getByText('Brand3')).toBeTruthy();
 });

 test('filters brands based on search term', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
   <Provider store={store}>
    <Brand />
   </Provider>
  );

  const searchInput = getByPlaceholderText('Search');

  // Simulate typing in the search input
  fireEvent.change(searchInput, { target: { value: 'Brand1' } });

  // Check if only Brand1 is visible
  expect(getByText('Brand1')).toBeTruthy();
  expect(queryByText('Brand2')).toBeNull();
  expect(queryByText('Brand3')).toBeNull();
 });

 test('handles brand selection', () => {
  const { getByText } = render(
   <Provider store={store}>
    <Brand />
   </Provider>
  );

  const brand2Checkbox = getByText('Brand2').previousElementSibling;

  // Simulate clicking on the checkbox
  fireEvent.click(brand2Checkbox);

  // Check if the brand selection action was dispatched with the correct payload
  const actions = store.getActions();
  expect(actions).toEqual([setBrandFilter('')]);
 });
});
