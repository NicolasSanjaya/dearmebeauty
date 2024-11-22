"use client";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function NextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="bg-pink cursor-pointer absolute -translate-y-[50%] w-[50px] h-[50px] rounded-full -right-6 text-white text-2xl font-bold flex justify-center items-center z-10 top-[50%] hover:opacity-70"
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
      className="bg-pink cursor-pointer absolute -translate-y-[50%] w-[50px] h-[50px] rounded-full -left-6 text-white text-2xl font-bold flex justify-center items-center z-10 top-[50%] hover:opacity-70"
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
        <ul className="flex justify-center gap-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="bg-softpink w-[15px] h-[15px] rounded-full mt-4"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>1</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>2</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>3</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>4</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>5</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>6</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>7</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>8</h3>
        </div>
        <div className="w-[200px] h-[400px] bg-slate-500">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselNewArrivals;
