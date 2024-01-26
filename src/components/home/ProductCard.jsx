import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/cardSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleAddToCard = () => {
  dispatch(addToCard({
   id: product.id,
   brand: product.brand,
   model: product.model,
   price: product.price,
   quantity: 1
  }));
 };


 return (
  <div className="flex flex-col animated-pulse border p-2 bg-white shadow-card text-sm gap-[2px] tracking-wide">
   <div className='cursor-pointer' onClick={() => navigate(`products/${product?.id}`)}>
    <img src={product.image} alt={product.model} className="w-full h-auto mb-2" />
    <p className="text-blue-600 font-bold">{product.price} ₺</p>
    <p><span className='font-bold'>{product.brand}</span><span className='ml-2 opacity-50 font-bold'>{product.model}</span></p>
   </div>
   <button onClick={handleAddToCard} className="bg-blue-600 text-white py-[6px] px-3 mt-2 rounded-sm cursor-pointer">
    Add to Cart
   </button>
  </div>
 );
};

export default ProductCard;
