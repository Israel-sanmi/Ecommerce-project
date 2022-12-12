import React from "react";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PaymentDetailsModal = ({ itemsPrice, content, setContent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setAmount(itemsPrice * 100);
  }, []);
  const navigate = useNavigate();
  const payWithPaystack = (e) => {
    e.preventDefault();
    const payStack = new PaystackPop();
    payStack.newTransaction({
      key: "pk_test_4823c09b1b63479657222928235a575e094fee90",
      amount: amount,
      email,
      firstName,
      lastName,
    });
    // alert("Your Products are enroute");
    // setContent(false);
    navigate("/products");
  };

  return (
    <div className="text-secondary text-white">
      <div>
        <h1 className="text-center text-sm text-primary font-bold uppercase">
          Input Details
        </h1>
        <p className="text-xs text-center">Fill your Details in correctly!</p>
      </div>
      <div>
        <form>
          <div className="text-sm">
            <div>
              <label htmlFor="firstName"></label>
              <input
                className="w-full text-black indent-2 py-1 my-1"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName"></label>
              <input
                className="w-full text-black indent-2 py-1 my-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                className="w-full text-black indent-2 py-1 my-1"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div onChange={() => setAmount()}>Price: ${itemsPrice}</div>
          <div>
            <button
              onClick={payWithPaystack}
              className="w-full text-center bg-primary my-2 cursor-pointer text-secondary"
            >
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetailsModal;
