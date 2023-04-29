import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 border rounded-lg shadow-lg p-6 my-6 text-center">
      <h2 className="text-4xl text-gray-600 font-bold mb-6">
        Kako Vam možemo pomoći?
      </h2>
      <div className="flex flex-row justify-center items-center space-x-8">
        <div className="flex items-center space-x-2 text-lg">
          <FaMapMarkerAlt className="text-blue-500 text-2xl" />
          <span>123 Main St, Anytown, USA 12345</span>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <FaPhone className="text-blue-500 text-2xl" />
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <FaEnvelope className="text-blue-500 text-2xl" />
          <span>info@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
