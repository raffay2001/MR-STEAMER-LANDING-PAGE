import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
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
            <Route path="/" element={<HomePage />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;