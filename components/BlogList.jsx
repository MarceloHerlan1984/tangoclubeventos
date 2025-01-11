"use client";
import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-md" : ""
          }
        >
          ALL
        </button>
        <button
          onClick={() => setMenu("milonga")}
          className={
            menu === "milonga" ? "bg-black text-white py-1 px-4 rounded-md" : ""
          }
        >
          Milongas
        </button>
        <button
          onClick={() => setMenu("workshops")}
          className={
            menu === "workshops"
              ? "bg-black text-white py-1 px-4 rounded-md"
              : ""
          }
        >
          Workshops
        </button>
        <button
          onClick={() => setMenu("weekly lesson")}
          className={
            menu === "weekly lesson"
              ? "bg-black text-white py-1 px-4 rounded-md"
              : ""
          }
        >
          Weekly lessons
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, i) => {
            return (
              <BlogItem
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                key={i}
                id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
