import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero2 from "../../assets/images/hero_1.png";
import Hero1 from "../../assets/images/hero_2.png";
import appleLogo from "../../assets/images/apple_logo.png";
import googlePlayLogo from "../../assets/images/google_play_logo.png";
import Rocket from "../../assets/images/rocket.png";
import Box from "@mui/material/Box";
import { SUADIA_CITIES } from "../../utils/constants";
import Modal from "@mui/material/Modal";
import CloseIcon from "../../assets/images/closeIcon.png";
import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { firestore } from "../../firebase.config";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "10px",
  px: 2,
  py: 3,
};

const topCenterStyle = {
  ...style,
  top: "55%", // Adjust this value to position the modal vertically
};

const HeroSlide = ({ slideNo, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-screen flex items-center">
      <div className="flex flex-col gap-8 w-1/2">
        <p className="text-[#2A2D32] text-[68px] text-start leading-[90px]">
          Now steam car wash at your door step is{" "}
          <span className="font-bold">just one tap away.</span>
        </p>
        <div className="flex gap-2">
          <button
            className="border-none w-[200px] h-[60px] p-2 rounded-lg bg-black text-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-3"
            onClick={handleOpen}
          >
            <img
              src={googlePlayLogo}
              alt="google_logo"
              style={{ width: "33px", height: "33px" }}
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
              style={{ width: "33px", height: "33px" }}
            />
            <p className="flex flex-col gap-[0.5px] items-start">
              <span>Download on the</span>
              <span className="font-bold">Apple Store</span>
            </p>
          </button>
        </div>
      </div>
      <div className="w-1/2">
        {slideNo === 1 && (
          <div className="relative">
            <img
              src={Rocket}
              alt="rocket_image"
              style={{
                width: "40px",
                position: "absolute",
                top: 130,
                left: 265,
              }}
            />
            <img src={Hero1} alt="hero_image" style={{ width: "520px" }} />
          </div>
        )}
        {slideNo === 2 && (
          <img src={Hero2} alt="hero_image" style={{ width: "520px" }} />
        )}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    clearState();
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Select");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const clearState = () => {
    setCity("Select");
    setName("");
    setEmail("");
    setPhone("");
  };

  const formHandler = async () => {
    if (name && phone && email && city && city !== "Select") {
      try {
        const data = { name, phone, email, city };
        await setDoc(doc(firestore, "users", `${Date.now()}`), data, {
          merge: true,
        });
        setOpen(false);
      } catch (e) {
        alert("Something went wrong please try again.");
        setOpen(false);
      }
    }
  };

  return (
    <section id="home">
      <div className="pt-8 px-12">
        <Carousel showArrows={false} showStatus={false}>
          <HeroSlide slideNo={1} setOpen={setOpen} />
          <HeroSlide slideNo={2} setOpen={setOpen} />
        </Carousel>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={topCenterStyle}>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex justify-end">
              <div>
                <p style={{ fontWeight: 600 }}>Submit to Notify</p>
                <p style={{ color: "rgba(0, 0, 0, 0.50)", fontSize: "14px" }}>
                  We are just around the corner. fill the details to get the
                  notify.
                </p>
              </div>
              <div>
                <img
                  src={CloseIcon}
                  alt="closeIcon"
                  className="w-8 cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Full Name"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Mobile Number"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Email Address"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <select
                  id="city"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option>Select</option>
                  {SUADIA_CITIES.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-2 py-4 items-center"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                    width: "200px",
                  }}
                  onClick={formHandler}
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};
