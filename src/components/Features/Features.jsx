import React from "react";
import { Feature } from "../Feature/Feature";
import { FEATURES } from "../../utils/constants";
import { Grid } from "@mui/material";
import featuresImage from "../../assets/images/features.png";

export const Features = () => {
  return (
    <div className="px-12 pt-8 mb-24">
      <h1 className="mb-12">Our Features</h1>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col gap-12">
            {FEATURES.slice(0, 3).map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center items-center">
          <img
            src={featuresImage}
            alt="features_image"
            className="w-full md:w-[450px] mb-12 mt-8 md:mb-0 md:mt-0"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col gap-12">
            {FEATURES.slice(3, 6).map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
