import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCart } from "react-icons/io5";

type Proptypes = {
  key: number;
  category?: string;
  name: string;
  price: string;
  discount_price: string;
  desc?: string;
  image: string;
  url: string;
};

const ProductCard = (props: Proptypes) => {
  const { name, price, discount_price, image, url } = props;
  return (
    <Link
      href={`${url}`}
      className="bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] relative max-w-[150px] md:max-w-[300px] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="w-full sh-[150px] rounded-tr-[50px] md:sh-[300px] md:rounded-tr-[100px]">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover max-w-[150px] md:max-w-[300px] h-full rounded-tr-[50px] md:rounded-tr-[100px]"
        />
      </div>
      <div className="p-4 md:p-8">
        <h3 className="mt-2 md:mt-4 text-xs md:text-xl font-bold text-wrap">
          {name}
        </h3>
        <p className="mt-2 text-xs md:text-2xl whitespace-nowrap">{price}</p>
        <div className=" flex gap-1 md:gap-2 items-center">
          <p className="line-through text-slate-800 opacity-40 text-[10px] md:text-base whitespace-nowrap">
            {discount_price}
          </p>
          <span className="text-[10px] md:text-base text-red-500 font-semibold whitespace-nowrap">
            50% off
          </span>
        </div>
        <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 hover:cursor-pointer hover:bottom-6">
          <div className="p-[2px] md:p-2 rounded-sm md:rounded-lg bg-white text-pink">
            <IoCart size={32} className="w-[16px] h-[16px] md:w-full" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
