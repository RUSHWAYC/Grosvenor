import React from "react";

const ImageBanner = ({ src, alt, title, subtitle }) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 py-4 px-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="h-20 overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 hover:scrollbar-track-gray-200">
          <p className="text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
