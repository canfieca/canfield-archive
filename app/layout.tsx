import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css";
import Footer from "@/app/ui/footer";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto min-h-screen no-scrollbar`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
