// components/Search.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { setSearchTerm } from '../../../redux/searchSlice';

const Search = () => {
 const [searchInput, setSearchInput] = useState('');
 const dispatch = useDispatch();

 const handleSearchInputChange = (e) => {
  const searchTerm = e.target.value;
  setSearchInput(searchTerm);
  dispatch(setSearchTerm(searchTerm));
 };

 return (
  <div className="flex items-center border py-2 px-4 rounded-md border-gray-300 bg-white lg:w-7/12">
   <BiSearch className="text-xl mr-2 accent-white opacity-30" />
   <input
    className="outline-none bg-transparent w-full"
    type="text"
    placeholder="Search"
    value={searchInput}
    onChange={handleSearchInputChange}
   />
  </div>
 );
};

export default Search;
