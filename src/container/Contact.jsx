import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import MapLocation from "../components/MapLocation.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

const Contact = () => {
  return (
    <div className="mx-20 pt-2 px-4">
      <ContactInfo />
      <div className="md:flex md:space-x-6">
        <ContactForm />
        <MapLocation />
      </div>
    </div>
  );
};

export default Contact;
