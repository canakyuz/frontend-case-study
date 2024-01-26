import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import { addToCard } from '../../redux/cardSlice';
import { setSearchTerm } from '../../redux/searchSlice'; // Arama terimini Redux store'dan al

import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const Pagination = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.products);
 const selectedBrand = useSelector((state) => state.products.selectedBrand);
 const selectedModel = useSelector((state) => state.products.selectedModel);
 const selectedSorting = useSelector((state) => state.products.sorting);
 const searchTerm = useSelector((state) => state.search.searchTerm); // Arama terimini al

 const [pageNumber, setPageNumber] = useState(0);
 const productsPerPage = 12;

 useEffect(() => {
  dispatch(fetchProducts());
 }, [dispatch]);

 useEffect(() => {
  // Arama terimine göre ürünleri filtrele
  dispatch(setSearchTerm(searchTerm));
 }, [dispatch, searchTerm]);


 const indexOfLastProduct = (pageNumber + 1) * productsPerPage;
 const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

 let currentProducts = products;

 if (selectedBrand) {
  currentProducts = currentProducts.filter(product => product.brand === selectedBrand);
 }

 if (selectedModel) {
  currentProducts = currentProducts.filter(product => product.model === selectedModel);
 }

 if (searchTerm) {
  currentProducts = currentProducts.filter(product =>
   product.name.toLowerCase().includes(searchTerm.toLowerCase())
   || product.brand.toLowerCase().includes(searchTerm.toLowerCase())
   || product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );
 }

 if (selectedSorting === 'oldToNew') {
  currentProducts = currentProducts.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
 } else if (selectedSorting === 'newToOld') {
  currentProducts = currentProducts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
 } else if (selectedSorting === 'priceHighToLow') {
  currentProducts = currentProducts.slice().sort((a, b) => b.price - a.price);
 } else if (selectedSorting === 'priceLowToHigh') {
  currentProducts = currentProducts.slice().sort((a, b) => a.price - b.price);
 }

 const currentProductsPaginated = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

 const handleAddToCart = (productId) => {
  console.log(`Ürün ID ${productId} sepete eklendi.`);
  dispatch(addToCard({ id: productId, name: 'Product Name', price: 10 }));
 };

 const handlePageClick = ({ selected }) => {
  setPageNumber(selected);
 };

 return (
  <div>
   <div className="grid md:grid-cols-4 gap-4 mx-auto w-full">
    {currentProductsPaginated.map((product) => (
     <ProductCard
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
     />
    ))}
   </div>
   <ReactPaginate
    previousClassName={'page bg-white border rounded-md px-2'}
    nextClassName={'page bg-white border rounded-md px-2'}
    pageCount={Math.ceil(currentProducts.length / productsPerPage)}
    pageRangeDisplayed={6}
    marginPagesDisplayed={3}
    onPageChange={handlePageClick}
    containerClassName={'pagination flex space-x-2 mt-4 justify-center'}
    pageClassName={'page bg-white border rounded-md px-2'}
    activeClassName={'active text-blue-600 border-2 px-2'}
    breakClassName={'page bg-white text-blue-600 rounded-md px-2'}
    previousLabel={' < '}
    nextLabel={' > '}
   />
  </div>
 );
};

export default Pagination;
