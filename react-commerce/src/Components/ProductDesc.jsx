import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Hooks/ContextApi";

const ProductDesc = () => {
  const { product, onAdd } = Context();
  const { productDesc } = useParams();
  const [single, setSingle] = useState([]);

  useEffect(() => {
    if (product.id === productDesc) {
      setSingle(product);
    }
  }, []);

  console.log(single, "2");
  return (
    <div className="pt-14">
      <Link to="/">
        <div className=" w-full h-28 text-white bg-secondary ">
          <div className="flex gap-5 items-center cursor-pointer">
            <FaArrowLeft className="m-4" />
            <span>Home</span>
          </div>
          <h1 className="text-center font-bold text-2xl">Product Details</h1>
        </div>
      </Link>
      <div className="md:flex block items-center gap-5 p-4">
        <img src={single?.image_url} alt="" className="h-screen object-cover w-[500px]" />
        <div>
          <p className="text-secondary font-bold text-xl">
            <span className="text-primary font-semibold text-lg">
              Product Name:
            </span>{" "}
            {single?.name}
          </p>
          <p className="text-secondary font-bold text-xl">
            <span className="text-primary font-semibold text-lg">
              Product Price :
            </span>{" "}
            ${single?.price}
          </p>
          <div>
            <p className="text-secondary font-bold text-xl">Description:</p>
            <p className="md:w-1/2 w-full text-sm md:text-xs leading-snug">{single?.desc}</p>
          </div>
          <button
            onClick={() => onAdd(single)}
            className="bg-secondary text-primary px-4 py-2 mt-2 cursor-pointer hover:scale-105 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
