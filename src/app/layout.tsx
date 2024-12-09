import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { poppins } from "@/app/fonts/font";
import Offer from "@/components/Offer";
import Header from "@/components/Header";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Author Aliza batool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white text-black overflow-x-hidden w-screen`}
      >
        <Offer />
        <Header />
        {children}
      </body>
    </html>
  );
}
