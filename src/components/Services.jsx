import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesData";

const Services = () => {
  return (
    <div className="bg-yellow-400 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link to="/" key={index}>
              <div className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex flex-col">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="flex-1 flex flex-col justify-center px-4 py-2">
                  <h3 className="text-lg font-medium mb-2 text-center sm:h-10 md:h-24 lg:h-20">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
