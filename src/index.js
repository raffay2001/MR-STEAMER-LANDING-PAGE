import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ar from "./translations/ar/common.json";

const Root = () => {
  let langValue = localStorage.getItem("lang");
  if (!langValue) {
    localStorage.setItem("lang", "en");
    langValue = localStorage.getItem("lang");
  }
  const [lang, setLang] = useState(langValue);
  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: langValue, // language to use
    resources: {
      en: {
        common: common_en, // 'common' is our custom namespace
      },
      ar: {
        common: common_ar,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <App lang={lang} setLang={setLang} />
    </I18nextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
