import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setBrandFilter } from '../../redux/productsSlice';
import { BiSearch } from 'react-icons/bi';

const Brand = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.products);
 const selectedBrand = useSelector((state) => state.products.selectedBrand);
 const [brandOptions, setBrandOptions] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products');
    const data = await response.json();
    dispatch(setProducts(data));

    // Marka seçeneklerini oluştur
    const uniqueBrands = Array.from(new Set(data.map(product => product.brand)));
    setBrandOptions(uniqueBrands);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, [dispatch]);

 const handleBrandChange = (brand) => {
  // Seçili marka değişirse, seçilen markayı günceller
  dispatch(setBrandFilter(brand === selectedBrand ? '' : brand));
 };

 const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
 };

 const filteredBrands = brandOptions.filter(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()));

 return (
  <div className='scroll scroll-my-16'>
   <label className='text-gray-500 text-base'>Brands</label>
   <div className='py-4 px-4 rounded-sm shadow-custom text-base custom-scrollbar bg-white'>
    {/* Search */}
    <div className='flex flex-row items-center border border-gray-300 p-2 rounded-md w-full mb-4'>
     <BiSearch className="text-xl mr-3 accent-white opacity-30" />
     <input
      type='text'
      placeholder='Search'
      className='outline-none w-full'
      value={searchTerm}
      onChange={handleSearchChange}
     />
    </div>
    {/* Brand List */}
    <ul className='flex flex-col gap-2 overflow-y-auto max-h-40'>
     {filteredBrands.map((brand) => (
      <li key={brand} className='flex flex-row items-center gap-2 cursor-pointer' onClick={() => handleBrandChange(brand)}>
       <input
        type='checkbox'
        className='accent-blue-600 h-4 w-6'
        checked={selectedBrand === brand}
        readOnly
       />
       {brand}
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Brand;
