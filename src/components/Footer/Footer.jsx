import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/logo1.png";
import appleLogo from "../../assets/images/apple_logo_dark.png";
import googlePlayLogo from "../../assets/images/google_play_logo.png";
import InstagramLogo from "../../assets/images/instagram_logo.png";
import FacebookLogo from "../../assets/images/facebook_logo.png";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";
import VisaMasterLogo from "../../assets/images/visa_master_logo.png";
import VATLogo from "../../assets/images/VAT_logo.png";
import EmailLogo from "../../assets/images/Email_Logo.png";
import WhatsappLogo from "../../assets/images/whatsapp_logo.png";
import PhoneLogo from "../../assets/images/phone_logo.png";
import ApplePay from "../../assets/images/apple_pay.png";
import GooglePay from "../../assets/images/goole_pay.png";
import TabbyLogo from "../../assets/images/tabby_logo.png";
import MADALogo from "../../assets/images/mada_logo.png";
import AMLogo from "../../assets/images/am_logo.png";




import { useContextValue } from "../../context/StateProvider";
import { Link } from "react-router";
export const Footer = ({ setOpen }) => {
  const { t } = useContextValue();
  return (
    <footer className="bg-black text-white px-12 mt-12 py-12">
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div>
                <a href="/">
                  <img src={Logo} alt="logo_0" className="w-15 h-10" />
                </a>
                <div className="text-sm border-x-0 border-y-[0.1px] border-solid border-white">
                  {t("common.logoTitle")}
                </div>
              </div>
              <div className="w-[0.1px] bg-gray-500"></div>
              <div>
                <img src={Logo1} alt="logo_1" className="w-[100px]" />
              </div>
            </div>
            <p className="text-sm w-80 text-justify">
              {t("footer.description")}
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.50)" }}>
              {t("footer.copyrightText")}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex gap-6 flex-col md:flex-row">
            <button
              className="border-none md:w-[200px] md:h-[60px] p-2 rounded-lg bg-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-3"
              onClick={() => setOpen(true)}
            >
              <img
                src={googlePlayLogo}
                alt="google_logo"
                style={{ width: "33px", height: "33px" }}
              />
              <p className="flex flex-col items-start gap-[0.5px]">
                <span>{t("common.googlePlayBtnTextPt1")}</span>
                <span className="font-semibold">{t("common.googlePlayBtnTextPt2")}</span>
              </p>
            </button>
            <button
              className="border-none md:w-[200px] md:h-[60px] p-2 rounded-lg bg-white text-[16px] cursor-pointer hover:opacity-[0.9] flex justify-center items-center gap-2"
              onClick={() => setOpen(true)}
            >
              <img
                src={appleLogo}
                alt="apple_logo"
                style={{ width: "33px", height: "33px" }}
              />
              <p className="flex flex-col gap-[0.5px] items-start">
                <span>{t("common.appleStoreBtnTextPt1")}</span>
                <span className="font-semibold">{t("common.appleStoreBtnTextPt2")}</span>
              </p>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="mt-8 md:mt-0 flex flex-col justify-between h-full gap-6 md:gap-0">
            <div className="flex justify-start md:justify-evenly gap-12 md:gap-0">
              <div className="flex flex-col gap-2">
                <ul className="list-none flex flex-col gap-8">
                  <li className="hover:opacity-[0.9]">
                    <a href="#home" className="no-underline text-white">
                      {t("common.home")}
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#services" className="no-underline text-white">
                      {t("common.services")}
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#about" className="no-underline text-white">
                      {t("common.about")}
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <Link to="/terms-and-conditions" className="text-white no-underline hover:no-underline">
                      {t("footer.termsAndConditions")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <ul className="list-none flex flex-col gap-8">
                  <li className="hover:opacity-[0.9]">
                    <a href="#contact" className="no-underline text-white">
                      {t("common.contactUs")}
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <a href="#hire-us" className="no-underline text-white">
                      {t("common.hireUs")}
                    </a>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <Link to="/refund-policy" className="text-white no-underline hover:no-underline">
                      {t("footer.refundPolicy")}
                    </Link>
                  </li>
                  <li className="hover:opacity-[0.9]">
                    <Link to="/privacy-policy" className="text-white no-underline hover:no-underline">
                      {t("footer.privacyPolicy")}
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-center gap-4">
              <span className="text-[#ffffff80]">
                {t("footer.followUsText")}
              </span>
              <a
                href="https://www.instagram.com/mrsteamerofficial/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstagramLogo} alt="instagram_logo" className="w-7" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100093985143702&mibextid=LQQJ4d&_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookLogo} alt="facebook_logo" className="w-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/mr-steamer/?trk=organization_guest_main-feed-card_feed-actor-name"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedInLogo} alt="linkedin_logo" className="w-7" />
              </a>

            </div>

          </div>

        </Grid>
      </Grid>

      <div className="flex flex-col justify-center items-center mt-8">
        {/* Contact information */}
        <span className="text-[#ffffff80] text-sm">{t("footer.crLicenseText")}: 2055149418</span>

        <div className="flex flex-col items-center gap-3 mb-6">
          <span className="text-[#ffffff80] text-sm font-medium mb-1">
            {t("footer.contactUsText") || "Contact Us"}
          </span>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Phone */}
            <a href="tel:+966582771208" className="flex items-center gap-2 text-white hover:text-gray-300">
              <img src={PhoneLogo} alt="phone_logo" className="w-5 h-5" />
              <span className="text-sm">+966 58 277 1208</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/966582771208" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-gray-300">
              <img src={WhatsappLogo} alt="whatsapp_logo" className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </a>

            {/* Email */}
            <a href="mailto:info@mistersteamer.com" className="flex items-center gap-2 text-white hover:text-gray-300">
              <img src={EmailLogo} alt="email_logo" className="w-5 h-5" />
              <span className="text-sm">info@mistersteamer.com</span>
            </a>

          </div>

          {/* WhatsApp Channel */}
          <a
            href="https://whatsapp.com/channel/0029VaqaFBD3WHTe7EWIP33B"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 mt-1"
          >
            <img src={WhatsappLogo} alt="whatsapp_channel_logo" className="w-5 h-5" />
            <span className="text-sm">{t("footer.whatsappChannelText")}</span>
          </a>
        </div>

        {/* Payment methods section */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-[#ffffff80] text-sm">
            {t("footer.paymentMethodsText") || "Accepted Payment Methods"}
          </span>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <img src={VisaMasterLogo} alt="visa_mastercard_logo" className="h-8" />
            <img src={MADALogo} alt="mada_logo" className="h-8" />
            <img src={ApplePay} alt="apple_pay_logo" className="h-8" />
            <img src={GooglePay} alt="google_pay_logo" className="h-8" />
            <img src={TabbyLogo} alt="tabby_logo" className="h-8" />
            <img src={AMLogo} alt="american_express_logo" className="h-10" />
          </div>
        </div>

        {/* VAT and CR information */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="flex flex-col">
            <span className="text-[#ffffff80] text-sm">{t("footer.vatNoText")}: 312438910900003</span>
          </div>
          <img
            src={VATLogo}
            alt="vat_logo"
            className="h-10"
          />

        </div>
      </div>
    </footer>
  );
};
