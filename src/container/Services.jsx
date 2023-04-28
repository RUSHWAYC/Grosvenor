import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import ImageBanner from "../components/ImageBanner";
import slides from "../data/slideData";

const Services = () => {
  return (
    <>
      <div className="mb-20 md:mb-14 lg:mb-10">
        <ImageBanner
          src={slides[1].src}
          alt={slides[1].alt}
          title={slides[1].title}
          subtitle={slides[1].subtitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <ServicesGrid subtitle="True" />
      </div>
    </>
  );
};

export default Services;
