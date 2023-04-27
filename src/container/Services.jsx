import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import services from "../data/servicesData";

const Services = () => {
  return (
    <div>
      <div>
        <ServicesGrid subtitle="True" />
      </div>
    </div>
  );
};

export default Services;
