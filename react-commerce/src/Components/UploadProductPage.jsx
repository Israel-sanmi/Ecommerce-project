import React, { useEffect } from "react";
import { Context } from "../Hooks/ContextApi";
import { useForm, set } from "react-hook-form";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import ShortenId from "./ShortenId";
import { Link } from "react-router-dom";

const UploadProductPage = () => {
  const { adminUpload, relay, setRelay, addLoad, user, logOut } = Context();

  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.desc && data.name && data.price && data.img) {
      adminUpload(data);
    } else {
      console.log("Kindly fill all fields");
    }
  };
  useEffect(() => {
    if (relay !== "Something went wrong" && relay !== "") {
      //  toast.success(relay);
      console.log(relay);
      reset();
      setRelay("");
    }
    if (relay === "Something went wrong") {
      console.error(relay);
      setRelay("");
    }
  }, [relay]);

  return (
    <div className="pt-16 ">
      <div className="bg-primary py-5 text-center text-secondary">
        <Link to="/products">
          <h1 className="flex md:text-sm text-xs items-center md:gap-5 gap-3 cursor-pointer">
            <FaArrowLeft />
            <span>Home</span>
          </h1>
        </Link>
        <h1 className="font-bold text-xl">Upload Product</h1>
        <p className="italic">Welcome, {user}</p>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <ShortenId />
          <h1 className="font-bold text-secondary p-4">Upload Data Here</h1>
          <div className="grid grid-cols-2 gap-2 mx-2">
            <div>
              <label className="md:text-sm text-xs font-bold text-red-500">
                Product Name
              </label>
              <input
                className="border border-primary md:py-2 py-1 text-xs md:text-sm px-4 text-secondary w-full rounded-sm"
                type="text"
                placeholder="Name e.g nike"
                {...register("name", {})}
              />
            </div>
            <div>
              <label className="md:text-sm text-xs font-bold text-red-500">
                Product Price
              </label>
              <input
                className="border border-primary md:py-2 py-1 text-xs md:text-sm px-4 text-secondary w-full rounded-sm"
                type="text"
                placeholder="Price e.g 600"
                {...register("price", {})}
              />
            </div>
            <div>
              <label className="md:text-sm text-xs font-bold text-red-500">
                Product Image
              </label>
              <input
                className="border border-primary md:py-2 py-1 text-xs md:text-sm px-4 text-secondary w-full rounded-sm"
                type="url"
                placeholder="Paste Url here to upload Image"
                {...register("img", {})}
              />
            </div>
            <div>
              <label className="md:text-sm text-xs font-bold text-red-500">
                Product Description
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="5"
                className="w-full text-xs md:text-sm border p-2 border-primary"
                placeholder="Product Description"
                {...register("desc", {})}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-white bg-secondary py-2 my-4 px-4 cursor-pointer"
              disabled={addLoad}
              type="submit"
            >
              {addLoad ? <FaSpinner className="animate-spin" /> : "Upload data"}
            </button> <br />
            <p className="text-red-500 md:text-xs text-sm">{relay}</p>
          </div>
        </form>
      </div>
      <div>
        <p
          className="cursor-pointer text-sm md:text-xs bg-red-500 py-2 px-4 inline-block fixed bottom-0 right-0 text-white"
          onClick={logOut}
        >
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default UploadProductPage;
