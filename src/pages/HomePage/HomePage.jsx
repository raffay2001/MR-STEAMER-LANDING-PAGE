import React, { useState } from "react";
import {
  BecomeMember,
  BecomeMrSteamer,
  Features,
  Footer,
  Header,
  Hero,
  HireUs,
  Services,
  WhyUs,
} from "../../components";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { Box, Modal } from "@mui/material";
import { SUADIA_CITIES } from "../../utils/constants";
import CloseIcon from "../../assets/images/closeIcon.png";
import { toast } from "react-hot-toast";
import { useContextValue } from "../../context/StateProvider";

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
  top: "55%", // Adjust this value to position the modal vertically
};

const HomePage = () => {
  const { t } = useContextValue();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    clearState();
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Select");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const clearState = () => {
    setCity("Select");
    setName("");
    setEmail("");
    setPhone("");
  };

  const formHandler = async () => {
    if (name && phone && email && city && city !== "Select") {
      try {
        const data = { name, phone, email, city };
        await setDoc(doc(firestore, "users", `${Date.now()}`), data, {
          merge: true,
        });
        setOpen(false);
        toast.success("Your response has submitted, you will be notified.", {
          style: {
            borderRadius: "10px",
            background: "#181818",
            color: "#fff",
          },
        });
      } catch (e) {
        setOpen(false);
        toast.error("Something went wrong, please try again.", {
          style: {
            borderRadius: "10px",
            background: "#181818",
            color: "#fff",
          },
        });
      }
    }
  };
  return (
    <>
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
                  {t("modal.formNameField")}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("modal.formNameFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  {t("modal.formNumberField")}
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder={t("modal.formNumberFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  {t("modal.formEmailField")}
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder={t("modal.formEmailFieldPlaceholder")}
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm">
                  {t("modal.formCityField.heading")}
                </label>
                <select
                  id="city"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option>{t("modal.formCityField.select")}</option>
                  {SUADIA_CITIES.map((city) => (
                    <option key={city}>
                      {t(`modal.formCityField.cities.${city}`)}
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
      <Header />
      <Hero setOpen={setOpen} />
      <Features />
      <Services />
      <HireUs />
      <WhyUs />
      <BecomeMrSteamer />
      <BecomeMember />
      <Footer setOpen={setOpen} />
    </>
  );
};

export default HomePage;
