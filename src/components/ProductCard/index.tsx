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
      className="bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink rounded-tr-[100px] rounded-bl-[100px] relative max-w-[300px] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="w-full sh-[300px] rounded-tr-[100px]">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover max-w-[300px] h-full rounded-tr-[100px]"
        />
      </div>
      <div className="p-8">
        <h3 className="mt-4 text-xl font-bold text-wrap">{name}</h3>
        <p className="mt-2 text-2xl">{price}</p>
        <div className="flex gap-2 items-center">
          <p className="line-through text-slate-800 opacity-40">
            {discount_price}
          </p>
          <span className="text-md text-red-500 font-semibold">50% off</span>
        </div>
        <div className="absolute right-4 bottom-4 hover:cursor-pointer hover:bottom-6">
          <div className="p-2 rounded-lg bg-white text-pink">
            <IoCart size={32} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
