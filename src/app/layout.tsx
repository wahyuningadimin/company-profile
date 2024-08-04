import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Swiper from 'swiper';

import Hero from "./hero/page";
import Footer from "../component/footer";
import Navbar from "@/component/navbar";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H&H",
  description: "Healthy&Hearty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        {/* {children} */}
        <Footer />
        </body>
        
    </html>
    
  );
}
