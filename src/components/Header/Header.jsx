import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import { CSSTransition } from "react-transition-group";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navOption, setNavOption] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (event, navOption) => {
    setNavOption(navOption);
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = navOption === "services" ? 220 : 150;
      const targetOffset = targetElement.offsetTop - headerOffset;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      {/* Desktop Header  */}
      <header
        className={`hidden bg-black md:flex justify-between z-50 items-center text-white px-12 pt-6 pb-2 ${
          isScrolled ? "fixed top-0 left-0 right-0" : ""
        }`}
      >
        <div className="flex gap-3">
          <div>
            <a href="/">
              <img src={Logo} alt="logo_0" className="w-15 h-10" />
            </a>
            <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-white">
              Steam it Clean it
            </div>
          </div>
          <div className="w-[0.1px] bg-gray-500"></div>
          <div>
            <img src={Logo1} alt="logo_1" className="w-[100px]" />
          </div>
        </div>
        <nav className="flex flex-col gap-2 cursor-pointer">
          <div className="flex gap-8">
            <ul className="list-none flex gap-6">
              <li
                className={`px-2 py-1 hover:opacity-[0.9] ${
                  navOption === "home"
                    ? "border border-solid border-white rounded-3xl"
                    : ""
                }`}
              >
                <a
                  className="no-underline text-white"
                  href="#home"
                  onClick={(e) => handleSectionClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li
                className={`px-2 py-1 hover:opacity-[0.9] ${
                  navOption === "services"
                    ? "border border-solid border-white rounded-3xl"
                    : ""
                }`}
              >
                <a
                  className="no-underline text-white"
                  href="#services"
                  onClick={(e) => handleSectionClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li
                className={`px-2 py-1 hover:opacity-[0.9] ${
                  navOption === "about"
                    ? "border border-solid border-white rounded-3xl"
                    : ""
                }`}
              >
                <a
                  className="no-underline text-white"
                  href="#about"
                  onClick={(e) => handleSectionClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li
                className={`px-2 py-1 hover:opacity-[0.9] ${
                  navOption === "contact"
                    ? "border border-solid border-white rounded-3xl"
                    : ""
                }`}
              >
                <a
                  className="no-underline text-white"
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, "contact")}
                >
                  Contact Us
                </a>
              </li>
              <li
                className={`px-2 py-1 hover:opacity-[0.9] ${
                  navOption === "hireUs"
                    ? "border border-solid border-white rounded-3xl"
                    : ""
                }`}
              >
                <a
                  className="no-underline text-white"
                  href="#hire-us"
                  onClick={(e) => handleSectionClick(e, "hireUs")}
                >
                  Hire Us
                </a>
              </li>
            </ul>
            <div className="flex gap-4 text-[#ffffff80]">
              <div className="py-1 hover:opacity-[0.9]">
                <a
                  className="no-underline text-[#ffffff80]"
                  href="#login"
                  onClick={handleSectionClick}
                >
                  Login
                </a>
              </div>
              <div className="w-[0.1px] bg-gray-500"></div>
              <div className="py-1 hover:opacity-[0.9]">
                <a
                  className="no-underline text-[#ffffff80]"
                  href="#signup"
                  onClick={handleSectionClick}
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header  */}
      <header
        className={`md:hidden bg-black flex justify-center z-50 items-center text-white px-6 py-4 ${
          isScrolled ? "fixed top-0 left-0 right-0" : "relative"
        }`}
      >
        <IconButton sx={{ position: "absolute", left: 4 }} onClick={toggleMenu}>
          <MenuIcon className="text-white" />
        </IconButton>
        <div className="flex gap-2">
          <div>
            <a href="/" className="mb-1">
              <img src={Logo} alt="logo_0" className="w-[80px]" />
            </a>
            <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-gray-500">
              Steam it Clean it
            </div>
          </div>
          <div className="w-[0.1px] bg-gray-500"></div>
          <div>
            <img src={Logo1} alt="logo_1" className="w-[80px]" />
          </div>
        </div>
        <CSSTransition
          in={isMenuOpen}
          timeout={300}
          classNames="mobile-menu"
          unmountOnExit
        >
          <nav className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 text-white p-6">
            <IconButton
              sx={{ position: "absolute", top: 12, right: 6 }}
              onClick={closeMenu}
            >
              <CloseIcon className="text-white" />
            </IconButton>
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col gap-12">
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "home"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#home"
                  onClick={(e) => handleSectionClick(e, "home")}
                >
                  Home
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "services"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#services"
                  onClick={(e) => handleSectionClick(e, "services")}
                >
                  Services
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "about"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#about"
                  onClick={(e) => handleSectionClick(e, "about")}
                >
                  About Us
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "contact"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, "contact")}
                >
                  Contact Us
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "hireUs"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#hire-us"
                  onClick={(e) => handleSectionClick(e, "hireUs")}
                >
                  Hire Us
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "login"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#login"
                  onClick={(e) => handleSectionClick(e, "login")}
                >
                  Login
                </a>
                <a
                  className={`no-underline text-white text-center px-6 py-1 ${
                    navOption === "signup"
                      ? "border border-solid border-white rounded-3xl"
                      : ""
                  }`}
                  href="#signup"
                  onClick={(e) => handleSectionClick(e, "signup")}
                >
                  Signup
                </a>
              </div>
            </div>
          </nav>
        </CSSTransition>
      </header>
    </>
  );
};
