import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import slides from "../data/slideData";

const HeroCarousel = () => {
  // Defining states for the current slide and active dot index.
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using useEffect to set an interval for sliding between images.
  useEffect(() => {
    // Updating the current slide state based on the next slide index.
    const interval = setInterval(nextSlide, 5000);

    // Clearing the interval to avoid memory leaks.
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Function to slide to the next image.
  const nextSlide = useCallback(() => {
    // Updating the current slide state based on the next slide index.
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, [currentSlide]);

  // Function to slide to the previous image.
  const prevSlide = useCallback(() => {
    // Updating the current slide state based on the previous slide index.
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide]);

  // Memoizing the slides and activeDotIndex for performance.
  const memoizedSlides = useMemo(() => slides, []);
  const activeDotIndex = useMemo(() => currentSlide, [currentSlide]);

  // ^^^^^^^^^^^^^^^^^^^^
  // <------return------>
  // vvvvvvvvvvvvvvvvvvvv

  return (
    <div className="relative">
      {/* Render each slide and descontructuring slides const. */}
      {memoizedSlides.map(({ src, alt, title, subtitle }, index) => (
        <div
          key={index}
          className={`w-full transition-opacity duration-500 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0"
          }`}
        >
          {/* Render the image for the slide */}
          <div className="h-1/2 sm:h-3/5" style={{ height: "300px" }}>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </div>
          {/* Render the title and subtitle for the slide */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold font-stroke mb-4 text-white text-center">
              {title}
            </h1>
            <p className="text-md sm:text-xl font-stroke-sm text-white font-bold text-center">
              {subtitle}
            </p>
          </div>
        </div>
      ))}
      {/* Render the button for moving to the previous slide */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 text-black hover:bg-opacity-75 transition-colors duration-300"
          onClick={prevSlide}
        >
          <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
        </button>
      </div>
      {/* Render the button for moving to the next slide */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 text-black hover:bg-opacity-75 transition-colors duration-300"
          onClick={nextSlide}
        >
          <MdOutlineKeyboardArrowRight className="h-6 w-6" />
        </button>
      </div>
      {/* Render the navigation dots for each slide */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-4">
        {memoizedSlides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full bg-cyan-400 ${
              index === activeDotIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
