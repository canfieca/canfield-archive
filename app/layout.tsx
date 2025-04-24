"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const isPhotosRoute = pathname.startsWith("/photos");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto min-h-screen no-scrollbar`}
      >
        {!isPhotosRoute && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
