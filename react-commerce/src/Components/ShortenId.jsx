import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ShortenId = () => {
  const [url, setUrl] = useState("");

  const changeToUseable = (data) => {
    if (data.url) {
      let initialId = data.url;
      const newId = initialId.slice(32, 65);
      setUrl("https://drive.google.com/uc?id=".concat(newId));
    }
  };

  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-2">
      <div className="p-4">
        <p className="font-semibold md:text-md text-sm underline">URL changer</p>
        <p className="md:text-md text-sm text-secondary">
          To upload product, you have to;
        </p>
        <ol className="md:text-sm text-xs">
          <li>Step 1: Move Image to Google Drive.</li>
          <li>Step 2: Copy link from Google Drive</li>
          <li>Step 3: Paste image link from google drive to the URL changer below.</li>
        </ol>
      </div>
      <form onSubmit={handleSubmit(changeToUseable)}>
        <input
          type="text"
          className="border text-xs rounded-sm md:text-sm py-1 px-2 mx-2 w-56 border-red-500"
          placeholder="Change URL"
          {...register("url", {})}
        />
        <button
          className="md:text-sm bg-red-500 text-xs text-white rounded-sm py-1 px-2 cursor-pointer"
          onClick={handleSubmit(changeToUseable)}
        >
          Change
        </button>
      </form>
      <p className="font-bold text-md">{url}</p>
    </div>
  );
};

export default ShortenId;
