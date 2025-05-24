import "../styles/globals.css";
import { ReactNode } from "react";
import Header from "../components/ui/layout/Header";
import Footer from "../components/ui/layout/Footer";
import Head from "next/head";

export const metadata = {
  title: "BB Hair Spa",
  description: "Salon fryzjerski – Twoje piękno w dobrych rękach.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <Head>
        <link rel="icon" href="/logob.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="fade-in min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
