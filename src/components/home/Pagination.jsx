import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setBrandFilter, setModelFilter } from '../../redux/productsSlice';
import { BiSearch } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.products);
 const selectedBrand = useSelector((state) => state.products.selectedBrand);
 const selectedModel = useSelector((state) => state.products.selectedModel); // Seçili modeli alın
 const selectedSorting = useSelector((state) => state.products.sorting);

 const [pageNumber, setPageNumber] = useState(0);
 const productsPerPage = 12;

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products');
    const data = await response.json();
    dispatch(setProducts(data));
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, [dispatch]);

 const indexOfLastProduct = (pageNumber + 1) * productsPerPage;
 const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

 let currentProducts = products;

 if (selectedBrand) {
  currentProducts = currentProducts.filter(product => product.brand === selectedBrand);
 }

 if (selectedModel) { // Model filtresini uygula
  currentProducts = currentProducts.filter(product => product.model === selectedModel);
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
 };

 const handlePageClick = ({ selected }) => {
  setPageNumber(selected);
 };

 return (
  <div>
   <div className="grid grid-cols-4 gap-4 mx-auto">
    {currentProductsPaginated.map((product) => (
     <div key={product.id} className="flex flex-col border p-4 bg-white shadow-card text-sm gap-1 tracking-wide">
      <img src={product.image} alt={product.model} className="w-full h-auto mb-2" />
      <p className="text-blue-600 font-semibold">{product.price} ₺</p>
      <p className="opacity-60 font-medium">{product.brand}</p>
      <h3 className="">{product.model}</h3>
      <button onClick={() => handleAddToCart(product.id)} className="bg-blue-600 text-white py-2 px-4 mt-2 rounded-sm">
       Add to Cart
      </button>
     </div>
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
