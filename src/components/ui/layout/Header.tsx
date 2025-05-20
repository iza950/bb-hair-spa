"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: scrolled ? "transparent" : "rgba(0, 0, 0, 0.8)",
    transition: "background-color 300ms, color 300ms",
  };

  const reservationButtonClasses = scrolled
    ? "border !border-black !text-black px-4 py-1 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
    : "border !border-white !text-white px-4 py-1 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg";

  const mobileReservationButtonClasses =
    "border !border-white !text-white px-4 py-1 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg";

  const linkBaseClasses =
    "relative transition-colors duration-300 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-gray-300 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

  const getLinkClasses = (href: string) => {
    let isActive = false;
    if (href === "/#hero") {
      isActive = pathname === "/" || pathname === "/#hero";
    } else {
      isActive = pathname === href || pathname.startsWith(href + "#");
    }
    return `${linkBaseClasses} ${isActive ? "font-bold underline" : ""}`;
  };

  const menuButtonClasses =
    "transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12";

  return (
    <header
      style={headerStyle}
      className="backdrop-blur-md shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          {scrolled ? (
            <Image src="/logo/logob.svg" alt="Logo" width={40} height={40} />
          ) : (
            <Image src="/logo/logow.svg" alt="Logo" width={40} height={40} />
          )}
          <span
            className="text-2xl font-light tracking-wide transition-colors duration-300"
            style={{ color: scrolled ? "black" : "white" }}
          >
            BB Hair Spa
          </span>
        </Link>

        {/* Ikona hamburgera (mobile) */}
        <button
          style={{ color: scrolled ? "black" : "white" }}
          className={`md:hidden text-2xl focus:outline-none ${menuButtonClasses}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu desktopowe */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-light tracking-wide">
            <li>
              <Link
                href="/#hero"
                style={{ color: scrolled ? "black" : "white" }}
                className={getLinkClasses("/#hero")}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                href="/oferta"
                style={{ color: scrolled ? "black" : "white" }}
                className={getLinkClasses("/oferta")}
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                href="/salon"
                style={{ color: scrolled ? "black" : "white" }}
                className={getLinkClasses("/salon")}
              >
                Salon
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                style={{ color: scrolled ? "black" : "white" }}
                className={getLinkClasses("/kontakt")}
              >
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className={reservationButtonClasses}
              >
                Rezerwacja online
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu mobilne (wysuwane) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className={`absolute top-4 right-4 text-2xl focus:outline-none text-white ${menuButtonClasses}`}
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col space-y-8 text-xl font-light tracking-wide text-center">
          <li>
            <Link
              href="/#hero"
              className={`${getLinkClasses("/#hero")} text-white`}
              onClick={toggleMenu}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              href="/oferta"
              className={`${getLinkClasses("/oferta")} text-white`}
              onClick={toggleMenu}
            >
              Oferta
            </Link>
          </li>

          <li>
            <Link
              href="/salon"
              className={`${getLinkClasses("/salon")} text-white`}
              onClick={toggleMenu}
            >
              Salon
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`${getLinkClasses("/kontakt")} text-white`}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </li>
          <li>
            <a
              href="https://booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className={mobileReservationButtonClasses}
            >
              Rezerwacja online
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
