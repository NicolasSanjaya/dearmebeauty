import Circle from "@/components/Circle";
import Image from "next/image";
import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="overflow-hidden w-full">
      <Circle className="absolute -top-44 -left-12 opacity-30 blur-xl w-[350px] h-[350px] z-50" />
      {/* Hero */}
      <section className="w-full bg-gradient-to-t from-softpink to-softwhite p-6 md:p-12 relative z-10">
        <div>
          {/* Our History */}
          <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-4"></div>
          <p className="text-xs md:text-lg font-semibold">Know</p>
          <p className="font-bold text-sm md:text-xl">Our History</p>
          <div className="mt-4 bg-transparent w-full rounded-md">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 text-[8px] md:text-base md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic text-[10px] md:text-base">
                    2017
                  </time>
                  <div className="text-xs md:text-lg font-black">
                    Dear Me Beauty Didirikan
                  </div>
                  Didirikan sebagai brand lokal kecantikan di Indonesia, Dear Me
                  Beauty mulai dikenal karena komitmennya menghadirkan produk
                  berkualitas tinggi dengan harga terjangkau.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end text-[8px] md:text-base mb-10 bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic text-[10px] md:text-base">
                    2018
                  </time>
                  <div className="text-xs md:text-lg font-black">
                    Peluncuran Produk Pertama
                  </div>
                  Memulai debutnya dengan lip cream matte yang mengusung formula
                  ringan dan tahan lama. Produk ini langsung mendapatkan
                  perhatian dari pasar lokal.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 text-[8px] md:text-base md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic text-[10px] md:text-base">
                    2019
                  </time>
                  <div className="text-xs md:text-lg font-black">
                    Ekspansi Kategori Produk
                  </div>
                  Dear Me Beauty mulai memperluas lini produknya, termasuk
                  eyeshadow palette dan produk complexion seperti foundation.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end text-[8px] md:text-base mb-10 bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic text-[10px] md:text-base">
                    2020
                  </time>
                  <div className="text-xs md:text-lg font-black">
                    Kolaborasi dengan Brand Besar
                  </div>
                  Dear Me Beauty menciptakan kolaborasi unik dengan brand
                  terkenal, termasuk makanan dan minuman seperti Dear Me Beauty
                  x Yupi dan Dear Me Beauty x Nissin Wafer.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 text-[8px] md:text-base md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic text-[10px] md:text-base">
                    2021
                  </time>
                  <div className="text-xs md:text-lg font-black">
                    Inovasi dalam Formulasi
                  </div>
                  Meluncurkan rangkaian produk hybrid yang menggabungkan
                  skincare dengan makeup, seperti tinted moisturizer dan lip
                  serum.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white font-semibold text-sm md:text-xl mt-12 drop-shadow-xl">
          Our Success <span className="font-normal">Numbers</span>
        </p>
        {/* Info */}
        <div className="flex justify-around bg-pink bg-opacity-50 p-6 md:p-12 rounded-lg w-full md:w-[70%] mt-6 mx-auto gap-2 md:gap-8 text-white">
          <div className="flex flex-col gap-1 md:gap-2 justify-center items-center">
            <BsBoxFill size={40} className="w-[16px] md:w-full" />
            <h5 className="font-bold text-[10px] md:text-4xl drop-shadow-md">
              6,500,000
            </h5>
            <p className="text-xs text-center md:text-base">
              total products sold
            </p>
          </div>
          {/* Divider */}
          <div className="w-[3px] bg-white rounded"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/profile/stars.png"
              alt="Stars"
              width={100}
              height={100}
              className="drop-shadow-sm"
            />
            <h5 className="font-bold text-[10px] md:text-5xl drop-shadow-md">
              1,000+
            </h5>
            <p className="text-xs text-center md:text-base">
              Average start review 4,5 stars
            </p>
          </div>
          {/* Divider */}
          <div className="w-[3px] bg-white rounded"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <MdOutlinePeopleAlt size={40} />
            <h5 className="font-bold text-[10px] md:text-4xl drop-shadow-md">
              20,000+
            </h5>
            <p className="text-xs text-center md:text-base">
              Number of clients served
            </p>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mt-2 md:mt-12 p-6 md:p-12 relative">
        {/* Our Vision */}
        <Circle className="absolute -top-32 -left-12 md:-top-32 md:-left-12 opacity-30 blur-xl w-[200px] h-[200px] md:w-[450px] md:h-[450px]" />
        <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-2 md:mb-4 relative"></div>
        <p className="text-xs md:text-lg font-semibold relative">Our</p>
        <p className="font-bold text-sm md:text-xl relative">Vision</p>
        <div className="relative w-full h-[250px] md:h-full flex justify-center items-center">
          <div className="mt-2 md:mt-4 w-[300px] h-[400px] md:w-full md:h-full rounded-md flex justify-center items-center">
            <Image
              src={"/profile/vision.png"}
              width={800}
              height={800}
              alt={"Our Vision"}
            />
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="bg-gradient-to-t from-softpink via-softwhite to-softpink p-6 md:p-12">
        <div>
          <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-4"></div>
          <p className="text-xs md:text-lg font-semibold">Our</p>
          <p className="font-bold text-sm md:text-xl">Goals</p>
        </div>
        {/* Timeline */}
        <div className="flex justify-center items-center mt-6 w-full">
          <ul className="timeline overflow-y-scroll">
            <li>
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Bold</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  We inspire boldness and confidence in everyone who uses our
                  products.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">B</p>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">E</p>
                </div>
              </div>
              <div className="timeline-end text-[8px] md:text-base timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Empowered</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  Empowering individuals to embrace their true beauty and
                  uniqueness.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Authentic</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  Promoting authenticity through honest and high-quality beauty
                  solutions.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">A</p>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">U</p>
                </div>
              </div>
              <div className="timeline-end text-[8px] md:text-base timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Unique</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  Celebrating the uniqueness of every individual with tailored
                  beauty innovations.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">T</p>
                </div>
              </div>
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Timeless</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  Creating timeless products that transcend trends and deliver
                  lasting results.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end text-[8px] md:text-base timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-[10px] md:text-xl">Youtful</h4>
                <p className="mt-2 text-[8px] md:text-base">
                  Encouraging a youthful spirit and radiant self-expression at
                  any age.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[20px] h-[20px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-[10px] md:text-xl font-bold">Y</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;
