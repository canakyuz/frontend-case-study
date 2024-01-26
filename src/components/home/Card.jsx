import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCard, updateCardItemQuantity } from '../../redux/cardSlice';

const Card = () => {
 const dispatch = useDispatch();
 const cardItems = useSelector((state) => state.card.cardItems);


 const handleIncrement = (id, quantity) => {
  dispatch(updateCardItemQuantity({ id, quantity: quantity + 1 }));
 };

 const handleDecrement = (id, quantity) => {
  if (quantity === 1) {
   dispatch(removeFromCard({ id }));
  } else {
   dispatch(updateCardItemQuantity({ id, quantity: quantity - 1 }));
  }
 };


 ""
 useEffect(() => {
  ""
 }, [cardItems]);

 return (
  <div className="flex border-b py-6 px-4 gap-2 shadow-custom w-full text-sm">
   <ul className='flex flex-col w-full gap-4'>
    {cardItems && cardItems.map((item) => (
     <li key={item.id}>
      <div className='flex flex-row justify-between w-full gap-3'>
       <div className="flex flex-col">
        <div className='flex flex-col'>
         <p className='font-bold'>{item.brand} {item.model}</p>
        </div>
        <p className='text-blue-600'>{item.price} ₺</p>
       </div>
       <div className="flex items-center justify-center">
        <button onClick={() => handleDecrement(item.id, item.quantity)} className="bg-gray-200 text-gray-700 px-2 py-[2px] rounded-l-md">-</button>
        <p className="flex justify-center px-2 bg-blue-600 text-white text-base w-6">{item.quantity}</p>
        <button onClick={() => handleIncrement(item.id, item.quantity)} className="bg-gray-200 text-gray-700 px-2 py-[2px] rounded-r-md">+</button>
       </div>
      </div>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default Card;
