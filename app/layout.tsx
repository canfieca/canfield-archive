"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import PhotosNavbar from "@/app/ui/photos/navbar";
import { useEffect, useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isPhotosRoute, setIsPhotosRoute] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsPhotosRoute(window.location.pathname.startsWith('/photos'));
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto min-h-screen no-scrollbar`}
      >
        {isPhotosRoute ? <PhotosNavbar /> : <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
