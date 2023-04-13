import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Image1 from "../assets/slide_1.png";
import Image2 from "../assets/slide_2.jpg";
import Image3 from "../assets/slide_3.jpg";

const HeroCarousel = () => {
  const images = [
    {
      src: Image1,
      alt: "Image 1",
      title: "Title 1",
      subtitle: "Subtitle 1",
    },
    {
      src: Image2,
      alt: "Image 2",
      title: "Title 2",
      subtitle: "Subtitle 2",
    },
    {
      src: Image3,
      alt: "Image 3",
      title: "Title 3",
      subtitle: "Subtitle 3",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {image.title}
            </h1>
            <p className="text-lg text-white">{image.subtitle}</p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none"
            >
              <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none"
            >
              <MdOutlineKeyboardArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`${
              index === currentImage ? "bg-white" : "bg-gray-400"
            } h-2 w-2 mx-2 rounded-full focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
