import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Image1 from "../assets/slide_1.png";
import Image2 from "../assets/slide_2.jpg";
import Image3 from "../assets/slide_3.jpg";
import Image4 from "../assets/slide_4.jpg";

const HeroCarousel = () => {
  const images = [
    {
      src: Image1,
      alt: "Image 1",
      title: "Grosvenor – Vaš pouzdani partner",
      subtitle:
        "Grosvenor SCM, deo Britanske grupe Grosvenor Associates Corporation od 2005. godine, je Vaš pouzdani partner za kompletna rešenja namenjena elektronskoj, automobilskoj i elektrotehničkoj industriji preko naših efikasnih i fleksibilnih usluga.",
    },
    {
      src: Image2,
      alt: "Image 2",
      title: "Usluge namenjene industriji",
      subtitle:
        "Grosvenor paket usluga uključuje ESD i IPC obuku, tehničku pomoć, integrisanu logistiku i špediciju, kao i skladištenje i isporuku robe, sve namenjeno elektronskoj, automobilskoj i elektrotehničkoj industriji u Srbiji.",
    },
    {
      src: Image3,
      alt: "Image 3",
      title: "Proizvodi i usluge u elektronskoj industriji",
      subtitle:
        "Grosvenor SCM proizvodi zadovoljavaju i najzahtevnije potrebe klijenata iz elektronske, elektrotehničke, automobilske, tekstilne i plastične industrije, kao i iz industrije obrade metala.",
    },
    {
      src: Image4,
      alt: "Image 4",
      title: "Nudimo personalizovane ponude",
      subtitle:
        "Grosvenor SCM Vam je na raspologanju sa širokim spektrom proizvoda, usluga i aplikacija. Zatražite personalizovanu ponudu za Vašu firmu ili savet specijalizovanog inženjera i započećemo zajedničko uspešno partnerstvo.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    setActiveDotIndex(currentImage);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
    setActiveDotIndex((activeDotIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
    setActiveDotIndex((activeDotIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full transition-opacity duration-500 ${
            index === currentImage
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0"
          }`}
        >
          <div className="h-1/2 sm:h-3/5" style={{ height: "300px" }}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold font-stroke mb-4 text-white text-center">
              {image.title}
            </h1>
            <p className="text-lg sm:text-xl font-stroke-sm text-white font-bold text-center">
              {image.subtitle}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 text-black hover:bg-opacity-75 transition-colors duration-300"
          onClick={prevSlide}
        >
          <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 text-black hover:bg-opacity-75 transition-colors duration-300"
          onClick={nextSlide}
        >
          <MdOutlineKeyboardArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full bg-white ${
              index === activeDotIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => {
              setCurrentImage(index);
              setActiveDotIndex(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
