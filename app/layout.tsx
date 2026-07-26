import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import BeforAndAfter from "@/components/BeforAndAfter";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Cleanup - Carpet Cleaning",
  description: "Professional carpet cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      {children}
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <BeforAndAfter />
      <Services />
      <Reviews />
      <Footer />
      <WhatsAppButton />
      </body>
    </html>
  );
}
