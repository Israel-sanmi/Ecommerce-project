import React from "react";
import { useState } from "react";
import {
  FaTrash,
  FaArrowLeft,
  FaArrowDown,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emptyCart from "../assets/empty-cart.jpg";
import { Context } from "../Hooks/ContextApi";
import PaymentDetailsModal from "./PaymentDetailsModal";

const Cart = () => {
  const { cartItems, onRem, onAdd, delProd } = Context();
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const [drop, setDrop] = useState(false);
  // const [content, setContent] = useState([]);

  const openDrop = () => {
    setDrop((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className=" w-full bg-primary text-secondary">
          <Link to="/">
            <div className="flex gap-5 pt-12 items-center cursor-pointer">
              <FaArrowLeft className="m-4" />
              {/* <span>Home</span> */}
            </div>
          </Link>
          <h1 className="md:text-3xl text-2xl font-semibold md:py-10 py-4 text-center">Cart</h1>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 mt-4">
          <div className="grid col-span-4">
            <div>
              {cartItems.length === 0 && (
                <div className="font-bold md:text-4xl text-2xl text-primary">
                  <div className="flex justify-center items-center mt-20">
                    <img src={emptyCart} alt="" className="w-auto" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex mx-2 flex-wrap gap-5">
              {cartItems.map((x) => {
                return (
                  <div className="my-2 md:my-0">
                    <img
                      src={x.image_url}
                      alt={x.image_url}
                      className="w-52 object-contain h-52"
                    />
                    <p className="font-bold text-secondary uppercase text-2xl">
                      {x?.name}
                    </p>
                    <p className="font-semibold py-1 text-primary">
                      ${x.price * x.qty}
                    </p>
                    <div>
                      <button
                        onClick={() => onRem(x)}
                        className="text-white bg-primary rounded-md text-md font-bold w-5 cursor-pointer h-6 mx-2"
                      >
                        -
                      </button>
                      <span className="font-bold">{x.qty}</span>
                      <button
                        onClick={() => onAdd(x)}
                        className="text-white bg-primary rounded-md text-md font-bold w-5 cursor-pointer h-6 mx-2"
                      >
                        +
                      </button>
                      <button onClick={() => delProd(x)}>
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-secondary px-4">
            {/* <p className="text-white">Total Price:</p> */}
            <div className="text-white">
              {/* <p className="flex items-center justify-between">
              Shipping: <p>xx</p>
            </p>
            <p className="flex items-center justify-between">
              Delivery: <p>xx</p>
            </p> */}
              <p className="text-md flex items-center justify-between font-semibold">
                Total Price: <p>${itemsPrice}</p>
              </p>
            </div>
            <button
              onClick={openDrop}
              className="flex items-center gap-2 justify-center text-white w-full my-20 bg-primary py-2 px-4 cursor-pointer font-semibold"
            >
              Proceed {drop ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {drop && <PaymentDetailsModal itemsPrice={itemsPrice} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
