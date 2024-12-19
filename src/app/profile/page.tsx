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
      <section className="w-full bg-gradient-to-t from-softpink to-softwhite p-12 relative z-10">
        <div>
          {/* Our History */}
          <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-4"></div>
          <p className="text-lg font-semibold">Know</p>
          <p className="font-bold text-xl">Our History</p>
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
                <div className="timeline-start mb-10 md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic">2017</time>
                  <div className="text-lg font-black">
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
                <div className="timeline-end mb-10 bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic">2018</time>
                  <div className="text-lg font-black">
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
                <div className="timeline-start mb-10 md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic">2019</time>
                  <div className="text-lg font-black">
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
                <div className="timeline-end mb-10 bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic">2020</time>
                  <div className="text-lg font-black">
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
                <div className="timeline-start mb-10 md:text-end bg-softpink shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-pink p-4 rounded-md">
                  <time className="font-mono italic">2021</time>
                  <div className="text-lg font-black">
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
        <p className="text-white font-semibold text-xl mt-12 drop-shadow-xl">
          Our Success <span className="font-normal">Numbers</span>
        </p>
        {/* Info */}
        <div className="flex justify-around bg-pink bg-opacity-50 p-12 rounded-lg w-[70%] mt-6 mx-auto gap-8 text-white">
          <div className="flex flex-col gap-2 justify-center items-center">
            <BsBoxFill size={40} />
            <h5 className="font-bold text-4xl drop-shadow-md">6,500,00</h5>
            <p>total products sold</p>
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
            <h5 className="font-bold text-5xl drop-shadow-md">1,000+</h5>
            <p>Average start review 4,5 stars</p>
          </div>
          {/* Divider */}
          <div className="w-[3px] bg-white rounded"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <MdOutlinePeopleAlt size={40} />
            <h5 className="font-bold text-4xl drop-shadow-md">+20,000</h5>
            <p>Number of clients served</p>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mt-12 p-12 relative">
        {/* Our Vision */}
        <Circle className="absolute -top-32 -left-12 opacity-30 blur-xl w-[450px] h-[450px]" />
        <div className="relative">
          <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-4"></div>
          <p className="text-lg font-semibold">Our</p>
          <p className="font-bold text-xl">Vision</p>
          <div className="mt-4 w-full h-[500px] rounded-md flex justify-center items-center">
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
      <section className="bg-gradient-to-t from-softpink via-softwhite to-softpink p-12">
        <div>
          <div className="bg-slate-100 shadow-lg w-[80px] h-[3px] mb-4"></div>
          <p className="text-lg font-semibold">Our</p>
          <p className="font-bold text-xl">Goals</p>
        </div>
        {/* Timeline */}
        <div className="flex justify-center items-center mt-6 w-full">
          <ul className="timeline">
            <li>
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Bold</h4>
                <p className="mt-2">
                  We inspire boldness and confidence in everyone who uses our
                  products.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">B</p>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">E</p>
                </div>
              </div>
              <div className="timeline-end timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Empowered</h4>
                <p className="mt-2">
                  Empowering individuals to embrace their true beauty and
                  uniqueness.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Authentic</h4>
                <p className="mt-2">
                  Promoting authenticity through honest and high-quality beauty
                  solutions.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">A</p>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">U</p>
                </div>
              </div>
              <div className="timeline-end timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Unique</h4>
                <p className="mt-2">
                  Celebrating the uniqueness of every individual with tailored
                  beauty innovations.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">T</p>
                </div>
              </div>
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Timeless</h4>
                <p className="mt-2">
                  Creating timeless products that transcend trends and deliver
                  lasting results.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box flex flex-col text-wrap w-[180px] bg-softpink border-2 border-pink">
                <h4 className="font-bold text-xl">Youtful</h4>
                <p className="mt-2">
                  Encouraging a youthful spirit and radiant self-expression at
                  any age.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="text-white w-[60px] h-[60px] flex justify-center items-center rounded-full bg-pink">
                  <p className="text-xl font-bold">Y</p>
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
