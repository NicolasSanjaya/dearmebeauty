"use client";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center m-auto top-0 z-[999] sticky ${
        scroll
          ? "bg-pink transition-all duration-500 top-10 flex justify-center items-center w-[80%] md:w-[60%] shadow-md bg-pink-800 rounded-[70px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-pink-100 p-6 "
          : "bg-transparent w-full px-4 py-6 md:px-10 md:py-8 justify-between"
      }`}
    >
      {scroll ? (
        ""
      ) : (
        <div>
          <Link
            href={"/"}
            className="font-bold text-[10px] whitespace-nowrap md:text-xl cursor-pointer"
          >
            Dear Me Beauty
          </Link>
        </div>
      )}
      <div className="flex justify-center text-[8px] md:text-lg items-center gap-4 md:gap-10">
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/" &&
            "bg-pink py-1 px-3 md:py-4 md:px-6 rounded-md text-white"
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold relative ${
            pathname === "/products" &&
            "bg-pink py-1 px-3 md:py-4 md:px-6 rounded-md text-white"
          }`}
          href={"/products"}
        >
          <p
            className={`font-bold text-red-500 text-[6px] md:text-xs absolute -top-3 ${
              pathname === "/products"
                ? "right-[2px] top-[-1px] md:right-1 md:top-1"
                : "right-[1px] -top-2 md:-right-3 md:-top-2"
            }`}
          >
            New
          </p>
          Products
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/profile" &&
            "bg-pink py-1 px-3 md:py-4 md:px-6 rounded-md text-white"
          }`}
          href={"/profile"}
        >
          Profile
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/blog" &&
            "bg-pink py-1 px-3 md:py-4 md:px-6 rounded-md text-white"
          }`}
          href={"/blog"}
        >
          Blog
        </Link>
      </div>
      {scroll ? (
        ""
      ) : (
        <div className="flex justify-center pr-4 items-center hover:scale-110 hover:cursor-pointer">
          <FaCartShopping size={30} className="w-4 md:w-full" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
