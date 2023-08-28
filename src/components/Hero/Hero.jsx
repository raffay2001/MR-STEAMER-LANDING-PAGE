import React, { useState } from "react";
import Hero2 from "../../assets/images/hero_1.png";
import Hero1 from "../../assets/images/hero_2.png";
import appleLogo from "../../assets/images/apple_logo.png";
import googlePlayLogo from "../../assets/images/google_play_logo.png";
import Rocket from "../../assets/images/rocket.png";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContextValue } from "../../context/StateProvider";

const HeroSlide = ({ slideNo, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const { t } = useContextValue();
  return (
    <Grid
      container
      spacing={2}
      className="px-6 md:px-12 relative md:pt-16 md:h-[50rem]"
    >
      <div className="hidden md:flex md:justify-center">
        <svg
          className="w-[700px] h-[700px] absolute top-4 left-0 -z-10"
          viewBox="0 0 570 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_154_779)">
            <circle
              cx="160"
              cy="406"
              r="343"
              stroke="#D8D8D8"
              stroke-opacity="0.2"
              stroke-width="125"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_154_779"
              x="-249.5"
              y="0.5"
              width="819"
              height="819"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_154_779"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_154_779"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        {slideNo === 1 && (
          <div className="absolute top-4 right-0">
            <div className="relative">
              <img
                src={Rocket}
                alt="rocket_image"
                style={{
                  width: "40px",
                  position: "absolute",
                  top: 180,
                  left: 200,
                }}
              />
              <img
                src={Hero1}
                alt="hero_image"
                className="w-full md:w-[700px]"
              />
            </div>
          </div>
        )}

        {slideNo === 2 && (
          <img
            src={Hero2}
            alt="hero_image"
            className="w-full md:w-[700px] absolute top-4 right-0"
          />
        )}
      </div>
      <Grid item xs={12} md={6}>
        <div className="block md:hidden">
          {slideNo === 1 && (
            <div className="relative">
              <img
                src={Rocket}
                alt="rocket_image"
                style={{
                  width: "25px",
                  position: "absolute",
                  top: "26%",
                  left: "28%",
                }}
              />
              <img
                src={Hero1}
                alt="hero_image"
                className="w-full md:w-[520px]"
              />
            </div>
          )}
          {slideNo === 2 && (
            <img src={Hero2} alt="hero_image" className="w-full md:w-[520px]" />
          )}
        </div>
        <div className="hidden w-full md:flex flex-col gap-8 items-start">
          <p className="text-[#2A2D32] text-[40px] leading-[60px] md:text-[68px] md:leading-[90px]">
            {t("hero.headingPartOne")}{" "}
            <span className="font-bold">{t("hero.headingPartTwo")}</span>
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <button
              className="w-[200px] h-[60px] border-none p-2 rounded-lg bg-black text-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-3"
              onClick={handleOpen}
            >
              <img
                src={googlePlayLogo}
                alt="google_logo"
                className="w-[30px] h-[30px] md:w-[33px] md:h-[33px]"
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>{t("common.googlePlayBtnTextPt1")}</span>
                <span className="font-semibold">
                  {t("common.googlePlayBtnTextPt2")}
                </span>
              </p>
            </button>
            <button
              className="border-none w-[200px] h-[60px] p-2 rounded-lg bg-black text-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-2"
              onClick={handleOpen}
            >
              <img
                src={appleLogo}
                alt="apple_logo"
                className="w-[30px] h-[30px] md:w-[33px] md:h-[33px]"
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>{t("common.appleStoreBtnTextPt1")}</span>
                <span className="font-semibold">
                  {t("common.appleStoreBtnTextPt2")}
                </span>
              </p>
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="flex w-full flex-col gap-8 items-center md:hidden">
          <p className="text-[#2A2D32] text-[40px] leading-[60px] md:text-[68px] md:leading-[90px] text-center">
            {t("hero.headingPartOne")}{" "}
            <span className="font-bold">{t("hero.headingPartTwo")}</span>
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              className="w-[200px] h-[60px] border-none p-2 rounded-lg bg-black text-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-3"
              onClick={handleOpen}
            >
              <img
                src={googlePlayLogo}
                alt="google_logo"
                className="w-[30px] h-[30px] md:w-[33px] md:h-[33px]"
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>{t("common.googlePlayBtnTextPt1")}</span>
                <span className="font-semibold">
                  {t("common.googlePlayBtnTextPt2")}
                </span>
              </p>
            </button>
            <button
              className="border-none w-[200px] h-[60px] p-2 rounded-lg bg-black text-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-2"
              onClick={handleOpen}
            >
              <img
                src={appleLogo}
                alt="apple_logo"
                className="w-[30px] h-[30px] md:w-[33px] md:h-[33px]"
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>{t("common.appleStoreBtnTextPt1")}</span>
                <span className="font-semibold">
                  {t("common.appleStoreBtnTextPt2")}
                </span>
              </p>
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export const Hero = ({ setOpen }) => {
  return (
    <section id="home" className="relative">
      <div className="pt-8 md:pt-12">
        <CarouselX setOpen={setOpen} />
      </div>
    </section>
  );
};

const CarouselX = ({ setOpen }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveSlide(index),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <HeroSlide slideNo={1} setOpen={setOpen} />
        <HeroSlide slideNo={2} setOpen={setOpen} />
      </Slider>
      <div className="dots">
        {[0, 1].map((index) => (
          <div
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
