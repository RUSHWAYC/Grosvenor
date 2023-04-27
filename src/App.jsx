import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./container/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./container/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usluge" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
