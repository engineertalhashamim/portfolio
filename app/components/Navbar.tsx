import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closedMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 py-4 flex lg:px-8 xl:px-[8%] justify-between items-center z-50 transition 
        ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-2xs dark:bg-dark-theme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="/#top">
          <Image
            alt=""
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-26 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
         ${
           isScroll
             ? ""
             : "bg-white/50 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
         }`}
        >
          <li>
            <Link className="font-ovo" href="/#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#about">
              About me
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="/projects">
              My work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#contact">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a onClick={() => setIsDarkMode((prev) => !prev)} href="#">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </a>
          <a
            href="#contact"
            className="bg-black-800 hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border dark:border-white/50"
          >
            Contact{" "}
            <Image
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          <button className="block md:hidden">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* -- -------- Mobile Menu ------- -- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0
           w-64 z-50 bg-rose-50 -right-64 transition duration-500 h-screen dark:bg-dark-hover
           dark:text-white"
        >
          <div className="absolute top-6 right-6 border-b-orange-800">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              className="w-5"
              onClick={closedMenu}
              alt="menu"
            />
          </div>
          <li>
            <Link className="font-ovo" onClick={closedMenu} href="/#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closedMenu} href="/#about">
              About me
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closedMenu} href="/#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closedMenu} href="/projects">
              My work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closedMenu} href="/#contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
