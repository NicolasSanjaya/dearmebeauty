import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dear Me Beauty",
  description:
    "Menjadi Sahabat Kecantikan Setiap Orang! Making Beauty Better! #LocalPride",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/background.png" />
      </Head>
      <body className={`${monserrat.className} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
