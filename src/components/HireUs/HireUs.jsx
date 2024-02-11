import { Box, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import HireUsImg from "../../assets/images/hireUs.png";
import { useContextValue } from "../../context/StateProvider";
import CloseIcon from "../../assets/images/closeIcon.png";
import { SUADIA_CITIES } from "../../utils/constants";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { firestore } from "../../firebase.config";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "10px",
  px: 2,
  py: 3,
};

const topCenterStyle = {
  ...style,
  top: "55%",
};

export const HireUs = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    clearState();
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Select");
  const [formMode, setFormMode] = useState("individual");
  const [carVehicleType, setCarVehicleType] = useState("");
  const { t, lang } = useContextValue();

  const clearState = () => {
    setName("");
    setCompanyName("");
    setPhone("");
    setCompanyPhone("");
    setEmail("");
    setCity("Select");
    setFormMode("individual");
    setCarVehicleType("");
  };

  const formHandler = async () => {
    if (
      name &&
      companyName &&
      phone &&
      companyPhone &&
      email &&
      city &&
      city !== "Select" &&
      formMode &&
      carVehicleType
    ) {
      try {
        const data = {
          name,
          companyName,
          phone,
          companyPhone,
          email,
          city,
          customerType: formMode,
          vehicleType: carVehicleType,
        };
        await setDoc(doc(firestore, "bookings", `${Date.now()}`), data, {
          merge: true,
        });
        setOpen(false);
        toast.success("Your response has submitted, you will be notified.", {});
        clearState();
      } catch (e) {
        setOpen(false);
        toast.error("Something went wrong, please try again.", {});
      }
    } else {
      toast.error("Please fill all the mandatory fields.", {});
    }
  };

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
                  onClick={() => setOpen(true)}
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
              <div className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md justify-center">
                <button
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer justify-center items-center ${
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
                  className={`border-none flex flex-col py-2 px-4 cursor-pointer justify-center items-center ${
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
                    onChange={(e) => {
                      setCarVehicleType(e.target.value);
                    }}
                  >
                    {formMode === "individual" ? (
                      <>
                        <option key="sedan">{t("hireUs.formOption1")}</option>
                        <option key="suv5">{t("hireUs.formOption2")}</option>
                        <option key="suv7">{t("hireUs.formOption3")}</option>
                        <option key="motorbikes">
                          {t("hireUs.formOption4")}
                        </option>
                        <option key="vans">{t("hireUs.formOption5")}</option>
                      </>
                    ) : (
                      <>
                        <option key="sedan">{t("hireUs.formOption1")}</option>
                        <option key="suv5">{t("hireUs.formOption2")}</option>
                        <option key="suv7">{t("hireUs.formOption3")}</option>
                        <option key="vans">{t("hireUs.formOption5")}</option>
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
                  onClick={() => setOpen(true)}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={topCenterStyle}>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex justify-end">
              <div>
                <p style={{ fontWeight: 600 }}>{t("modal.heading")}</p>
                <p style={{ color: "rgba(0, 0, 0, 0.50)", fontSize: "14px" }}>
                  {t("modal.text")}
                </p>
              </div>
              <div>
                <img
                  src={CloseIcon}
                  alt="closeIcon"
                  className="w-8 cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
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
                <label htmlFor="companyName" className="text-sm">
                  {t("common.formCompanyNameField")}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("common.formCompanyNameFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="companyPhone" className="text-sm">
                  {t("common.formCompanyNumberField")}
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder={t("common.formCompanyNumberFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={companyPhone}
                  onChange={(e) => setCompanyPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  {t("common.formEmailField")}
                </label>
                <input
                  type="text"
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
                    <option key={city}>
                      {t(`common.formCityField.cities.${city}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full flex justify-end">
                <button
                  className="border-none flex flex-col p-2 text-white cursor-pointer rounded-3xl px-2 py-4 items-center"
                  style={{
                    fontWeight: 600,
                    background:
                      "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                    width: "200px",
                  }}
                  onClick={formHandler}
                >
                  {t("modal.buttonText")}
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};
