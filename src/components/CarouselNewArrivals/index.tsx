"use client";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

function NextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="bg-pink cursor-pointer absolute -translate-y-[50%] w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full -right-3 md:-right-6 text-white text-2xl font-bold flex justify-center items-center z-10 top-[50%] hover:opacity-70"
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        background: "#FF79C8",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="bg-pink cursor-pointer absolute -translate-y-[50%] w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full -left-3 md:-left-6 text-white text-2xl font-bold flex justify-center items-center z-10 top-[50%] hover:opacity-70"
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        background: "#FF79C8",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

function CarouselNewArrivals() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots: boolean) => (
      <div>
        <ul className="flex justify-center gap-[-10px] md:gap-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="bg-softpink w-[7px] h-[7px] md:w-[15px] md:h-[15px] rounded-full mt-4"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/1.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/2.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/3.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/4.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/5.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
        <div className="w-full h-[130px] md:h-[400px] object-cover p-2 md:p-4 bg-cover bg-center bg-pink">
          <Image
            src="/home/newproduct/6.jpg"
            alt="Image 1"
            width={500}
            height={700}
            className="w-full h-full bg-cover bg-center object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselNewArrivals;
