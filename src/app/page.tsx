"use client";
import CarouselNewArrivals from "@/components/CarouselNewArrivals";
import Circle from "@/components/Circle";

export default function Home() {
  return (
    <div className="relative">
      {/* Section Hero */}
      <Circle className="absolute -top-44 -left-12 -z-1" />
      <section className="relative w-full flex bg-gradient-to-t from-softpink to-softwhite">
        <div className="flex w-1/2 justify-center items-start flex-col gap-4 p-12">
          <h2 className="font-bold text-4xl text-left">
            Unleash your inner glow, embrace your strength with Dear Me Beauty.
          </h2>
          <p className="text-left">Glow with Us - Get a Special Discount</p>
          <button className="bg-pink text-white py-5 px-6 rounded-[10px] font-semibold mt-4 shadow-lg hover:opacity-50">
            Browse Product
          </button>
        </div>
        <div className="w-1/2">
          <div className="bg-slate-600 w-full h-[500px]"></div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="flex relative overflow-hidden">
        <div className="w-1/2 p-6 flex justify-center">
          <div className="bg-slate-600 w-[400px] h-[500px] rounded-[150px]"></div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center p-12 gap-6 z-10">
          <h2 className="font-semibold text-2xl">
            EMPOWERING YOUR TRUE BEAUTY
          </h2>
          <p className="text-justify">
            Dear Me Beauty redefines beauty with inclusive and high-quality
            skincare and makeup products. Designed to empower self-expression
            and confidence, each item is crafted with care, innovation, and
            sustainability in mind. From nourishing skincare essentials to bold
            makeup, the brand celebrates individuality while inspiring self-love
            and authenticity.
          </p>
          <button className="bg-white shadow-lg px-6 py-4 rounded-[16px] mt-4 hover:opacity-50">
            Get To Know Us
          </button>
        </div>
        <Circle className="absolute bottom-6 opacity-30 blur-xl -right-20 w-[500px] h-[500px]" />
      </section>
      {/* Section New Arrivals */}
      <section className="p-16 bg-softpink bg-opacity-50">
        <h2 className="text-4xl font-bold text-center mt-8 mb-6">
          New Arrivals
        </h2>
        <CarouselNewArrivals />
      </section>
      {/* Section Video*/}
      <section className="">
        <div className="bg-slate-600 w-full h-[500px]"></div>
      </section>
    </div>
  );
}
