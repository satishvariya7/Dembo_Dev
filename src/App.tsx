import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectWalletPage from "./Pages/ConnectWalletPage/ConnectWalletPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ConnectWallet" element={<ConnectWalletPage />} />
      </Routes>
    </div>
  );
}

export default App;
