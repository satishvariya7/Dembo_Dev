import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />        
      </Routes>
    </div>
  );
}

export default App;
