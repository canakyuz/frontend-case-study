import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProduct } from '../redux/productsSlice';
import ProductDetail from '../components/detail/ProductDetail';
import Card from '../components/home/Card';
import TotalPrice from '../components/home/totalPrice';

const Detail = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const { productDetail, productDetailStatus } = useSelector((state) => state.products);

 useEffect(() => {
  dispatch(fetchDetailProduct(id));
 }, [dispatch, id]);

 console.log(productDetail, "productDetail");
 console.log(productDetailStatus, "productDetailStatus");
 return (
  <div className="flex items-start justify-between w-11/12 mx-auto gap-6 px-12 py-3 font-body ">
   <ProductDetail product={productDetail} />
   <div className="hidden lg:flex flex-col sticky top-0 gap-4 w-2/12">
    <Card />
    <TotalPrice />
   </div>
  </div>
 );
};

export default Detail;
