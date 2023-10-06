import "./styles.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./MainComponents/Home";
import NavBar from "./MainComponents/NavBar";
import TryMe from "./MainComponents/TryMe";
import AboutUs from "./MainComponents/AboutUs";
import Footer from "./MainComponents/Footer";
import NotFound from "./MainComponents/NotFound";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tryme" element={<TryMe />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
