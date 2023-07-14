import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Toaster />
      <HomePage />
    </div>
  );
}

export default App;
