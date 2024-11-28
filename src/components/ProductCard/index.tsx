import React from "react";
import { IoCart } from "react-icons/io5";

const ProductCard = () => {
  return (
    <div className="bg-softpink p-8 shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink rounded-tr-[100px] rounded-bl-[100px] relative">
      {/* Image */}
      <div className="bg-slate-600 w-[300px] h-[300px]"></div>
      <h3 className="mt-4 text-xl font-bold">Product 1</h3>
      <p className="mt-2 text-2xl">Rp. 1.000.000</p>
      <div className="flex gap-2 items-center">
        <p className="line-through text-slate-800 opacity-40">Rp. 2.000.000</p>
        <span className="text-md text-red-500 font-semibold">50%</span>
      </div>
      <div className="absolute right-4 bottom-4 hover:cursor-pointer hover:bottom-6">
        <div className="p-2 rounded-lg bg-white text-pink">
          <IoCart size={32} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
