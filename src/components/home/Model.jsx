import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setModelFilter } from '../../redux/productsSlice';
import { BiSearch } from 'react-icons/bi';

const Model = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.products);
 const selectedModel = useSelector((state) => state.products.selectedModel);
 const selectedBrand = useSelector((state) => state.products.selectedBrand); // Seçili marka bilgisini alın
 const [modelOptions, setModelOptions] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products');
    const data = await response.json();
    dispatch(setProducts(data));

    // Model seçeneklerini oluştur
    const uniqueModels = Array.from(new Set(data.filter(product => !selectedBrand || product.brand === selectedBrand).map(product => product.model))); // Seçili markaya ait modelleri alın
    setModelOptions(uniqueModels);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, [dispatch, selectedBrand]); // Seçili marka değiştiğinde yeniden yükleme yap

 const handleModelChange = (model) => {
  // Seçili model değişirse, seçilen modeli günceller
  dispatch(setModelFilter(model === selectedModel ? '' : model));
 };

 const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
 };

 const filteredModels = modelOptions.filter(model => model.toLowerCase().includes(searchTerm.toLowerCase()));

 return (
  <div className='scroll scroll-my-16'>
   <label className='text-gray-500 text-base'>Model</label>
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
