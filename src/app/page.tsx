"use client";
import CarouselNewArrivals from "@/components/CarouselNewArrivals";
import Circle from "@/components/Circle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative ">
      {/* Section Hero */}
      <Circle className="absolute -top-44 -left-12 -z-1" />
      <section className="relative w-full flex bg-gradient-to-t from-softpink to-softwhite justify-between">
        <div className="flex w-1/2 justify-center items-start flex-col gap-4 p-12">
          <h2 className="font-bold text-4xl text-left">
            Unleash your inner glow, embrace your strength with Dear Me Beauty.
          </h2>
          <p className="text-left">Glow with Us - Get a Special Discount</p>
          <button className="bg-pink bg-opacity-70 text-white py-5 px-6 rounded-[10px] font-semibold mt-4 shadow-lg hover:shadow-2xl hover:bg-darkpink">
            Browse Product
          </button>
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
        <div className="w-1/2 p-6 flex justify-center">
          <div className="bg-slate-600 w-[400px] h-[500px] rounded-[150px]">
            <Image
              src="/home/image2.png"
              alt="Image 2"
              width={400}
              height={400}
              className="w-full h-full bg-cover bg-center rounded-[150px] object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center p-12 gap-6 z-10">
          <h2 className="font-semibold text-2xl">
            EMPOWERING YOUR TRUE BEAUTY
          </h2>
          <p className="text-justify -tracking-tighter">
            Dear Me Beauty redefines beauty with inclusive and high-quality
            skincare and makeup products. Designed to empower self-expression
            and confidence, each item is crafted with care, innovation, and
            sustainability in mind. From nourishing skincare essentials to bold
            makeup, the brand celebrates individuality while inspiring self-love
            and authenticity.
          </p>
          <button className="bg-white shadow-lg px-6 py-4 rounded-[16px] mt-4 hover:bg-pink hover:text-white hover:border-white border-[1px] border-pink">
            Get To Know Us
          </button>
        </div>
        <Circle className="absolute bottom-6 opacity-30 blur-xl -right-20 w-[500px] h-[500px]" />
      </section>
      {/* Section New Arrivals */}
      <section className="p-16 bg-softpink bg-opacity-50 pb-28">
        <h2 className="text-4xl font-bold text-center mt-8 mb-6">
          New Arrivals
        </h2>
        <CarouselNewArrivals />
      </section>
      {/* Section Video*/}
      <section className="">
        <div className="bg-slate-600 w-full h-[700px]">
          <video
            width="400"
            height="500"
            className="w-full h-[700px] object-cover"
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
