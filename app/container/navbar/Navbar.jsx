"use client";
import React, { useState } from "react";
import { styles } from "../../styles";
import { erexLogo, menu, close } from "@/app/assets";
import { navLinks } from "@/app/constants";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActive(id);
  };

  const handleMobileNavLinkClick = (id) => {
    setToggle(!toggle);
    handleNavLinkClick(id);
  };

  return (
    <nav
      className={` w-screen flex items-center py-5 fixed 
          top-0 z-20 bg-background sm:opacity-[0.97] md:py-3`}
    >
      <div
        className={`${styles.xPadding} w-full flex justify-between items-center`}
      >
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={erexLogo}
            alt="logo"
            className="sm:w-[54px] sm:h-[54px] w-[54px] h-[54px] object-contain"
          />
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-heading" : "text-heading"
              } hover:text-primary text-[14px] font-regular font-poppins
                      cursor-pointer nav-links`}
              onClick={() => handleNavLinkClick(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-background opacity-[0.98] absolute 
                    top-0 left-0 w-screen h-[100vh] z-10 menu ${
                      toggle ? "menu-open" : "menu-close"
                    }`}
            >
              <div className="flex justify-end">
                <Image
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                    items-start justify-end mt-[10rem] "
              >
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-heading" : "text-heading"
                    } hover:text-primary text-[34px] font-medium font-poppins py-3
                        uppercase cursor-pointer nav-links`}
                    onClick={() => handleMobileNavLinkClick(nav.id)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Image
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
