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

const HeroSlide = ({ slideNo, setOpen }) => {
  const handleOpen = () => setOpen(true);
  return (
    <Grid container spacing={2}>
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
            Now steam car wash at your door step is{" "}
            <span className="font-bold">just one tap away.</span>
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
                <span>Get it on</span>
                <span className="font-bold">Google Play</span>
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
                <span>Download on the</span>
                <span className="font-bold">Apple Store</span>
              </p>
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="hidden md:flex justify-center">
          {slideNo === 1 && (
            <div className="relative">
              <img
                src={Rocket}
                alt="rocket_image"
                style={{
                  width: "40px",
                  position: "absolute",
                  top: 130,
                  left: 142,
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
        <div className="flex w-full md:hidden flex-col gap-8 items-center">
          <p className="text-[#2A2D32] text-[40px] leading-[60px] md:text-[68px] md:leading-[90px] text-center">
            Now steam car wash at your door step is{" "}
            <span className="font-bold">just one tap away.</span>
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
                <span>Get it on</span>
                <span className="font-bold">Google Play</span>
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
                <span>Download on the</span>
                <span className="font-bold">Apple Store</span>
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
    <section id="home">
      <div className="pt-8 md:pt-12 px-6 md:px-12">
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
