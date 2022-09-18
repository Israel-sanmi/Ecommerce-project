import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-primary pt-5 text-white">
      <div className="py-10 flex flex-col justify-center items-center">
        <h1 className="md:text-2xl text-lg leading-tight text-center">
          Welcome to{" "}
          <span className="font-bold text-3xl text-secondary">Xyz</span> <br />{" "}
          where we have all you want and lots more...
        </h1>
        <Link to="/products">
          <button className="bg-secondary md:text-xs text-sm py-2 my-4 px-4">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
