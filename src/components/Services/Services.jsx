import React from "react";
import { Service } from "../Service/Service";
import { Grid } from "@mui/material";
import { SERVICES } from "../../utils/constants";

export const Services = () => {
  return (
    <section id="services">
      <div className="px-6 md:px-12 pt-6 pb-16 md:pb-32 bg-black">
        <div className="flex flex-col gap-2">
          <p className="text-white">Find Who We Are</p>
          <h1 className="text-white">
            We Only Provide Quality Care <br /> Services
          </h1>
        </div>
        <div className="block">
          <Grid container spacing={4} marginTop={3}>
            {SERVICES.map((service, index) => (
              <Grid item xs={12} md={4} key={`${service.title}-${index}`}>
                <Service
                  title={service.title}
                  description={service.description}
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
