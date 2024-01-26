import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBrandFilter } from '../../redux/productsSlice';
import { BiSearch } from 'react-icons/bi';

const Brand = () => {
 const dispatch = useDispatch();
 const selectedBrand = useSelector((state) => state.products.selectedBrand);
 const brandOptions = useSelector((state) => {
  const data = state.products.products;
  return Array.from(new Set(data.map(product => product.brand)));
 });
 const [searchTerm, setSearchTerm] = useState('');

 const handleBrandChange = (brand) => {
  dispatch(setBrandFilter(brand === selectedBrand ? '' : brand));
 };

 const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
 };

 const filteredBrands = brandOptions.filter(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()));

 return (
  <div className='scroll scroll-my-16'>
   <label className='text-gray-500 text-base'>Brands</label>
   <div className='py-4 px-4 rounded-sm shadow-custom custom-scrollbar bg-white text-sm'>
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
