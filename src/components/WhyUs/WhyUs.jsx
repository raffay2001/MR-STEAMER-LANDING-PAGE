import React from "react";
import WhyUsImage from "../../assets/images/whyUs.png";
import { Grid } from "@mui/material";
import { useContextValue } from "../../context/StateProvider";

export const WhyUs = () => {
  const { t } = useContextValue();
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
              <h1 style={{ fontWeight: 600, marginBottom: "1rem" }}>
                {t("whyUs.heading")}
              </h1>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontWeight: 400,
                  lineHeight: "34px",
                }}
              >
                {t("whyUs.description")}
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
                  {t("whyUs.buttonText")}
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
