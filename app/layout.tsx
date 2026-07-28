import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import About from "@/components/About";


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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          {children}
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Reviews />
          <Contact />
          <Footer />
          <WhatsAppButton />
      </body>
    </html>
  );
}
