"use client";
import CarouselNewArrivals from "@/components/CarouselNewArrivals";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const Blog = () => {
  const [activeMenu, setActiveMenu] = useState("article");
  return (
    <div>
      {/* Section 1 */}
      <section className="p-12">
        <CarouselNewArrivals />
      </section>
      {/* Section 2 */}
      <section className="mt-24 bg-gradient-to-t from-softpink to-softwhite w-full pt-12 ">
        {/* Menu */}
        <div className="flex justify-center gap-8 px-12">
          <div
            className={`px-6 py-4 rounded-3xl bg-pink  hover:cursor-pointer hover:bg-opacity-100 ${
              activeMenu === "article" ? "bg-opacity-100" : "bg-opacity-70"
            } `}
            onClick={() => setActiveMenu("article")}
          >
            <p
              className={` font-semibold ${
                activeMenu === "article" ? "text-white font-bold" : "text-black"
              }`}
            >
              Article
            </p>
          </div>
          <div
            className={`px-6 py-4 rounded-3xl bg-pink  hover:cursor-pointer hover:bg-opacity-100 ${
              activeMenu === "pressrelease" ? "bg-opacity-100" : "bg-opacity-70"
            } `}
            onClick={() => setActiveMenu("pressrelease")}
          >
            <p
              className={` font-semibold ${
                activeMenu === "pressrelease"
                  ? "text-white font-bold"
                  : "text-black"
              }`}
            >
              Press Release
            </p>
          </div>
          <div
            className={`px-6 py-4 rounded-3xl bg-pink  hover:cursor-pointer hover:bg-opacity-100 ${
              activeMenu === "carousel" ? "bg-opacity-100" : "bg-opacity-70"
            } `}
            onClick={() => setActiveMenu("carousel")}
          >
            <p
              className={` font-semibold ${
                activeMenu === "carousel"
                  ? "text-white font-bold"
                  : "text-black"
              }`}
            >
              Carousel
            </p>
          </div>
        </div>
        {/* Article */}
        <div className="mt-12 px-12 flex justify-between gap-4">
          {/* Article */}
          <div className="w-[70%]">
            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="bg-pink rounded-full p-4"></div>
              <h5 className="font-semibold text-lg">Dear Me Beauty</h5>
              <div className="w-[10px] h-[2px] rounded-md bg-black"></div>
              <p>12 Jan 2023</p>
            </div>
            {/* Content */}
            <h3 className="font-bold text-2xl mt-4">
              Cintai Diri: Kunci untuk Merawat Kulit dan Jiwa
            </h3>
            <Image
              src="/article/article1.jpeg"
              alt="Article 1"
              width={500}
              height={500}
              className="w-full mt-4"
            />
            <p className="mt-4 text-justify">
              Di tengah kesibukan sehari-hari, merawat diri sering kali menjadi
              hal yang terabaikan. Padahal, langkah- langkah sederhana untuk
              menjaga kesehatan kulit dan kebugaran jiwa dapat memberikan dampak
              besar pada kualitas hidup kita. Cinta diri adalah fondasi penting
              untuk kesehatan mental, fisik, dan emosional. Yuk, kita telusuri
              bagaimana perawatan diri yang rutin bisa menjadi bentuk cinta diri
              yang nyata! Mengapa Merawat Diri Itu Penting? Merawat diri bukan
              hanya tentang penampilan luar, tetapi juga tentang kesejahteraan
              batin. Ketika kita memberikan waktu untuk merawat tubuh dan kulit,
              ada sejumlah manfaat yang bisa dirasakan, seperti: • Meningkatkan
              Kesehatan Kulit: Kulit yang sehat adalah hasil dari perhatian
              rutin terhadap kebersihan dan perlindungan. • Mengurangi Stres:
              Aktivitas sederhana seperti membersihkan wajah atau mengoleskan
              pelembap dapat memberikan momen relaksasi di tengah hari yang
              sibuk. • Membangun Rasa Percaya Diri: Kulit yang terawat memberi
              kita rasa nyaman dalam menjalani hari dan menghadapi orang lain.
              Langkah Perawatan Kulit Sehari-Hari Rutinitas perawatan kulit
              tidak perlu rumit. Berikut adalah langkah-langkah sederhana yang
              bisa kamu lakukan setiap hari: 1. Bersihkan Kulitmu Mulailah
              dengan pembersih yang lembut untuk menghilangkan kotoran dan
              minyak yang menumpuk sepanjang hari. Langkah ini membantu menjaga
              pori-pori tetap bersih dan mencegah jerawat. Salah satu opsi yang
              bisa kamu coba adalah Cleansing Balm - Meltaway Balm Blueberry
              (Hyaluronic Acid) Dear Me Beauty. Produk ini membersihkan makeup
              dan kotoran hanya dalam 30 detik tanpa membuat kulit terasa
              kering. Kandungan hyaluronic acid-nya juga memberikan hidrasi
              ekstra sehingga kulit terasa segar dan lembut. 2. Hidrasi Kulitmu
              Setelah membersihkan wajah, jangan lupa menggunakan pelembap.
              Pelembap tidak hanya memberikan nutrisi pada kulit, tetapi juga
              membantu mempertahankan kelembapan sepanjang hari. Gunakan
              pelembap seperti Skin Barrier Water Cream (Ceramide) - Improved
              Formula Dear Me Beauty. Pelembap ini memiliki formula ringan yang
              cepat meresap dan kaya akan ceramide, sehingga membantu memperkuat
              lapisan pelindung kulit sekaligus memberikan hidrasi tahan lama.
              Kulitmu akan terasa lebih lembut, kenyal, dan terlindungi dari
              kekeringan sepanjang hari. 3. Lindungi Kulitmu Paparan sinar
              matahari bisa merusak kulit jika dibiarkan tanpa perlindungan.
              Untuk itu, gunakan sunscreen yang tepat. Salah satu pilihan
              terbaik adalah Skin Barrier Sunscreen Gel Dear Me Beauty.
              Sunscreen ini memiliki tekstur gel ringan yang mudah menyerap,
              memberikan perlindungan optimal dari sinar UV, sekaligus menjaga
              kelembapan kulit tanpa meninggalkan rasa lengket. Produk ini cocok
              untuk semua jenis kulit, terutama bagi kamu yang menginginkan
              perlindungan yang nyaman sepanjang hari. Rayakan Cinta Diri Setiap
              Hari Cinta diri bukan hanya slogan—itu adalah investasi jangka
              panjang untuk kesehatan mental dan fisik kita. Dengan merawat
              kulit dan tubuh, kita menunjukkan penghargaan kepada diri sendiri.
              Jadikan rutinitas ini sebagai momen istimewa untuk terhubung
              dengan diri sendiri. Gunakan produk seperti Skin Barrier Sunscreen
              Gel Dear Med Beauty dalam langkah perawatan harianmu untuk
              memastikan kulit tetap terlindungi dan sehat. Dengan langkah kecil
              ini, mari bersama-sama menjadikan cinta diri sebagai bagian
              penting dalam hidup kita.
            </p>
          </div>
          {/* Sticky Product */}
          <div className="w-[30%] flex flex-col items-center mt-4 ">
            {/* Social Media */}
            <div className="flex justify-center items-center gap-4">
              <Link href={"/"}>
                <FaInstagram size={40} color="#FF79C8" />
              </Link>
              <Link href={"/"}>
                <FaTiktok size={40} color="#FF79C8" />
              </Link>
              <Link href={"/"}>
                <FaYoutube size={40} color="#FF79C8" />
              </Link>
            </div>
            <div></div>
            {/* Products */}
            <div className="flex flex-col gap-12 mt-12 w-full">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="w-full p-0 -mt-12">
          <Image
            src={"/article/wave.svg"}
            alt="Footer"
            width={500}
            height={500}
            className="w-full bg-opacity-60 blur-sm"
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
