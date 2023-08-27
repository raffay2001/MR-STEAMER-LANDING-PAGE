import React from "react";
import { Feature } from "../Feature/Feature";
import { FEATURES } from "../../utils/constants";
import { Grid } from "@mui/material";
import featuresImage from "../../assets/images/features.png";
import { useContextValue } from "../../context/StateProvider";

export const Features = () => {
  const { t } = useContextValue();
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 mb-24">
      <h1 className="mb-12">{t("features.heading")}</h1>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col gap-12">
            {FEATURES.slice(0, 3).map((feature) => (
              <Feature
                key={feature.key}
                icon={feature.icon}
                title={t(`features.featureList.${feature.key}.title`)}
                description={t(
                  `features.featureList.${feature.key}.description`
                )}
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
                key={feature.key}
                icon={feature.icon}
                title={t(`features.featureList.${feature.key}.title`)}
                description={t(
                  `features.featureList.${feature.key}.description`
                )}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
