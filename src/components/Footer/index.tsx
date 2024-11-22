import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-3 justify-items-center p-12">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-2xl">DearMeBeauty</h4>
          <div>Instagram @dearmebeauty</div>
          <div>Tiktok @dearmebeauty</div>
          <p>www.dearmebeauty.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Products</h3>
          <p className="text-lg text-pink">Serum</p>
          <p className="text-lg text-pink">Lotion</p>
          <p className="text-lg text-pink">Face Cream</p>
          <p className="text-lg text-pink">Body Lotion</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <input
            type="text"
            className="mb-4 px-4 py-2 border-[1px] border-black rounded-md w-full"
            placeholder="your.email@example.com"
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="border-[1px] border-black rounded-md px-4 py-2 h-32 w-full"
          ></textarea>
          <button className="bg-pink text-white px-6 py-2 rounded-md mt-4 font-semibold">
            Message
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <span className="w-full h-1 bg-black"></span>
        <p className="p-6">
          Copyright @<span className="text-pink">DearMeBeauty</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
