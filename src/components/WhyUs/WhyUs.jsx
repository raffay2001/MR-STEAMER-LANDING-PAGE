import React from "react";
import WhyUsImage from "../../assets/images/whyUs.png";
import { Grid } from "@mui/material";

export const WhyUs = () => {
  return (
    <section id="about">
      <div className="px-6 md:px-12 pt-24 md:pt-32 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="w-full flex justify-start">
              <img
                src={WhyUsImage}
                alt="hire_us_image"
                className="w-full md:w-[500px]"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h1 style={{ fontWeight: 600, marginBottom: "1rem" }}>Why Us</h1>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontWeight: 400,
                  lineHeight: "34px",
                }}
              >
                We value your time and therefore washing your car at our car
                wash will take no more than 15 minutes. Our company employs only
                highly qualified specialists, we use high-quality cleaning
                products and equipment, as well as premium materials. We value
                your time and therefore washing your car at our car wash will
                take no more than 15 minutes. Our company employs only highly
                qualified specialists, we use high-quality cleaning products and
                equipment, as well as premium materials.
              </p>
              <div className="mt-8">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-12 py-4"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
