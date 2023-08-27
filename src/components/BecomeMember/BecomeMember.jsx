import React from "react";
import { Grid } from "@mui/material";
import { SARS } from "../../utils/constants";
import { SAR } from "../SAR/SAR";
import { useContextValue } from "../../context/StateProvider";

export const BecomeMember = () => {
  const { t, lang } = useContextValue();
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-8">
      <p>{t("becomeMember.heading")}</p>
      <h1 style={{ fontWeight: 600 }}>{t("becomeMember.subHeading")}</h1>
      <p className="mb-12">{t("becomeMember.description")}</p>
      <Grid container spacing={4}>
        {SARS.map((sar) => (
          <Grid key={sar.key} item xs={12} md={4}>
            <SAR
              title={t(`becomeMember.packageList.${sar.key}.title`)}
              description={
                lang === "en" ? sar.descriptionEn : sar.descriptionAr
              }
              subscribeButtonText={t(`becomeMember.subscribeButtonText`)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
