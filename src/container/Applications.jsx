import React from "react";
import ApplicationGrid from "../components/ApplicationGrid";
import ImageBanner from "../components/ImageBanner";
import slides from "../data/slideData";

const Applications = () => {
  return (
    <>
      <div className="mb-20 md:mb-14 lg:mb-10">
        <ImageBanner
          src={slides[2].src}
          alt={slides[2].alt}
          title={slides[2].title}
          subtitle={slides[2].subtitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-4">
        <ApplicationGrid image="True" />
      </div>
    </>
  );
};

export default Applications;
