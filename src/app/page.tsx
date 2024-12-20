"use client";
import CarouselNewArrivals from "@/components/CarouselNewArrivals";
import Circle from "@/components/Circle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative ">
      {/* Section Hero */}
      <Circle className="absolute -top-44 -left-12 -z-1" />
      <section className="relative w-full flex bg-gradient-to-t from-softpink to-softwhite justify-between">
        <div className="flex w-1/2 justify-center items-start flex-col gap-4 p-6 md:p-12">
          <h2 className="font-bold text-sm md:text-4xl text-left">
            Unleash your inner glow, embrace your strength with Dear Me Beauty.
          </h2>
          <p className="text-left text-[10px] md:text-2xl">
            Glow with Us - Get a Special Discount
          </p>
          <Link
            href={"/products"}
            className="bg-pink bg-opacity-70 text-[10px] md:text-lg text-white py-2 px-4 md:py-5 md:px-6 rounded-[10px] font-semibold mt-2 md:mt-4 shadow-lg hover:shadow-2xl hover:bg-darkpink"
          >
            Browse Product
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src={"/home/image1.png"}
            alt="Image 1"
            width={300}
            height={200}
            className="w-full max-h[200px] bg-cover bg-center object-cover"
          />
        </div>
      </section>
      {/* Section 2 */}
      <section className="flex relative overflow-hidden">
        <div className="w-1/2 p-4 md:p-6 flex justify-center items-center">
          <div className="bg-slate-600 w-[250px] h-[250px] md:w-[400px] md:h-[500px] rounded-[70px] md:rounded-[150px]">
            <Image
              src="/home/image2.png"
              alt="Image 2"
              width={400}
              height={400}
              className="w-full h-full bg-cover bg-center rounded-[70px] md:rounded-[150px] object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center p-6 md:p-12 gap-2 md:gap-6 z-10">
          <h2 className="font-semibold text-sm md:text-2xl">
            EMPOWERING YOUR TRUE BEAUTY
          </h2>
          <p className="text-justify text-[8px] md:text-base -tracking-tighter">
            Dear Me Beauty redefines beauty with inclusive and high-quality
            skincare and makeup products. Designed to empower self-expression
            and confidence, each item is crafted with care, innovation, and
            sustainability in mind. From nourishing skincare essentials to bold
            makeup, the brand celebrates individuality while inspiring self-love
            and authenticity.
          </p>
          <button className="bg-white shadow-lg px-4 py-2 md:px-6 md:py-4 rounded-[16px] mt-4 hover:bg-pink hover:text-white hover:border-white border-[1px] border-pink text-[8px] md:text-base">
            Get To Know Us
          </button>
        </div>
        <Circle className="absolute bottom-6 opacity-30 blur-xl -right-20 w-[200px] h-[200px] md:w-[500px] md:h-[500px]" />
      </section>
      {/* Section New Arrivals */}
      <section className="p-8 md:p-16 bg-softpink bg-opacity-50 pb-12 md:pb-28">
        <h2 className="text-lg md:text-4xl font-bold text-center mt-2 md:mt-8 mb-6">
          New Arrivals
        </h2>
        <CarouselNewArrivals />
      </section>
      {/* Section Video*/}
      <section className="">
        <div className="bg-slate-600 w-full h-[200px] md:h-[700px">
          <video
            width="400"
            height="500"
            className="w-full h-[200px] md:h-[700px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/home/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
