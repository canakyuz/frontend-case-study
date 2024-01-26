import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModelFilter } from '../../redux/productsSlice';
import { BiSearch } from 'react-icons/bi';

const Model = () => {
 const dispatch = useDispatch();
 const selectedModel = useSelector((state) => state.products.selectedModel);
 const selectedBrand = useSelector((state) => state.products.selectedBrand);
 const modelOptions = useSelector((state) => {
  const data = state.products.products;
  return Array.from(new Set(data.filter(product => !selectedBrand || product.brand === selectedBrand).map(product => product.model)));
 });
 const [searchTerm, setSearchTerm] = useState('');

 const handleModelChange = (model) => {
  dispatch(setModelFilter(model === selectedModel ? '' : model));
 };

 const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
 };

 const filteredModels = modelOptions.filter(model => model.toLowerCase().includes(searchTerm.toLowerCase()));

 return (
  <div className='scroll scroll-my-16'>
   <label className='text-gray-500 text-base'>Model</label>
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
    {/* Model List */}
    <ul className='flex flex-col gap-2 overflow-y-auto max-h-40'>
     {filteredModels.map((model) => (
      <li key={model} className='flex flex-row items-center gap-2 cursor-pointer' onClick={() => handleModelChange(model)}>
       <input
        type='checkbox'
        className='accent-blue-600 h-4 w-6'
        checked={selectedModel === model}
        readOnly
       />
       {model}
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Model;
