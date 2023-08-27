import { Grid } from "@mui/material";
import React, { useState } from "react";
import HireUsImg from "../../assets/images/hireUs.png";
import { useContextValue } from "../../context/StateProvider";

export const HireUs = () => {
  const [formMode, setFormMode] = useState("individual");
  const [carVehicleType, setCarVehicleType] = useState("");
  const { t, lang } = useContextValue();

  return (
    <section id="hire-us">
      <div className="px-6 md:px-12 pt-10 md:pt-20 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="md:hidden w-full flex justify-center">
              <img
                src={HireUsImg}
                alt="hire_us_image"
                className="w-full md:w-[500px]"
              />
            </div>
            <div className="hidden md:block">
              {/* hire us heading  */}
              <h1
                style={{ fontWeight: 600 }}
                className="mb-6 mt-12 md:mt-0 md:mb-[0.5rem]"
              >
                {t("hireUs.heading")}
              </h1>
              {/* hire us info.  */}
              <p className="mb-6" style={{ fontWeight: 600 }}>
                {t("hireUs.description")}
              </p>
              {/* button tabs  */}
              <div
                className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md"
                style={{ width: "340px" }}
              >
                <button
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                    lang === "ar" ? "flex-[0.5]" : ""
                  } ${
                    formMode === "individual" ? "text-white" : "text-[#666]"
                  }`}
                  style={{
                    borderRadius: "10px",
                    background: `${
                      formMode === "individual"
                        ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                        : "white"
                    }`,
                  }}
                  onClick={() => setFormMode("individual")}
                >
                  <span>{t("common.serviceForButtonHeading")}</span>
                  <span style={{ fontWeight: 600 }}>
                    {t("common.indCustomerButtonText")}
                  </span>
                </button>
                <button
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                    lang === "ar" ? "flex-[0.5]" : ""
                  } ${formMode === "company" ? "text-white" : "text-[#666]"}`}
                  style={{
                    borderRadius: "10px",
                    background: `${
                      formMode === "company"
                        ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                        : "white"
                    }`,
                  }}
                  onClick={() => setFormMode("company")}
                >
                  <span>{t("common.serviceForButtonHeading")}</span>
                  <span style={{ fontWeight: 600 }}>
                    {t("common.corpCustomerButtonText")}
                  </span>
                </button>
              </div>
              {/* form to fill  */}
              <div className="bg-[#F1F1F1] md:w-[300px] flex flex-col gap-5 px-8 py-4 mt-6 rounded-md">
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-sm">
                    {t("hireUs.formLabel")}
                  </label>
                  <select
                    id="dropdown"
                    placeholder="Select"
                    className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                    value={carVehicleType}
                    onChange={(e) => setCarVehicleType(e.target.value)}
                  >
                    {formMode === "individual" ? (
                      <>
                        <option value="sedan">{t("hireUs.formOption1")}</option>
                        <option value="suv5">{t("hireUs.formOption2")}</option>
                        <option value="suv7">{t("hireUs.formOption3")}</option>
                        <option value="motorbikes">
                          {t("hireUs.formOption4")}
                        </option>
                        <option value="vans">{t("hireUs.formOption5")}</option>
                      </>
                    ) : (
                      <>
                        <option value="sedan">{t("hireUs.formOption1")}</option>
                        <option value="suv5">{t("hireUs.formOption2")}</option>
                        <option value="suv7">{t("hireUs.formOption3")}</option>
                        <option value="vans">{t("hireUs.formOption5")}</option>
                      </>
                    )}
                  </select>
                </div>
                {/* Price according to the vehicle type  */}
                {/* <div className="flex flex-col gap-1">
                  <p className="text-sm">Price: <br /></p>
                </div> */}
              </div>
              {/* book now button  */}
              <div className="mt-6 md:mt-8">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-12 py-4"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  {t("hireUs.bookNowBtnText")}
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="hidden w-full md:flex justify-center">
              <img
                src={HireUsImg}
                alt="hire_us_image"
                className="w-full md:w-[500px]"
              />
            </div>
            <div className="block md:hidden">
              {/* hire us heading  */}
              <h1
                style={{ fontWeight: 600 }}
                className="mt-4 mb-3 md:mb-[3rem]"
              >
                {t("hireUs.heading")}
              </h1>
              {/* hire us info.  */}
              <p style={{ fontWeight: 600, marginBottom: "1rem" }}>
                {t("hireUs.description")}
              </p>
              {/* button tabs  */}
              <div
                className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md justify-center"
                style={{ width: "340px" }}
              >
                <button
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                    lang === "ar" ? "flex-[0.5]" : ""
                  } ${
                    formMode === "individual" ? "text-white" : "text-[#666]"
                  }`}
                  style={{
                    borderRadius: "10px",
                    background: `${
                      formMode === "individual"
                        ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                        : "white"
                    }`,
                  }}
                  onClick={() => setFormMode("individual")}
                >
                  <span>{t("common.serviceForButtonHeading")}</span>
                  <span style={{ fontWeight: 600 }}>
                    {t("common.indCustomerButtonText")}
                  </span>
                </button>
                <button
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                    lang === "ar" ? "flex-[0.5]" : ""
                  } ${formMode === "company" ? "text-white" : "text-[#666]"}`}
                  style={{
                    borderRadius: "10px",
                    background: `${
                      formMode === "company"
                        ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                        : "white"
                    }`,
                  }}
                  onClick={() => setFormMode("company")}
                >
                  <span>{t("common.serviceForButtonHeading")}</span>
                  <span style={{ fontWeight: 600 }}>
                    {t("common.corpCustomerButtonText")}
                  </span>
                </button>
              </div>
              {/* form to fill  */}
              <div className="bg-[#F1F1F1] md:w-[300px] flex flex-col gap-5 px-8 py-4 mt-6 rounded-md">
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-sm">
                    {t("hireUs.formLabel")}
                  </label>
                  <select
                    id="dropdown"
                    placeholder="Select"
                    className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                    value={carVehicleType}
                    onChange={(e) => setCarVehicleType(e.target.value)}
                  >
                    {formMode === "individual" ? (
                      <>
                        <option value="sedan">{t("hireUs.formOption1")}</option>
                        <option value="suv5">{t("hireUs.formOption2")}</option>
                        <option value="suv7">{t("hireUs.formOption3")}</option>
                        <option value="motorbikes">
                          {t("hireUs.formOption4")}
                        </option>
                        <option value="vans">{t("hireUs.formOption5")}</option>
                      </>
                    ) : (
                      <>
                        <option value="sedan">{t("hireUs.formOption1")}</option>
                        <option value="suv5">{t("hireUs.formOption2")}</option>
                        <option value="suv7">{t("hireUs.formOption3")}</option>
                        <option value="vans">{t("hireUs.formOption5")}</option>
                      </>
                    )}
                  </select>
                </div>
                {/* Price according to the vehicle type  */}
                {/* <div className="flex flex-col gap-1">
                  <p className="text-sm">Price: <br /></p>
                </div> */}
              </div>
              {/* book now button  */}
              <div className="mt-6 md:mt-8">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-12 py-4"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                  }}
                >
                  {t("hireUs.bookNowBtnText")}
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
