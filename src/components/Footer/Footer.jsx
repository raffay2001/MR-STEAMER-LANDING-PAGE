import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import appleLogo from "../../assets/images/apple_logo_dark.png";
import googlePlayLogo from "../../assets/images/google_play_logo.png";
import InstagramLogo from "../../assets/images/instagram_logo.png";
import FacebookLogo from "../../assets/images/facebook_logo.png";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-12 mt-12 py-12">
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col gap-4">
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
            <p className="text-sm w-80 text-justify">
              We value your time and therefore washing your car at our car wash
              will take no more than 15 minutes. We value your time and
              therefore washing your car at our car wash will take no more than
              15 minutes
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.50)" }}>
              Copyright ©2023 Mr. Steamer All rights reserved.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex gap-6">
            <button className="border-none w-[200px] h-[60px] p-2 rounded-lg bg-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-3">
              <img
                src={googlePlayLogo}
                alt="google_logo"
                style={{ width: "33px", height: "33px" }}
              />
              <p className="flex flex-col items-start gap-[0.5px]">
                <span>Get it on</span>
                <span className="font-bold">Google Play</span>
              </p>
            </button>
            <button className="border-none w-[200px] h-[60px] p-2 rounded-lg bg-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-2">
              <img
                src={appleLogo}
                alt="apple_logo"
                style={{ width: "33px", height: "33px" }}
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>Download on the</span>
                <span className="font-bold">Apple Store</span>
              </p>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-evenly">
              <div className="flex flex-col gap-2">
                <ul className="list-none flex flex-col gap-8">
                  <li className="hover:opacity-[0.9]">
                    <a href="#home" className="no-underline text-white">
                      Home
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#services" className="no-underline text-white">
                      Services
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#about" className="no-underline text-white">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <ul className="list-none flex flex-col gap-8">
                  <li className="hover:opacity-[0.9]">
                    <a href="#contact" className="no-underline text-white">
                      Contact Us
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#hire-us" className="no-underline text-white">
                      Hire Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#ffffff80]">Follow Us</span>
              <img src={InstagramLogo} alt="instagram_logo" className="w-7" />
              <img src={FacebookLogo} alt="facebook_logo" className="w-7" />
              <img src={LinkedInLogo} alt="linkedin_logo" className="w-7" />
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};
