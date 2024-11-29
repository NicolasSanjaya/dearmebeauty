"use client";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  return (
    <div
      className={`flex justify-between items-center m-auto  top-0 z-[999] sticky ${
        scroll
          ? "bg-pink transition-all duration-500 top-10 w-[60%] shadow-md bg-pink-800 rounded-[70px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-pink-100 px-6 py-6"
          : "bg-transparent w-full px-10 py-8"
      }`}
    >
      <div>
        {scroll ? (
          ""
        ) : (
          <Link href={"/"} className="font-bold text-xl cursor-pointer">
            Dear Me Beauty
          </Link>
        )}
      </div>
      <div className="flex justify-center items-center gap-10">
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/" && "bg-pink py-4 px-6 rounded-md text-white"
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold relative ${
            pathname === "/products" &&
            "bg-pink py-4 px-6 rounded-md text-white"
          }`}
          href={"/products"}
        >
          <p
            className={`font-bold text-red-500 text-xs absolute -top-3 ${
              pathname === "/products" ? "right-1 top-1" : "-right-3"
            }`}
          >
            New
          </p>
          Products
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/profile" && "bg-pink py-4 px-6 rounded-md text-white"
          }`}
          href={"/profile"}
        >
          Profile
        </Link>
        <Link
          className={`font-[500] cursor-pointer hover:font-bold ${
            pathname === "/blog" && "bg-pink py-4 px-6 rounded-md text-white"
          }`}
          href={"/blog"}
        >
          Blog
        </Link>
      </div>
      <div className="flex justify-center pr-4 items-center hover:scale-110 hover:cursor-pointer hover:opacity-60">
        <FaCartShopping size={32} />
      </div>
    </div>
  );
};

export default Navbar;
