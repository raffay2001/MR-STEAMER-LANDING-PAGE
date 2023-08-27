import React from "react";
import { Service } from "../Service/Service";
import { Grid } from "@mui/material";
import { SERVICES } from "../../utils/constants";
import { useContextValue } from "../../context/StateProvider";

export const Services = () => {
  const { t } = useContextValue();
  return (
    <section id="services">
      <div className="px-6 md:px-12 pt-16 pb-16 md:pb-32 bg-black">
        <div className="flex flex-col gap-2">
          <p className="text-white">{t("services.heading")}</p>
          <h1 className="text-white">
            {t("services.subHeading1")} <br /> {t("services.subHeading2")}
          </h1>
        </div>
        <div className="block">
          <Grid container spacing={4} marginTop={3}>
            {SERVICES.map((service, index) => (
              <Grid item xs={12} md={4} key={service.key}>
                <Service
                  title={t(`services.serviceList.${service.key}.title`)}
                  description={t(
                    `services.serviceList.${service.key}.description`
                  )}
                  icon={service.icon}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};
