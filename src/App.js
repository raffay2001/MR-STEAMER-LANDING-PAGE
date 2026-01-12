import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import SupportPage from "./pages/SupportPage/SupportPage";
import { Toaster } from "react-hot-toast";
import { StateProvider } from "./context/StateProvider";
import { useTranslation } from "react-i18next";

function App({ lang, setLang }) {
  const { t, i18n } = useTranslation("common");
  return (
    <StateProvider value={{ t, i18n, lang, setLang }}>
      <Router>
        <div className="flex flex-col justify-center">
          <Toaster />
          <Routes>
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/"  element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;