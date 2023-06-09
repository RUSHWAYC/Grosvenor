import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./container/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./container/Services";
import Applications from "./container/Applications";
import Contact from "./container/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/primena" element={<Applications />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
