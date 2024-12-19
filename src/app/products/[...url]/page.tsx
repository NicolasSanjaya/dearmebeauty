import Image from "next/image";
import { allProducts } from "../../../data/data";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

type Props = {
  params: { url: string };
};

export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.id }));
}

export default function ProductDetail({ params }: Props) {
  const product = allProducts.find(
    (p) => p.url === `/products/${params.url[0]}`
  );
  console.log(product);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-12 mt-6 bg-gradient-to-t from-softpink to-softwhite">
      {/* Arrow Back */}
      <Link href={"/products"} className=" bg-red-400 cursor-pointer">
        <FaArrowLeft size={36} />
      </Link>
      {/* Product Info */}
      <div className="flex justify-center items-center ">
        <section className="w-[50%]">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </section>
        <section className="w-[50%]">
          <h1 className="font-bold text-2xl text-center mb-8">
            {product.name}
          </h1>
          <p className="text-justify">{product.desc}</p>
          {/* Price */}
          <div className="flex justify-between items-center">
            {/* Price */}
            <div>
              <p className="mt-4 text-2xl font-bold line-through opacity-30">
                {product.price}
              </p>
              <p className="text-4xl font-bold text-red-500">
                {product.discount_price}
              </p>
            </div>
            {/* Button */}
            <div>
              <button className="bg-pink bg-opacity-70 text-white py-5 px-6 rounded-[10px] font-semibold mt-4 shadow-lg hover:shadow-2xl hover:bg-darkpink mr-10">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
