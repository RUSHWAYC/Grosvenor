import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import ImageBanner from "../components/ImageBanner";
import slides from "../data/slideData";

const Services = () => {
  return (
    <>
      <div className="mb-0 md:mb-16 lg:mb-40">
        <div className="h-1/2 sm:h-3/5" style={{ height: "200px" }}>
          <ImageBanner
            src={slides[1].src}
            alt={slides[1].alt}
            title={slides[1].title}
            subtitle={slides[1].subtitle}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <ServicesGrid subtitle="True" />
      </div>
    </>
  );
};

export default Services;
