import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import { CSSTransition } from "react-transition-group";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useContextValue } from "../../context/StateProvider";

export const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navOption, setNavOption] = useState("home");
  const { t, i18n, lang, setLang } = useContextValue();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

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
        <div className="flex gap-5">
          <div>
            <a href="/">
              <img src={Logo} alt="logo_0" className="w-15 h-10" />
            </a>
            <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-white">
              {t("header.logoTitle")}
            </div>
          </div>
          <div className="w-[0.1px] bg-gray-500"></div>
          <div>
            <img src={Logo1} alt="logo_1" className="w-[100px]" />
          </div>
        </div>
        <nav className="flex flex-col gap-2 cursor-pointer">
          <div className="flex gap-8 relative">
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
                  {t("header.home")}
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
                  {t("header.services")}
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
                  {t("header.about")}
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
                  {t("header.contactUs")}
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
                  {t("header.hireUs")}
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
                  {t("header.login")}
                </a>
              </div>
              <div className="w-[0.1px] bg-gray-500"></div>
              <div className="py-1 hover:opacity-[0.9]">
                <a
                  className="no-underline text-[#ffffff80]"
                  href="#signup"
                  onClick={handleSectionClick}
                >
                  {t("header.signup")}
                </a>
              </div>
            </div>
            <div className="flex gap-4 text-[#FFF] cursor-pointer">
              <div
                className="py-1 hover:opacity-[0.9] flex gap-2 items-center"
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              >
                {lang === "en" && <p>English</p>}
                {lang === "ar" && <p>عربي</p>}
                {!isDropDownOpen && (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.03906 1.15034L6.07571 6.11342L11.0388 1.07677"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                )}
                {isDropDownOpen && (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0391 7.14539L6.07111 2.11355L1.03927 7.0815"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                )}
              </div>
            </div>
            {isDropDownOpen && (
              <div className="bg-white w-[140px] rounded-[10px] flex flex-col justify-center items-center px-2 py-6 gap-3 absolute top-10 right-0 shadow-lg">
                <p
                  className="text-[#000] hover:opacity-[0.8] m-0 p-0"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                    setLang("en");
                    setIsDropDownOpen(false);
                  }}
                >
                  English
                </p>
                <div className="w-full border-l-0 border-r-0 border-t-0 border-b border-solid border-gray-200"></div>
                <p
                  className="text-[#000] hover:opacity-[0.8] m-0 p-0"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    localStorage.setItem("lang", "ar");
                    setLang("ar");
                    setIsDropDownOpen(false);
                  }}
                >
                  عربي
                </p>
              </div>
            )}
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
        <div className="flex gap-5">
          <div>
            <a href="/" className="mb-1">
              <img src={Logo} alt="logo_0" className="w-[80px]" />
            </a>
            <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-gray-500">
              {t("header.logoTitle")}
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
          <nav className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 text-white p-6 flex flex-col gap-2 h-[30rem]">
            <div className="w-full flex justify-between">
              <div className="flex gap-5">
                <div>
                  <a href="/" className="mb-1">
                    <img src={Logo} alt="logo_0" className="w-[80px]" />
                  </a>
                  <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-gray-500">
                    {t("header.logoTitle")}
                  </div>
                </div>
              </div>
              <IconButton
                sx={{ position: "absolute", top: 12, right: 6 }}
                onClick={closeMenu}
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7632 0H9.23684C4.14947 0 0 4.14947 0 9.23684V17.7632C0 22.8505 4.14947 27 9.23684 27H17.7632C22.8505 27 27 22.8505 27 17.7632V9.23684C27 4.14947 22.8505 0 17.7632 0ZM18.7721 16.7543C19.3263 17.3085 19.3263 18.2178 18.7721 18.772C18.4879 19.042 18.1326 19.1842 17.7632 19.1842C17.3937 19.1842 17.0384 19.042 16.7542 18.772L13.5 15.5178L10.2458 18.772C9.96161 19.042 9.60632 19.1842 9.23684 19.1842C8.86737 19.1842 8.51207 19.042 8.22786 18.772C7.67365 18.2178 7.67365 17.3085 8.22786 16.7543L11.4821 13.5L8.22786 10.2457C7.67365 9.69152 7.67365 8.78216 8.22786 8.22795C8.78207 7.67374 9.69161 7.67374 10.2458 8.22795L13.5 11.4822L16.7542 8.22795C17.3084 7.67374 18.2179 7.67374 18.7721 8.22795C19.3263 8.78216 19.3263 9.69152 18.7721 10.2457L15.5179 13.5L18.7721 16.7543Z"
                    fill="white"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start gap-6">
              <div className="flex flex-col gap-2">
                <a
                  className={`no-underline text-white px-0 py-1 ${
                    navOption === "home"
                      ? "border-b-2 border-solid border-b-white border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#home"
                  onClick={(e) => handleSectionClick(e, "home")}
                >
                  {t("header.home")}
                </a>
                <a
                  className={`no-underline text-white px-0 py-1 ${
                    navOption === "services"
                      ? "border-b-2 border-solid border-b-white border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#services"
                  onClick={(e) => handleSectionClick(e, "services")}
                >
                  {t("header.services")}
                </a>
                <a
                  className={`no-underline text-white px-0 py-1 ${
                    navOption === "about"
                      ? "border-b-2 border-solid border-b-white border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#about"
                  onClick={(e) => handleSectionClick(e, "about")}
                >
                  {t("header.about")}
                </a>
                <a
                  className={`no-underline text-white px-0 py-1 ${
                    navOption === "contact"
                      ? "border-b-2 border-solid border-b-white border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, "contact")}
                >
                  {t("header.contactUs")}
                </a>
                <a
                  className={`no-underline text-white px-0 py-1 ${
                    navOption === "hireUs"
                      ? "border-b-2 border-solid border-b-white border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#hire-us"
                  onClick={(e) => handleSectionClick(e, "hireUs")}
                >
                  {t("header.hireUs")}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  className={`no-underline text-[#ffffff80] px-0 py-1 ${
                    navOption === "login"
                      ? "border-b-2 border-solid border-b-[#ededed80] border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#login"
                  onClick={(e) => handleSectionClick(e, "login")}
                >
                  {t("header.login")}
                </a>
                <a
                  className={`no-underline text-[#ffffff80] px-0 py-1 ${
                    navOption === "signup"
                      ? "border-b-2 border-solid border-b-[#ededed80] border-l-0 border-r-0 border-t-0"
                      : ""
                  }`}
                  href="#signup"
                  onClick={(e) => handleSectionClick(e, "signup")}
                >
                  {t("header.signup")}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className={`no-underline text-white px-0 py-1 hover:opacity-[0.8]`}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setLang("en");
                    localStorage.setItem("lang", "en");
                    closeMenu();
                  }}
                >
                  English
                </p>
                <p
                  className={`no-underline text-white px-0 py-1 hover:opacity-[0.8]`}
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setLang("ar");
                    localStorage.setItem("lang", "ar");
                    closeMenu();
                  }}
                >
                  عربي
                </p>
              </div>
            </div>
          </nav>
        </CSSTransition>
      </header>
    </>
  );
};
