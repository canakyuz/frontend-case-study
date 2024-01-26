import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 products: [],
 brands: [],
 selectedBrand: null,
 selectedModel: null,
 sorting: '',
 loading: false,
 productDetail: null,
};

export const productsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {
  setProducts: (state, action) => {
   state.products = action.payload;
   state.filteredProducts = action.payload;
  },
  setBrands: (state, action) => {
   state.brands = action.payload;
  },
  setBrandFilter: (state, action) => {
   state.selectedBrand = action.payload;
  },
  setModelFilter: (state, action) => {
   state.selectedModel = action.payload;
  },
  setSorting: (state, action) => {
   state.sorting = action.payload;
  },
  setLoading: (state, action) => {
   state.loading = action.payload;
  },
  setProductDetail: (state, action) => {
   state.productDetail = action.payload;
  },
 },
});

export const {
 setProducts,
 setBrands,
 setBrandFilter,
 setModelFilter,
 setSorting,
 setLoading,
 setProductDetail, // Yeni ekledik
} = productsSlice.actions;

// Asenkron API çağrısını yapan bir thunk
export const fetchProducts = () => async (dispatch) => {
 dispatch(setLoading(true));

 try {
  const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products');
  const data = await response.json();

  dispatch(setProducts(data));
  dispatch(setLoading(false));
 } catch (error) {
  console.error('Error fetching data:', error);
  dispatch(setLoading(false));
 }
};

// Ürün detayını getiren asenkron thunk
export const fetchDetailProduct = (productId) => async (dispatch) => {
 dispatch(setLoading(true));

 try {
  const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${productId}`);
  const data = await response.json();

  dispatch(setProductDetail(data)); // setProductDetail action'ını çağırdık
  dispatch(setLoading(false));
 } catch (error) {
  console.error('Error fetching data:', error);
  dispatch(setLoading(false));
 }
};

export default productsSlice.reducer;
