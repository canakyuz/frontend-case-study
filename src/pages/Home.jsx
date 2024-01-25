import React from "react";
import Sorting from "../components/home/Sorting";
import Brand from "../components/home/Brand";
import Products from "../components/home/Products";
import Card from "../components/home/Card";
import Model from "../components/home/Model";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex items-start justify-between w-11/12 mx-auto gap-6 px-12 py-3 font-body ">
        <div className="flex flex-col gap-4 w-2/12">
          <Sorting />
          <Brand />
          <Model />
        </div>
        <div className="flex w-8/12">
          <Products />
        </div>
        <div className="flex gap-4 w-2/12">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
