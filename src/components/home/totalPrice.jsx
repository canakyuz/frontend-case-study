import React from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
 const cardItems = useSelector((state) => state.card.cardItems);

 const calculateTotalPrice = () => {
  // Her bir öğenin fiyatını adet ile çarp ve toplam fiyatı hesapla
  const totalPrice = cardItems.reduce((total, item) => {
   return total + item.price * item.quantity;
  }, 0);

  return totalPrice.toLocaleString('tr-TR'); // Türk Lirası formatına çevirme
 };

 return (
  <div className='flex flex-row gap-3 py-4 px-4 text-lg rounded-sm shadow-custom custom-scrollbar bg-white'>
   <h2 className='font-bold'>Total Price:</h2>
   <p className='text-blue-600 font-semibold'>{calculateTotalPrice()} ₺</p>
  </div>
 );
};

export default TotalPrice;
