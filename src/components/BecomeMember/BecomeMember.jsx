import React from "react";
import { Grid } from "@mui/material";
import { SARS } from "../../utils/constants";
import { SAR } from "../SAR/SAR";

export const BecomeMember = () => {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-8">
      <p>Choose Plan</p>
      <h1 style={{ fontWeight: 600, marginBottom: "2rem" }}>Become Member</h1>
      <Grid container spacing={4}>
        {SARS.map((sar) => (
          <Grid key={sar.title} item xs={12} md={4}>
            <SAR title={sar.title} description={sar.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
