import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musikverein Grafenberg",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} relative h-full bg-gray-100`}>
        <main className="relative flex min-h-screen flex-col xl:px-48 2xl:px-72 3xl:px-96 4xl:px-112">
          <Navigation />
          <Header />
          <section className="flex-1 flex-grow">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
