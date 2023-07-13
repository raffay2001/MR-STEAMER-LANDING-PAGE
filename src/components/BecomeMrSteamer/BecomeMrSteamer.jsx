import { Grid } from "@mui/material";
import React from "react";
import BecomeMrSteamerImg from "../../assets/images/BecomeMrSteamer.png";

export const BecomeMrSteamer = () => {
  return (
    <section id="contact">
      <div className="px-12 pt-32 pb-8">
        <Grid container>
          <Grid item xs={12} md={6}>
            <h1 style={{ fontWeight: 600, marginBottom: "3rem" }}>
              Become Mr. Steamer
            </h1>
            <div className="bg-[#F1F1F1] w-[436px] flex gap-2 px-8 py-4 rounded-md">
              <button
                className="border-none flex flex-col p-2 text-[#666] cursor-pointer"
                style={{
                  borderRadius: "10px",
                  background: "white",
                }}
              >
                <span>Service for</span>
                <span style={{ fontWeight: 600 }}>Corporate Sector</span>
              </button>
              <button
                className="border-none flex flex-col p-2 text-[#666] cursor-pointer"
                style={{
                  borderRadius: "10px",
                  background: "white",
                }}
              >
                <span>Service for</span>
                <span style={{ fontWeight: 600 }}>Corporate Sector</span>
              </button>
              <button
                className="border-none flex flex-col p-2 text-white cursor-pointer"
                style={{
                  borderRadius: "10px",
                  background: "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                }}
              >
                <span>Service for</span>
                <span style={{ fontWeight: 600 }}>Individual Customer</span>
              </button>
            </div>
            <div className="bg-[#F1F1F1] w-[300px] flex flex-col gap-5 px-8 py-4 mt-8 rounded-md">
              <p style={{ fontWeight: 600, fontSize: 18 }}>
                Registration with us
              </p>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Full Name"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
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
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Vehicle Type
                </label>
                <select
                  id="dropdown"
                  placeholder="Select"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                >
                  <option>Select</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Individual/Company
                </label>
                <select
                  id="dropdown"
                  placeholder="Select"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                >
                  <option>Select</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <button
                className="border-none flex justify-center p-4 text-white cursor-pointer rounded-2xl"
                style={{
                  background: "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                }}
              >
                <p>Register</p>
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="w-full flex justify-center">
              <img
                src={BecomeMrSteamerImg}
                alt="BecomeMrSteamerImage"
                style={{ width: "500px" }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
