import { Grid } from "@mui/material";
import React, { useState } from "react";
import BecomeMrSteamerImg from "../../assets/images/BecomeMrSteamer.png";
import { JOB_TYPES, SUADIA_CITIES } from "../../utils/constants";
import { useContextValue } from "../../context/StateProvider";

export const BecomeMrSteamer = () => {
  const [formMode, setFormMode] = useState("permanent");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [jobType, setJobType] = useState("");
  const { t, lang } = useContextValue();

  return (
    <section id="contact">
      <div className="px-6 md:px-12 pt-12 md:pt-28 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 style={{ fontWeight: 600 }} className="mb-[1rem] md:mb-[1rem]">
              {t("becomeMrSteamer.heading")}
            </h1>
            {/* button tabs  */}
            <div className="bg-[#F1F1F1] flex gap-2 py-4 rounded-md md:w-[450px] justify-center items-center px-2">
              <button
                className={`border-none flex flex-col h-12 px-4 cursor-pointer justify-center items-center ${
                  lang === "ar" ? "flex-[0.5]" : ""
                } ${formMode === "permanent" ? "text-white" : "text-[#666]"}`}
                style={{
                  borderRadius: "10px",
                  background: `${
                    formMode === "permanent"
                      ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                      : "white"
                  }`,
                }}
                onClick={() => setFormMode("permanent")}
              >
                <span style={{ fontWeight: 600 }}>
                  {t("becomeMrSteamer.permanentEmployeeText")}
                </span>
              </button>
              <button
                className={`border-none flex flex-col h-12 px-4 cursor-pointer justify-center items-center ${
                  lang === "ar" ? "flex-[0.5]" : ""
                } ${formMode === "partTime" ? "text-white" : "text-[#666]"}`}
                style={{
                  borderRadius: "10px",
                  background: `${
                    formMode === "partTime"
                      ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                      : "white"
                  }`,
                }}
                onClick={() => setFormMode("partTime")}
              >
                <span style={{ fontWeight: 600 }}>
                  {t("becomeMrSteamer.partTimeEmployeeText")}
                </span>
              </button>
              <button
                className={`border-none flex flex-col h-12 px-4 cursor-pointer justify-center items-center ${
                  lang === "ar" ? "flex-[0.5]" : ""
                } ${
                  formMode === "earnWithYourVehicles"
                    ? "text-white"
                    : "text-[#666]"
                }`}
                style={{
                  borderRadius: "10px",
                  background: `${
                    formMode === "earnWithYourVehicles"
                      ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                      : "white"
                  }`,
                }}
                onClick={() => setFormMode("earnWithYourVehicles")}
              >
                <span style={{ fontWeight: 600 }} className="text-[0.72rem] md:text-[0.85rem]">
                  {t("becomeMrSteamer.earnWithYourVehiclesText")}
                </span>
              </button>
            </div>
            <div className="bg-[#F1F1F1] md:w-[300px] flex flex-col gap-5 px-8 py-4 mt-8 rounded-md">
              <p style={{ fontWeight: 600, fontSize: 18 }}>
                {t("becomeMrSteamer.formHeading")}
              </p>
              <div className="flex flex-col gap-1">
                <label htmlFor="jobType" className="text-sm">
                  {t("becomeMrSteamer.formJobTypeField.heading")}
                </label>
                <select
                  id="jobType"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  {JOB_TYPES.map((jobType) => (
                    <option key={jobType.key} value={jobType.value}>
                      {t(
                        `becomeMrSteamer.formJobTypeField.jobTypes.${jobType.key}`
                      )}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  {t("common.formNameField")}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("common.formNameFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  {t("common.formNumberField")}
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder={t("common.formNumberFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  {t("common.formEmailField")}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t("common.formEmailFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm">
                  {t("common.formCityField.heading")}
                </label>
                <select
                  id="city"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>{t("common.formCityField.select")}</option>
                  {SUADIA_CITIES.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {t(`common.formCityField.cities.${city}`)}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="border-none flex justify-center p-4 text-white cursor-pointer rounded-2xl"
                style={{
                  background: "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                }}
                // onClick={() => alert(JSON.stringify({name, email, mobile, city, jobType}))}
              >
                <p>{t(`becomeMrSteamer.registerButtonText`)}</p>
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="w-full flex justify-center">
              <img
                src={BecomeMrSteamerImg}
                alt="BecomeMrSteamerImage"
                className="w-full md:w-[500px]"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
