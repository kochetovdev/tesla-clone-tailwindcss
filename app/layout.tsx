import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import CarModel from "./componenst/CarModel";
import Header from "./componenst/Header";
import "./globals.css";
import Footer from "./componenst/Footer";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-bai_jamjuree",
});

export const metadata: Metadata = {
  title: "Tesla UI clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bai_jamjuree.variable} font-sans`}>
        <section className="background-model-3">
          <Header />
          <CarModel title="Model 3" showArrow={true} />
        </section>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
