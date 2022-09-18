import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Sliderx = ({
  productImg,
  productName,
  productPercentage,
  productType,
}) => {

  return (
    <>
      <div>
        <div className=" w-full flex flex-col gap-5 justify-center items-center py-4 px-2">
          <div>
            <h1 className="md:text-md text-xs leading-none mb-2">
            <span className="text-red-500 font-bold">{productPercentage}%</span>{" "}
            off all {productType} gotten from us directly
          </h1>
          <div>
            <img src={productImg} alt="" className="w-auto h-52" />
          </div>
          <div>
            <p className="font-semibold -mt-10 text-white pl-2">{productName}</p>
          </div>
          </div>
          <Link to='/products'>
            <button className="text-white text-xs md:text-sm font-bold bg-primary py-2 px-4 mt-2 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sliderx;
