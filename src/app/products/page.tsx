"use client";
import CircleBadge from "@/components/CircleBadge";
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
// import dynamic from "next/dynamic";

import Countdown from "@/components/CountDown";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

// const Countdown = dynamic(() => import("@/components/CountDown"), {
//   ssr: false,
// });

const Products = () => {
  const [activeMenu, setActiveMenu] = useState("all");

  return (
    <div className="bg-gradient-to-t from-softpink to-softwhite relative p-12 overflow-hidden">
      <div className="flex justify-center relative gap-10">
        <CircleBadge title="Natural" logo={<FaLeaf size={32} />} />
        <CircleBadge
          title="Alcohol Free"
          logo={<FaCreativeCommonsZero size={32} />}
        />
        <CircleBadge title="Moisturizing" logo={<IoWaterOutline size={32} />} />
      </div>
      <section className="p-12 mt-8">
        <Countdown targetDate="2024-12-31T23:59:59" />
        {/* New Product */}
        <div className="mt-6 bg-white transition-all duration-500 mx-auto shadow-md bg-pink-800 rounded-lg p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-100 relative z-10">
          <div className="bg-slate-600 w-full h-[300px]"></div>
          <h3 className="mt-4 text-2xl font-bold">Title</h3>
          <p className="text-justify mt-2 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            consequuntur nam! Doloremque esse facilis nisi laudantium nostrum
            provident neque iusto.
          </p>
        </div>
      </section>
      {/* Menu */}
      <section className="flex justify-center gap-8">
        <div
          className={`px-6 py-4 rounded-md text-xl font-semibold  bg-pink  cursor-pointer hover:bg-opacity-100 ${
            activeMenu === "all"
              ? "bg-opacity-100 text-white"
              : "bg-opacity-30 text-black"
          }`}
          onClick={() => setActiveMenu("all")}
        >
          All
        </div>
        <div
          className={`px-6 py-4 rounded-md text-xl font-semibold  bg-pink hover:bg-opacity-100 cursor-pointer ${
            activeMenu === "skincare"
              ? "bg-opacity-100 text-white"
              : "bg-opacity-30 text-black"
          }`}
          onClick={() => setActiveMenu("skincare")}
        >
          Skincare
        </div>
        <div
          className={`px-6 py-4 rounded-md text-xl font-semibold hover:bg-opacity-100 bg-pink  cursor-pointer ${
            activeMenu === "makeup"
              ? "bg-opacity-100 text-white"
              : "bg-opacity-30 text-black"
          }`}
          onClick={() => setActiveMenu("makeup")}
        >
          Makeup
        </div>
      </section>
      {/* Product */}
      <section className="mt-12 w-full relative z-10">
        {activeMenu === "all" && (
          <div className="flex flex-wrap justify-evenly gap-16">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        )}
        {activeMenu === "skincare" && (
          <div className="flex flex-wrap justify-evenly gap-16">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        )}
        {activeMenu === "makeup" && (
          <div className="flex flex-wrap justify-evenly gap-16 overflow-y-hidden">
            <ProductCard />
            <ProductCard />
          </div>
        )}
      </section>
      {/* Balon */}
      <div className="absolute top-44 -left-20 rotate-12 opacity-60">
        <Image src="/png/balon.png" alt="balon" width={400} height={400} />
      </div>
      {/* Love */}
      <div className="absolute top-[1200px] -right-64 -rotate-12 opacity-60">
        <Image src="/png/love.png" alt="love" width={700} height={700} />
      </div>
    </div>
  );
};

export default Products;
