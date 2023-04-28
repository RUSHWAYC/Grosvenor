import React from "react";

const ImageBanner = ({ src, alt, title, subtitle }) => {
  return (
    <div className="relative">
      <div className="h-1/2 sm:h-3/5" style={{ height: "200px" }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 bg-sky-500 text-white py-2 px-4 mx-10 lg:mx-16 mt-4">
            <h2 className="text-xl sm:text-3xl font-bold mb-2">{title}</h2>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-sky-500 text-white py-4 px-6 mx-10 lg:mx-16 transform translate-y-1/2">
        <p className="text-md sm:text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageBanner;
