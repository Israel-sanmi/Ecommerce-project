import React from "react";
import google from "../assets/google.png";
import { FaGoogle } from "react-icons/fa";
import { Context } from "../Hooks/ContextApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUpAsSeller = () => {
  const { signInWithGoogle } = Context();
 
  return (
    <div className="pt-16 flex flex-col justify-center items-center">
      <div>
        <h1 className="font-semibold md:text-xl text-md text-center">
          Sign Up using Google to have access to upload products
        </h1>
      </div>
      <div>
        <div className="">
          <img
            src={google}
            onClick={signInWithGoogle}
            alt=""
            className="cursor-pointer w-40 h-40 "
          />
        </div>
        <p className="text-center text-primary animate-bounce">
          One click To Sign Up
        </p>
      </div>
    </div>
  );
};

export default SignUpAsSeller;
