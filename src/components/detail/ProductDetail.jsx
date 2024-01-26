import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailProduct } from '../../redux/productsSlice';
import { addToCard } from '../../redux/cardSlice'; // Bu satır, addToCart action'ını ekleyin

const ProductDetail = () => {
 const { productId } = useParams();
 const dispatch = useDispatch();
 const productDetail = useSelector((state) => state.products.productDetail);
 const isLoading = useSelector((state) => state.products.loading);

 useEffect(() => {
  dispatch(fetchDetailProduct(productId));
 }, [dispatch, productId]);

 const handleAddToCart = () => {
  // Ürünü sepete eklemek için addToCart action'ını çağırın
  dispatch(addToCard(productDetail));
 };

 if (isLoading) {
  return <p>Loading...</p>;
 }

 if (!productDetail) {
  return <p>Product not found.</p>;
 }

 return (
  <div className='flex flex-row w-4/6 mx-auto bg-white border p-2 rounded-md'>
   <div className="relative w-1/2">
    <img src={productDetail.image} alt={productDetail.model} className="h-full mb-2 w-full my-auto object-cover" />
   </div>
   <div className="flex flex-col w-1/2 p-5 bg-white text-sm gap-[2px] tracking-wide cursor-pointer">
    <div className="flex flex-col h-full text-3xl">
     <p className="font-bold">{productDetail.brand} {productDetail.model}</p>
     <p className="text-blue-500 font-bold ">{productDetail.price} ₺</p>
    </div>
    <button onClick={handleAddToCart} className="bg-blue-600 text-white py-2 px-1 rounded-lg text-xl font-body cursor-pointer">
     Add to Cart
    </button>
    <div className="overflow-y-auto h-72 p-2 m-2"> {/* Açıklama kısmına sabit bir yükseklik belirleyin */}
     <p className="">{productDetail.description}</p>
    </div>
   </div>
  </div>

 );
};

export default ProductDetail;
