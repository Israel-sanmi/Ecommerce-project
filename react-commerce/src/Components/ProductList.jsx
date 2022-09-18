import React from "react";
import { Context } from "../Hooks/ContextApi";
import { ColorRing } from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ProductList = () => {
  const {
    item,
    loading,
    onAdd,
    filter,
    applyFilter,
    filteredProducts,
    setProduct,
  } = Context();

  return (
    <div className="mt-5">
      <h1 className="font-bold md:text-2xl text-lg text-secondary text-center mb-10 mt-10">
        Products
      </h1>
      <div className="flex justify-center items-center my-5">
        <form className="flex items-center">
          <input
            type="text"
            name="serach"
            placeholder="Search for product"
            className="border border-primary px-4 md:py-2 py-1 md:text-md text-xs w-56 capitalize"
            value={filter}
            onChange={(e) => applyFilter(e.target.value)}
          />
          <FaSearch className="text-secondary -ml-6" />
        </form>
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <span>Loading...</span>
        </div>
      )}
      <div className="flex flex-wrap justify-around items-center">
        {filter.length > 0
          ? !loading &&
            filteredProducts?.map((one) => {
              return (
                <div className="flex py-1">
                  <Link to={`products/${one.id}`}>
                    <div onClick={() => setProduct(one)}>
                      <img
                        // onClick={()=> console.log('clicked')}
                        src={one.image_url}
                        alt={one.image_url}
                        className="w-[250px] object-contain h-auto mr-2 hover:scale-110 transition-all"
                      />
                    </div>
                  </Link>
                  <div className="">
                    <p className="uppercase font-semibold text-xl">
                      {one?.name}
                    </p>
                    <p className="text-red-500 font-bold">${one.price}</p>
                    <div className="">
                      <div>
                        <button
                          onClick={() => onAdd(one)}
                          className="bg-primary py-2 px-4 text-white mt-5 cursor-pointer font-bold"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : item.map((one) => {
              return (
                <div key={one.id} className="flex gap-1 md:gap-0 py-1">
                  <Link to={`/products/${one.id}`}>
                    <div onClick={() => setProduct(one)}>
                      <img
                        src={one.image_url}
                        alt={one.image_url}
                        className="w-[250px] object-contain h-auto mr-2 hover:scale-110 transition-all"
                      />
                    </div>
                  </Link>
                  <div>
                    <p className="uppercase font-semibold text-xl">
                      {one.name}
                    </p>
                    <p className="text-red-500 font-bold">${one.price}</p>
                    <p className="text-xs text-secondary">click image for more details...</p>
                    <div className="">
                      <div>
                        <button
                          onClick={() => onAdd(one)}
                          className="bg-primary py-2 px-4 text-white mt-5 cursor-pointer font-bold"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductList;
