import React from "react";
import { useState } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Context } from "../Hooks/ContextApi";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const { cartCount } = Context();
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "bg-primary shadow-md z-10 text-white fixed w-full"
          : "bg-secondary shadow-md z-10 text-white fixed w-full"
      }
    >
      <div className="flex md:text-sm text-xs justify-between mx-4 py-4">
        <Link to="/">
          <div className="flex gap-1 items-center font-bold text-md">
            Xyz Store
            <FaShoppingBag className="text-primary" />
          </div>
        </Link>
        <Link to="/cart">
          <div className="flex gap-5 items-center">
            <Link to="/products">
              <p className="cursor-pointer">Products</p>
            </Link>
            <FaShoppingCart className="hover:text-red-400 cursor-pointer hover:scale-150" />
            <span className="bg-red-500 -ml-5 text-xs -mt-2 rounded-full w-4 text-center h-4">
              {cartCount}
            </span>
            <Link to='/signUp'>
              <p className="cursor-pointer">SignUp as a Seller</p>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
