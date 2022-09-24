import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectWallet from "./Components/ConnectWallet/ConnectWallet";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ConnectWallet" element={<ConnectWallet />} />
      </Routes>
    </div>
  );
}

export default App;
