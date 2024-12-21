import Image from "next/image";
import { allProducts } from "../../../data/data";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

type TypeProps = {
  params: Promise<{ url: string }>;
};

export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.id }));
}

export default async function ProductDetail({ params }: TypeProps) {
  const param = await params;
  const product = allProducts.find(
    (p) => p.url === `/products/${param.url[0]}`
  );
  console.log(product);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-6 md:p-12 mt-6 bg-gradient-to-t from-softpink to-softwhite">
      {/* Arrow Back */}
      <Link
        href={"/products"}
        className=" bg-red-400 text-start cursor-pointer"
      >
        <FaArrowLeft size={36} className="w-[12px] md:w-40" />
      </Link>
      {/* Product Info */}
      <div className="flex justify-center flex-col md:flex-row items-center mt-6 ">
        <section className="w-full md:w-full ">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full md:w-[90%] bg-cover bg-center object-cover"
          />
        </section>
        <section className="w-full ">
          <h1 className="font-bold text-xs md:text-2xl text-center my-8">
            {product.name}
          </h1>
          <p className="text-justify text-[10px] md:text-base">
            {product.desc}
          </p>
          {/* Price */}
          <div className="flex justify-between items-center">
            {/* Price */}
            <div>
              <p className="mt-4 text-xs md:text-2xl font-bold line-through opacity-30">
                {product.price}
              </p>
              <p className="text-sm md:text-4xl font-bold text-red-500">
                {product.discount_price}
              </p>
            </div>
            {/* Button */}
            <div>
              <button className="bg-pink bg-opacity-70 text-white py-2 px-3 md:py-5 md:px-6 rounded-[10px] font-semibold mt-4 shadow-lg hover:shadow-2xl hover:bg-darkpink md:mr-10 text-xs md:text-base">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
