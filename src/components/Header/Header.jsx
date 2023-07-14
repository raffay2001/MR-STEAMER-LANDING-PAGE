import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import InstagramLogo from "../../assets/images/instagram_logo.png";
import FacebookLogo from "../../assets/images/facebook_logo.png";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";
import { CSSTransition } from "react-transition-group";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  const handleSectionClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = isScrolled ? 70 : 0; // Adjust the offset based on the height of your fixed header
      const targetOffset = targetElement.offsetTop - headerOffset;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
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
              <li className="border border-solid border-white rounded-3xl px-6 py-1 hover:opacity-[0.9]">
                <a className="no-underline text-white" href="#home" onClick={handleSectionClick}>
                  Home
                </a>
              </li>
              <li className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-white" href="#services" onClick={handleSectionClick}>
                  Services
                </a>
              </li>
              <li className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-white" href="#about" onClick={handleSectionClick}>
                  About Us
                </a>
              </li>
              <li className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-white" href="#contact" onClick={handleSectionClick}>
                  Contact Us
                </a>
              </li>
              <li className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-white" href="#hire-us" onClick={handleSectionClick}>
                  Hire Us
                </a>
              </li>
            </ul>
            <div className="flex gap-4 text-[#ffffff80]">
              <div className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-[#ffffff80]" href="#login" onClick={handleSectionClick}>
                  Login
                </a>
              </div>
              <div className="w-[0.1px] bg-gray-500"></div>
              <div className="py-1 hover:opacity-[0.9]">
                <a className="no-underline text-[#ffffff80]" href="#signup" onClick={handleSectionClick}>
                  Signup
                </a>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-end gap-4">
          <span className="text-[#ffffff80]">Follow Us</span>
          <img src={InstagramLogo} alt="instagram_logo" className="w-7" />
          <img src={FacebookLogo} alt="facebook_logo" className="w-7" />
          <img src={LinkedInLogo} alt="linkedin_logo" className="w-7" />
        </div> */}
        </nav>
      </header>

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
                  className="no-underline text-white border border-solid border-white rounded-3xl px-6 py-1"
                  href="#home"
                  onClick={handleSectionClick}
                >
                  Home
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#services"
                  onClick={handleSectionClick}
                >
                  Services
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#about"
                  onClick={handleSectionClick}
                >
                  About Us
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#contact"
                  onClick={handleSectionClick}
                >
                  Contact Us
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#hire-us"
                  onClick={handleSectionClick}
                >
                  Hire Us
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#login"
                  onClick={handleSectionClick}
                >
                  Login
                </a>
                <a
                  className="no-underline text-white text-center"
                  href="#signup"
                  onClick={handleSectionClick}
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
