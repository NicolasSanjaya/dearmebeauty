"use client";
import CircleBadge from "@/components/CircleBadge";
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

import Countdown from "@/components/CountDown";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

import { allProducts, makeupProducts, skincareProducts } from "../../data/data";

const Products = () => {
  const [activeMenu, setActiveMenu] = useState("all");

  return (
    <div className="bg-gradient-to-t from-softpink to-softwhite relative p-6 md:p-12 overflow-hidden">
      <div className="flex justify-center items-center gap-10">
        <CircleBadge title="Natural" logo={<FaLeaf size={32} />} />
        <CircleBadge
          title="Alcohol Free"
          logo={<FaCreativeCommonsZero size={32} />}
        />
        <CircleBadge title="Moisturizing" logo={<IoWaterOutline size={32} />} />
      </div>
      <section className="p-6 md:p-12 mt-4 md:mt-8">
        <Countdown targetDate="2024-12-31T23:59:59" />
        {/* New Product */}
        <div className="mt-2 md:mt-6 bg-white transition-all duration-500 mx-auto shadow-md bg-pink-800 rounded-lg p-2 md:p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-white-100 relative z-10">
          <div className="bg-pink w-full h-[250px] md:h-[500px] flex overflow-x-scroll gap-2 p-2 md:gap-4 md:p-4 rounded-lg">
            <Image
              src="/home/newproduct/1.jpg"
              alt="Image 1"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
            <Image
              src="/home/newproduct/2.jpg"
              alt="Image 2"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
            <Image
              src="/home/newproduct/3.jpg"
              alt="Image 3"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
            <Image
              src="/home/newproduct/4.jpg"
              alt="Image 4"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
            <Image
              src="/home/newproduct/5.jpg"
              alt="Image 5"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
            <Image
              src="/home/newproduct/6.jpg"
              alt="Image 6"
              width={500}
              height={700}
              className="w-full h-full bg-cover bg-center object-cover"
            />
          </div>
          <p className="mt-2 md:mt-4 text-xs md:text-2xl font-semibold">
            Rp. ???.???
          </p>
          <h3 className="text-xs md:text-2xl font-bold">HYPERGLOSS LIP BALM</h3>
          <p className="text-justify mt-2 text-[10px] md:text-lg">
            BARU! Hypergloss Lip Balm, pelembap bibir dengan warna yang
            pigmented untuk solusi bibir sehat dan indah. Memiliki tekstur
            buttery dengan aroma fruity segar yang nyaman untuk digunakan.
          </p>
        </div>
      </section>
      {/* Menu */}
      <section className="flex justify-center gap-4 md:gap-8">
        <div
          className={`px-2 py-1 md:px-6 md:py-4 text-xs md:text-lg rounded-md font-semibold  bg-pink  cursor-pointer hover:bg-opacity-100 ${
            activeMenu === "all"
              ? "bg-opacity-100 text-white"
              : "bg-opacity-30 text-black"
          }`}
          onClick={() => setActiveMenu("all")}
        >
          All
        </div>
        <div
          className={`px-2 py-1 md:px-6 md:py-4 text-xs md:text-lg font-semibold rounded-md bg-pink hover:bg-opacity-100 cursor-pointer ${
            activeMenu === "skincare"
              ? "bg-opacity-100 text-white"
              : "bg-opacity-30 text-black"
          }`}
          onClick={() => setActiveMenu("skincare")}
        >
          Skincare
        </div>
        <div
          className={`px-2 py-1 md:px-6 md:py-4 text-xs md:text-lg font-semibold rounded-md hover:bg-opacity-100 bg-pink  cursor-pointer ${
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
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-8 md:gap-16">
            {allProducts.map((item, index) => (
              <ProductCard
                key={index}
                category={item.category}
                name={item.name}
                price={item.price}
                discount_price={item.discount_price}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        )}
        {activeMenu === "skincare" && (
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-8 md:gap-16">
            {skincareProducts.map((item, index) => (
              <ProductCard
                key={index}
                category={item.category}
                name={item.name}
                price={item.price}
                discount_price={item.discount_price}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        )}
        {activeMenu === "makeup" && (
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-8 md:gap-16 overflow-y-hidden">
            {makeupProducts.map((item, index) => (
              <ProductCard
                key={index}
                category={item.category}
                name={item.name}
                price={item.price}
                discount_price={item.discount_price}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        )}
      </section>
      {/* Balon */}
      <div className="absolute top-28 md:top-44 -left-20 rotate-12 opacity-60">
        <Image
          src="/png/balon.png"
          alt="balon"
          width={400}
          height={400}
          className=" w-[250px] md:w-[400px] "
        />
      </div>
      {/* Love */}
      <div className="absolute top-[900px] -right-48 md:top-[1200px] md:-right-64 -rotate-12 opacity-60">
        <Image
          src="/png/love.png"
          alt="love"
          width={700}
          height={700}
          className=" w-[350px] md:w-[500px] "
        />
      </div>
    </div>
  );
};

export default Products;
