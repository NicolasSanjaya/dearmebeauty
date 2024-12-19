"use client";
import CarouselNewArrivals from "@/components/CarouselNewArrivals";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { skincareProducts as products } from "../../data/data";
import { BiSolidCarousel } from "react-icons/bi";

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
            {activeMenu === "article" && (
              <div className="z-10">
                {/* Post 1 */}
                <div>
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
                    src="/article/article1.jpg"
                    alt="Article 1"
                    width={500}
                    height={200}
                    className="w-full object-cover h-[600px] mt-4"
                  />
                  <p className="my-4 text-justify">
                    Di tengah kesibukan sehari-hari, merawat diri sering kali
                    menjadi hal yang terabaikan. Padahal, langkah- langkah
                    sederhana untuk menjaga kesehatan kulit dan kebugaran jiwa
                    dapat memberikan dampak besar pada kualitas hidup kita.
                    Cinta diri adalah fondasi penting untuk kesehatan mental,
                    fisik, dan emosional. Yuk, kita telusuri bagaimana perawatan
                    diri yang rutin bisa menjadi bentuk cinta diri yang nyata!
                  </p>
                  <p className="font-bold my-4">
                    Mengapa Merawat Diri Itu Penting?
                  </p>
                  <p className="my-4 text-justify">
                    Merawat diri bukan hanya tentang penampilan luar, tetapi
                    juga tentang kesejahteraan batin. Ketika kita memberikan
                    waktu untuk merawat tubuh dan kulit, ada sejumlah manfaat
                    yang bisa dirasakan, seperti:
                  </p>
                  <ul className="list-disc ml-8">
                    <li className="my-4">
                      <b>Meningkatkan Kesehatan Kulit</b>: Kulit yang sehat
                      adalah hasil dari perhatian rutin terhadap kebersihan dan
                      perlindungan.
                    </li>
                    <li className="my-4">
                      <b>Mengurangi Stres</b>: Aktivitas sederhana seperti
                      membersihkan wajah atau mengoleskan pelembap dapat
                      memberikan momen relaksasi di tengah hari yang sibuk.
                    </li>
                    <li className="my-4">
                      <b>Membangun Rasa Percaya Diri</b>: Kulit yang terawat
                      memberi kita rasa nyaman dalam menjalani hari dan
                      menghadapi orang lain.
                    </li>
                  </ul>
                  <p className="font-bold my-4">
                    Langkah Perawatan Kulit Sehari-Hari
                  </p>
                  <p className="my-4 text-justify">
                    Rutinitas perawatan kulit tidak perlu rumit. Berikut adalah
                    langkah-langkah sederhana yang bisa kamu lakukan setiap
                    hari:
                  </p>
                  <ol className="list-decimal ml-8">
                    <li className="font-bold">Bersihkan Kulitmu</li>
                    <p className="text-justify my-4">
                      Mulailah dengan pembersih yang lembut untuk menghilangkan
                      kotoran dan minyak yang menumpuk sepanjang hari. Langkah
                      ini membantu menjaga pori-pori tetap bersih dan mencegah
                      jerawat. Salah satu opsi yang bisa kamu coba adalah
                      Cleansing Balm - Meltaway Balm Blueberry (Hyaluronic Acid)
                      Dear Me Beauty. Produk ini membersihkan makeup dan kotoran
                      hanya dalam 30 detik tanpa membuat kulit terasa kering.
                      Kandungan hyaluronic acid-nya juga memberikan hidrasi
                      ekstra sehingga kulit terasa segar dan lembut.
                    </p>
                    <li className="font-bold">Hidrasi Kulitmu</li>
                    <p className="text-justify my-4">
                      Setelah membersihkan wajah, jangan lupa menggunakan
                      pelembap. Pelembap tidak hanya memberikan nutrisi pada
                      kulit, tetapi juga membantu mempertahankan kelembapan
                      sepanjang hari. Gunakan pelembap seperti Skin Barrier
                      Water Cream (Ceramide) - Improved Formula Dear Me Beauty.
                      Pelembap ini memiliki formula ringan yang cepat meresap
                      dan kaya akan ceramide, sehingga membantu memperkuat
                      lapisan pelindung kulit sekaligus memberikan hidrasi tahan
                      lama. Kulitmu akan terasa lebih lembut, kenyal, dan
                      terlindungi dari kekeringan sepanjang hari.
                    </p>
                    <li className="font-bold">Lindungi Kulitmu</li>
                    <p className="text-justify my-4">
                      Paparan sinar matahari bisa merusak kulit jika dibiarkan
                      tanpa perlindungan. Untuk itu, gunakan sunscreen yang
                      tepat. Salah satu pilihan terbaik adalah Skin Barrier
                      Sunscreen Gel Dear Me Beauty. Sunscreen ini memiliki
                      tekstur gel ringan yang mudah menyerap, memberikan
                      perlindungan optimal dari sinar UV, sekaligus menjaga
                      kelembapan kulit tanpa meninggalkan rasa lengket. Produk
                      ini cocok untuk semua jenis kulit, terutama bagi kamu yang
                      menginginkan perlindungan yang nyaman sepanjang hari.
                    </p>
                  </ol>
                  <p className="font-bold my-4">
                    Rayakan Cinta Diri Setiap Hari
                  </p>
                  <p className="my-4 text-justify">
                    Cinta diri bukan hanya slogan—itu adalah investasi jangka
                    panjang untuk kesehatan mental dan fisik kita. Dengan
                    merawat kulit dan tubuh, kita menunjukkan penghargaan kepada
                    diri sendiri. Jadikan rutinitas ini sebagai momen istimewa
                    untuk terhubung dengan diri sendiri.
                  </p>
                  <p className="my-4 text-justify">
                    Gunakan produk seperti Skin Barrier Sunscreen{" "}
                    <b>Gel Dear Me Beauty</b> dalam langkah perawatan harianmu
                    untuk memastikan kulit tetap terlindungi dan sehat.
                  </p>
                  <p className="my-4 text-justify">
                    Dengan langkah kecil ini, mari bersama-sama menjadikan cinta
                    diri sebagai bagian penting dalam hidup kita. ⭐
                  </p>
                </div>
                {/* Post 2 */}
                <div className="mt-20">
                  {/* Profile */}
                  <div className="flex items-center gap-2">
                    <div className="bg-pink rounded-full p-4"></div>
                    <h5 className="font-semibold text-lg">Dear Me Beauty</h5>
                    <div className="w-[10px] h-[2px] rounded-md bg-black"></div>
                    <p>28 Jan 2024</p>
                  </div>
                  {/* Content */}
                  <h3 className="font-bold text-2xl mt-4">
                    Liburan Bebas Khawatir dengan Kulit Terawat!
                  </h3>
                  <Image
                    src="/article/article2.jpeg"
                    alt="Article 1"
                    width={500}
                    height={500}
                    className="w-full mt-4"
                  />
                  <p className="mt-4 text-justify mb-6">
                    Liburan merupakan acara yang menyenangkan yang sudah lama
                    dinanti-nantikan untuk melepas penat sejenak dan menciptakan
                    kenangan indah. Namun, tidak jarang saat berlibur dan
                    aktivitas ketika berada di luar ruangan, kulit kita sering
                    menjadi korban sinar matahari, polusi udara, dan kelelahan.
                    Sampai pada akhirnya kulit wajah sering kali “break out”
                    karena hal ini. Jadi, agar wajah tetap glowing sepanjang
                    liburan, maka jaga kesehatan kulit wajah adalah salah satu
                    prioritas. Yuk, lihat cara-cara untuk merawat kulit Ketika
                    sedang liburan!
                  </p>
                  <ol className="list-decimal ml-8">
                    <li className="font-bold">Sunscreen Itu Wajib!</li>
                    <p className="text-justify my-4">
                      Pantai atau Gunung jadi tempat yang kerap kali ingin kita
                      datangi Ketika liburan. Hanya saja Terik matahari Ketika
                      di siang hari menampar kulit kita dengan sinar UV nya yang
                      kejam. Sinar UV dapat merusak kulit dan menyebabkan
                      masalah seperti kulit kusam, penuaan dini, hingga risiko
                      kanker kulit. Karena itu, sunscreen adalah perlengkapan
                      wajib yang tidak boleh dilupakan.
                    </p>
                    <p className="text-justify my-4">
                      Best of the best dari sunscreen ya pastinya{" "}
                      <b>Dear Me Beauty Sunscreen!</b> Produk ini hadir dengan
                      SPF 50, memberikan perlindungan optimal dari sinar UVA dan
                      UVB. Teksturnya ringan, mudah menyerap, dan nyaman
                      digunakan sepanjang hari. Jangan lupa untuk
                      mengaplikasikan ulang setiap dua jam, terutama jika kamu
                      banyak berkeringat atau bermain air.
                    </p>
                    <li className="font-bold">Jangan Lupa Double Cleansing</li>
                    <p className="text-justify my-4">
                      Setelah seharian beraktivitas, kulit membutuhkan
                      pembersihan maksimal untuk mengangkat sisa makeup,
                      kotoran, dan debu yang menempel. Solusi terbaik untuk ini
                      adalah double cleansing!
                    </p>
                    <p className="text-justify my-4">
                      Langkah ini diawali dengan menggunakan cleansing balm,
                      seperti <b>Dear Me Beauty Cleansing Balm</b>, yang lembut
                      namun efektif menghapus makeup dan kotoran. Produk ini
                      membersihkan hingga ke pori-pori tanpa membuat kulit
                      terasa kering atau iritasi. Pastikan untuk melanjutkan
                      dengan pembersih wajah berbasis air agar kulit benar-benar
                      bersih dan siap menerima nutrisi dari skincare berikutnya.
                    </p>
                    <li className="font-bold">Hidrasi adalah Kunci!</li>
                    <p className="text-justify my-4">
                      Paparan sinar matahari dan angin selama liburan membuat
                      kulit kita kehilangan kelembaban alaminya. Untuk itu,
                      hidrasi ekstra sangat diperlukan.
                    </p>
                    <p className="text-justify my-4">
                      Gunakan <b>Dear Me Beauty Serum</b>, yang diformulasikan
                      untuk mengunci kelembaban dan menjaga kulit tetap kenyal
                      serta bercahaya sepanjang hari. Serum ini juga membantu
                      memulihkan kulit dari paparan sinar matahari, memberikan
                      efek menenangkan, dan menghindarkan kulit dari dehidrasi.
                    </p>
                    <li className="font-bold">
                      Kulit Glowing, Liburan Jadi Menyenangkan!
                    </li>
                    <p className="text-justify my-4">
                      Dengan rutinitas skincare yang tepat, kamu bisa menikmati
                      liburan tanpa khawatir tentang kesehatan kulitmu.
                      Sunscreen melindungi kulit dari bahaya sinar matahari,
                      double cleansing menjaga kebersihan kulit, dan hidrasi
                      menjaga kulit tetap sehat serta bercahaya.
                    </p>
                    <p className="text-justify my-4">
                      Jadikan momen liburanmu bebas khawatir dengan kulit
                      glowing bersama produk andalan dari Dear Me Beauty.
                      Liburan bukan hanya untuk tubuh dan pikiran, tapi juga
                      untuk merawat kecantikan kulitmu.
                    </p>
                  </ol>
                  <p className="font-bold mt-8">
                    Enjoy your holiday with glowing skin! 🌟
                  </p>
                </div>
              </div>
            )}
            {activeMenu === "pressrelease" && (
              <div className="z-10">
                <div>
                  {/* Profile */}
                  {/* <div className="flex items-center gap-2">
                    <div className="bg-pink rounded-full p-4"></div>
                    <h5 className="font-semibold text-lg">Dear Me Beauty</h5>
                    <div className="w-[10px] h-[2px] rounded-md bg-black"></div>
                    <p>12 Jan 2023</p>
                  </div> */}
                  {/* Content */}
                  <h3 className="font-bold text-2xl mt-4">
                    Dear Me Beauty Meluncurkan Program “Beauty for Earth” untuk
                    Kecantikan yang Peduli Lingkungan
                  </h3>
                  <Image
                    src="/pressrelease/pressrelease.jpg"
                    alt="Press Release Image"
                    width={500}
                    height={200}
                    className="w-full object-cover h-[600px] mt-4"
                  />
                  <p className="my-4 text-justify">
                    <b>[Jakarta, 17 November 2024]</b> – Dear Me Beauty, merek
                    kecantikan lokal yang dikenal dengan inovasi dan kualitas
                    produknya, kembali menunjukkan komitmen terhadap
                    keberlanjutan melalui peluncuran program “Beauty for Earth”.
                    Program ini menghubungkan dunia kecantikan dengan
                    pelestarian lingkungan melalui kampanye reboisasi yang
                    melibatkan pelanggan secara langsung.
                  </p>
                  <p className="my-4 text-justify">
                    Melalui “Beauty for Earth”, Dear Me Beauty berkomitmen untuk
                    menanam satu pohon untuk setiap pembelian produk edisi
                    khusus ramah lingkungan. Kampanye ini bertujuan mendukung
                    konservasi hutan di Indonesia sekaligus menginspirasi
                    konsumen untuk turut berkontribusi pada pelestarian alam.
                  </p>
                  <p className="my-4 text-justify">
                    “Sebagai brand kecantikan yang peduli dengan keberlanjutan,
                    kami percaya bahwa kecantikan sejati tidak hanya berasal
                    dari penampilan luar, tetapi juga dari tindakan nyata untuk
                    menjaga bumi kita,” ujar Nikita Wiradiputri, CEO Dear Me
                    Beauty. “Melalui ‘Beauty for Earth’, kami ingin mengajak
                    semua pelanggan kami menjadi bagian dari gerakan positif
                    ini.”
                  </p>
                  <p className="my-4 text-justify font-bold">
                    Inisiatif Utama Program “Beauty for Earth”
                  </p>
                  <ol className="list-decimal ml-8">
                    <li className="font-bold">
                      Produk Edisi Khusus Ramah Lingkungan:
                    </li>
                    <p className="text-justify my-4">
                      Dear Me Beauty meluncurkan koleksi Face Palette dengan
                      kemasan yang 100% dapat didaur ulang. Koleksi ini
                      mengusung tema alam, menampilkan desain eksklusif hasil
                      kolaborasi dengan seniman lokal yang terinspirasi dari
                      keindahan hutan Indonesia.
                    </p>
                    <li className="font-bold">
                      Penanaman Pohon untuk Setiap Pembelian:
                    </li>
                    <p className="text-justify my-4">
                      Setiap pembelian produk edisi khusus ini akan secara
                      otomatis mendukung program reboisasi yang dilakukan
                      bekerja sama dengan Treehome Indonesia. Pelanggan juga
                      akan menerima sertifikat digital sebagai tanda kontribusi
                      mereka dalam gerakan ini.
                    </p>
                    <li className="font-bold">
                      Acara Penanaman Pohon Bersama:
                    </li>
                    <p className="text-justify my-4">
                      Dear Me Beauty mengundang pelanggan, komunitas, dan
                      influencer untuk ikut serta dalam acara penanaman pohon
                      yang akan diselenggarakan pada 3 Maret 2025, Gunung Lawu,
                      Magetan, Jawa Timur. Acara ini dirancang untuk mempererat
                      hubungan antara pelanggan dan alam.
                    </p>
                    <li className="font-bold">
                      Edukasi Digital Tentang Lingkungan :
                    </li>
                    <p className="text-justify my-4">
                      Melalui media sosial dan blog, Dear Me Beauty akan
                      membagikan konten edukatif tentang pentingnya menjaga
                      lingkungan, langkah kecil yang dapat dilakukan konsumen,
                      dan kisah di balik upaya reboisasi ini.
                    </p>
                  </ol>
                  <p className="my-4 font-bold">
                    Bergabunglah dalam Gerakan Ini!
                  </p>
                  <p className="my-4 text-justify">
                    Dengan program <i>“Beauty for Earth”</i>, Dear Me Beauty
                    tidak hanya ingin mempercantik para pelanggannya, tetapi
                    juga planet yang kita cintai bersama. Kami percaya bahwa
                    setiap langkah kecil dapat berdampak besar bila dilakukan
                    bersama-sama.
                  </p>
                </div>
              </div>
            )}
            {activeMenu === "carousel" && (
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Link
                  href={"https://www.instagram.com/p/DDwJsJkSjED/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel1.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwJ7Y-Sgza/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel2.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwJ93sStR-/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel3.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKBgRSWqo/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel4.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKEkMSodg/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel5.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKHpESYGj/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel6.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKKoNSZSI/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel7.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKNSbSJtE/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel8.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/p/DDwKQB7Stwz/?img_index=1"}
                  className="rounded-xl bg-softpink p-4 relative hover:-translate-y-5 duration-500"
                  target="_blank"
                >
                  <div className="absolute top-6 right-6">
                    <BiSolidCarousel size={32} color="#fff" />
                  </div>
                  <Image
                    src={"/carousel/carousel9.jpg"}
                    alt="carousel"
                    width={500}
                    height={500}
                  />
                </Link>
              </div>
            )}
          </div>
          {/* Sticky Product */}
          <div className="w-[30%] h-full flex flex-col items-center mt-4 sticky top-0">
            {/* Social Media */}
            <div className="flex justify-center items-center gap-4">
              <Link href={"https://www.instagram.com/dearmebeauty/"}>
                <FaInstagram size={40} color="#FF79C8" />
              </Link>
              <Link href={"https://www.tiktok.com/@dearmebeauty"}>
                <FaTiktok size={40} color="#FF79C8" />
              </Link>
              <Link href={"https://www.youtube.com/@dearmebeauty"}>
                <FaYoutube size={40} color="#FF79C8" />
              </Link>
            </div>
            <div></div>
            {/* Products */}
            <div className="flex flex-col justify-center items-center gap-12 mt-12 w-full">
              {products.map((item, index) => (
                <ProductCard
                  key={index}
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  discount_price={item.discount_price}
                  image={item.image}
                  url={item.url}
                />
              ))}
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
