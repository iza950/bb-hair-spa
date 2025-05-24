import "../styles/globals.css";
import { ReactNode } from "react";
import Header from "../components/ui/layout/Header";
import Footer from "../components/ui/layout/Footer";

export const metadata = {
  title: "BB Hair Spa",
  description: "Salon fryzjerski – Twoje piękno w dobrych rękach.",
  icons: {
    icon: "/logob.svg", // favicon
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="fade-in min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
