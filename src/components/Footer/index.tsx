import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="grid grid-cols-3 justify-items-center p-6 md:p-12 gap-4 justify-center">
        <div className="flex flex-col items-start gap-[2px] md:gap-2">
          <h4 className="font-bold text-[10px] md:text-2xl">DearMeBeauty</h4>
          <Link
            href={"https://www.instagram.com/uascreativewriting/"}
            target="_blank"
            className="flex items-center gap-1 md:gap-2 font-medium text-[8px] md:text-lg"
          >
            <FaInstagram
              size={24}
              color="#FF79C8"
              className="w-[12px] md:w-full"
            />
            @uascreativewriting
          </Link>
          <Link
            href={"https://www.tiktok.com/@dearmebeauty"}
            target="_blank"
            className="flex items-center gap-1 md:gap-2 font-medium text-[8px] md:text-lg"
          >
            <FaTiktok
              size={24}
              color="#FF79C8"
              className="w-[12px] md:w-full"
            />
            @dearmebeauty
          </Link>
          <Link
            href={"https://www.youtube.com/@dearmebeauty"}
            target="_blank"
            className="flex items-center gap-1 md:gap-2 font-medium text-[8px] md:text-lg"
          >
            <FaYoutube
              size={24}
              color="#FF79C8"
              className="w-[12px] md:w-full"
            />
            @dearmebeauty
          </Link>
          <Link
            href={"https://dearmebeauty.vercel.app/"}
            target="_blank"
            className="font-semibold text-[8px] md:text-lg"
          >
            www.dearmebeauty.com
          </Link>
        </div>
        <div className=" md:text-lg">
          <h3 className="font-semibold text-[10px] md:text-xl mb-2 md:mb-4">
            Products
          </h3>
          <p className="text-[8px] md:text-lg text-pink">Serum</p>
          <p className="text-[8px] md:text-lg text-pink">Lotion</p>
          <p className="text-[8px] md:text-lg text-pink">Face Cream</p>
          <p className="text-[8px] md:text-lg text-pink">Body Lotion</p>
        </div>
        <div>
          <h3 className="font-semibold text-[10px] md:text-xl mb-2 md:mb-4">
            Contact Us
          </h3>
          <input
            type="text"
            className="mb-4 px-2 py-1 md:px-4 md:py-2 border-[1px] text-[8px] md:text-base border-black rounded-md w-full bg-white"
            placeholder="your.email@example.com"
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="border-[1px] border-black rounded-md px-2 py-1 md:px-4 md:py-2 h-12 md:h-32 w-full bg-white text-[8px] md:text-base"
          ></textarea>
          <button className="bg-pink text-white px-2 py-1 md:px-6 md:py-2 rounded-md mt-2 md:mt-4 text-[8px] md:text-base font-semibold hover:opacity-50">
            Message
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2 text-sm">
        <span className="w-full h-[2px] md:h-1 bg-black"></span>
        <p className="p-[5px] md:p-4 text-[8px] md:text-base">
          Copyright @<span className="text-pink">DearMeBeauty</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
