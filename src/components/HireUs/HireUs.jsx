import { Grid } from "@mui/material";
import React from "react";
import HireUsImg from "../../assets/images/hireUs.png";

export const HireUs = () => {
  return (
    <section id="hire-us">
      <div className="px-6 md:px-12 pt-10 md:pt-20 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="md:hidden w-full flex justify-center">
              <img
                src={HireUsImg}
                alt="hire_us_image"
                className="w-full md:w-[500px]"
              />
            </div>
            <div className="hidden md:block">
              <h1 style={{ fontWeight: 600 }} className="mb-6 mt-12 md:mt-0 md:mb-[1.5rem]">
                Hire Us
              </h1>
              <div
                className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md"
                style={{ width: "340px" }}
              >
                <button
                  className="border-none flex flex-col py-2 px-4 text-white cursor-pointer"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  <span>Service for</span>
                  <span style={{ fontWeight: 600 }}>Individual Customer</span>
                </button>
                <button
                  className="border-none flex flex-col py-2 px-4 text-[#666] cursor-pointer"
                  style={{
                    borderRadius: "10px",
                    background: "white",
                  }}
                >
                  <span>Service for</span>
                  <span style={{ fontWeight: 600 }}>Corporate Sector</span>
                </button>
              </div>
              <p className="mt-8" style={{ fontWeight: 600 }}>
                You bring your car and choose the type of cleaning. When you go
                to drink coffee in our cafe or visit our shop You bring your car
                and choose the type of cleaning. When you go to
              </p>
              <div className="mt-6 md:mt-8">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-12 py-4"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="hidden w-full md:flex justify-center">
              <img
                src={HireUsImg}
                alt="hire_us_image"
                className="w-full md:w-[500px]"
              />
            </div>
            <div className="block md:hidden">
              <h1 style={{ fontWeight: 600 }} className="mt-4 mb-6 md:mb-[3rem]">
                Hire Us
              </h1>
              <div className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md justify-center">
                <button
                  className="border-none flex flex-col py-2 px-4 text-white cursor-pointer"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  <span>Service for</span>
                  <span style={{ fontWeight: 600 }}>Individual Customer</span>
                </button>
                <button
                  className="border-none flex flex-col py-2 px-4 text-[#666] cursor-pointer"
                  style={{
                    borderRadius: "10px",
                    background: "white",
                  }}
                >
                  <span>Service for</span>
                  <span style={{ fontWeight: 600 }}>Corporate Sector</span>
                </button>
              </div>
              <p className="mt-8" style={{ fontWeight: 600 }}>
                You bring your car and choose the type of cleaning. When you go
                to drink coffee in our cafe or visit our shop You bring your car
                and choose the type of cleaning. When you go to
              </p>
              <div className="mt-6 md:mt-8">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-12 py-4"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
