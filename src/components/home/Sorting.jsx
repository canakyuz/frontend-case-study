import { useSelector, useDispatch } from 'react-redux';
import { setSorting } from '../../redux/productsSlice';


const Sorting = () => {
 const dispatch = useDispatch();
 const selectedSorting = useSelector((state) => state.products.sorting);

 const handleSortingChange = (sortingOption) => {
  console.log('Before Sorting Change - Selected Sorting:', selectedSorting);

  if (selectedSorting === sortingOption) {
   dispatch(setSorting(''));
  } else {
   dispatch(setSorting(sortingOption));
  }

  // After dispatching the action
  console.log('After Sorting Change - Selected Sorting:', selectedSorting);
 };


 return (
  <div>
   <div className='text-gray-500 text-base'>Sort by</div>
   <div className='py-4 px-4 rounded-sm shadow-custom bg-white'>
    <label className='flex flex-col gap-2 text-sm'>
     <div className={`flex flex-row items-center gap-2 cursor-pointer`}>
      <input
       type="radio"
       id="oldToNew"
       className="h-4 w-6"
       checked={selectedSorting === 'oldToNew'}
       onChange={() => handleSortingChange('oldToNew')}
      />
      <label htmlFor="oldToNew" className={`cursor-pointer ${selectedSorting === 'oldToNew' ? 'text-blue-600' : 'text-gray-500'}`}>Old to New</label>
     </div>
     <div className={`flex flex-row items-center gap-2 cursor-pointer`}>
      <input
       type="radio"
       id="newToOld"
       className="h-4 w-6"
       checked={selectedSorting === 'newToOld'}
       onChange={() => handleSortingChange('newToOld')}
      />
      <label htmlFor="newToOld" className={`cursor-pointer ${selectedSorting === 'newToOld' ? 'text-blue-600' : 'text-gray-500'}`}>New to Old</label>
     </div>
     <div className={`flex flex-row items-center gap-2 cursor-pointer`}>
      <input
       type="radio"
       id="priceHighToLow"
       className="h-4 w-6"
       checked={selectedSorting === 'priceHighToLow'}
       onChange={() => handleSortingChange('priceHighToLow')}
      />
      <label htmlFor="priceHighToLow" className={`cursor-pointer ${selectedSorting === 'priceHighToLow' ? 'text-blue-600' : 'text-gray-500'}`}>Price High to Low</label>
     </div>
     <div className={`flex flex-row items-center gap-2 cursor-pointer`}>
      <input
       type="radio"
       id="priceLowToHigh"
       className="h-4 w-6"
       checked={selectedSorting === 'priceLowToHigh'}
       onChange={() => handleSortingChange('priceLowToHigh')}
      />
      <label htmlFor="priceLowToHigh" className={`cursor-pointer ${selectedSorting === 'priceLowToHigh' ? 'text-blue-600' : 'text-gray-500'}`}>Price Low to High</label>
     </div>
    </label>
   </div>
  </div>
 );
};

export default Sorting;