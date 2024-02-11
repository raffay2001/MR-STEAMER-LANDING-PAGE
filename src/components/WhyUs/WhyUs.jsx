import React from "react";
import WhyUsImage from "../../assets/images/whyUs.png";
import { Grid } from "@mui/material";
import { useContextValue } from "../../context/StateProvider";

export const WhyUs = () => {
  const { t } = useContextValue();
  return (
    <section id="about">
      <div className="px-6 md:px-12 pt-24 md:pt-32 pb-8 relative">
        <svg
          viewBox="0 0 410 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[50%] right-0 md:top-8 md:-right-28 w-[286px] h-[470px] md:w-[686px] md:h-[686px]"
        >
          <g filter="url(#filter0_d_261_224)">
            <circle
              cx="410"
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
              id="filter0_d_261_224"
              x="0.5"
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
                result="effect1_dropShadow_261_224"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_261_224"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
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
                <a href="#contact">
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
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
