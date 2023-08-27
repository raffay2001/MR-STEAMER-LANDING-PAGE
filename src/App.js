import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
import { StateProvider } from "./context/StateProvider";
import { useTranslation } from "react-i18next";

function App({ lang, setLang }) {
  const { t, i18n } = useTranslation("common");
  return (
    <StateProvider value={{ t, i18n, lang, setLang }}>
      <div className="flex flex-col justify-center">
        <Toaster />
        <HomePage />
      </div>
    </StateProvider>
  );
}

export default App;
