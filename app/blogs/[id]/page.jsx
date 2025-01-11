"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

function page() {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params.id },
    });

    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={80}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black rounded-sm shadow-[-7px_7px_0px_#000000] ">
            {" "}
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-10 ">
          {" "}
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ">
            {data.title}
          </h1>{" "}
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-2 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-24">
          <p className="text-black font font-semibold">
            More Info and Registration
          </p>
          <div className="flex">
            <Link href={`${data.facebook}`} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={assets.facebook_icon} width={50} />
              </a>
            </Link>

            <Link href={`${data.google}`} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={assets.googleplus_icon} width={50} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
}

export default page;
