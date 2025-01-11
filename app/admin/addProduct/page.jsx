"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "milonga",
    author: "pedro",
    authorImg: "/holi.jpg",
    facebook: "",
    google: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("facebook", data.facebook);
    formData.append("google", data.google);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        facebook: "",
        google: "",
        category: "milonga",
        author: "pedro",
        authorImg: "/holi.jpg",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        className="pt-5 px-5 h-full sm:pt-12 sm:pl-16 mb-10 "
        onSubmit={onSubmitHandler}
      >
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="Upload"
            width={140}
            height={70}
            className="mt-4"
          />
        </label>
        <input
          type="file"
          id="image"
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className="text-xl mt-4">Facebook Link</p>
        <input
          type="text"
          name="facebook"
          required
          onChange={onChangeHandler}
          placeholder="Type here"
          value={data.facebook}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Google Link</p>
        <input
          name="google"
          onChange={onChangeHandler}
          value={data.google}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="write content here"
          rows={7}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="milonga">milonga</option>
          <option value="weekly lesson">weekly lessons</option>
          <option value="workshops">workshops</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white rounded-sm shadow-light"
        >
          ADD
        </button>
      </form>
    </>
  );
}

export default Page;
