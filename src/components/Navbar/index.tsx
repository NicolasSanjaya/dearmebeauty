"use client";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  return (
    <div
      className={`flex justify-between px-12 py-10 top-0 z-[999] sticky ${
        scroll
          ? "bg-pink transition-all duration-500 top-10 w-[60%] mx-auto shadow-md bg-pink-800 rounded-[70px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink-100"
          : "bg-transparent"
      }`}
    >
      <div>{scroll ? "" : <h1>Dear Me Beauty</h1>}</div>
      <div className="flex gap-10">
        <p className="font-[500] cursor-pointer hover:font-bold">Home</p>
        <div className="relative">
          <p className="font-bold text-red-500 text-xs absolute -top-3 -right-3">
            New
          </p>
          <p className="font-[500]">Products</p>
        </div>
        <p className="font-[500]">Profile</p>
        <p className="font-[500]">Blog</p>
      </div>
      <div>
        <FaCartShopping size={32} />
      </div>
    </div>
  );
};

export default Navbar;
