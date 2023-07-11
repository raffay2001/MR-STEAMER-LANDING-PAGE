import React from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import InstagramLogo from "../../assets/images/instagram_logo.png"
import FacebookLogo from "../../assets/images/facebook_logo.png"
import LinkedInLogo from "../../assets/images/linkedin_logo.png"

export const Header = ({}) => {
  return (
    <header className="bg-black flex justify-between items-center text-white px-8 pt-6 pb-2">
      <div className="flex gap-3">
        <div>
          <img src={Logo} alt="logo_0" className="w-15 h-10" />
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
              Home
            </li>
            <li className="py-1 hover:opacity-[0.9]">Services</li>
            <li className="py-1 hover:opacity-[0.9]">About Us</li>
            <li className="py-1 hover:opacity-[0.9]">Contact Us</li>
            <li className="py-1 hover:opacity-[0.9]">Hire Us</li>
          </ul>
          <div className="flex gap-4 text-[#ffffff80]">
            <div className="py-1 hover:opacity-[0.9]">Login</div>
            <div className="w-[0.1px] bg-gray-500"></div>
            <div className="py-1 hover:opacity-[0.9]">Signup</div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <span className="text-[#ffffff80]">Follow Us</span>
          <img src={InstagramLogo} alt="instagram_logo" className="w-7" />
          <img src={FacebookLogo} alt="facebook_logo" className="w-7" />
          <img src={LinkedInLogo} alt="linkedin_logo" className="w-7" />
        </div>
      </nav>
    </header>
  );
};
