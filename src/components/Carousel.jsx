import { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import slide_1 from "../assets/slide_1.jpg";
import slide_2 from "../assets/slide_2.jpg";
import slide_3 from "../assets/slide_3.jpg";
import slide_4 from "../assets/slide_4.jpg";
const slides = [slide_1, slide_2, slide_3, slide_4];

const Carousel = () => {
  return (
    <div>
      <Slider autoSlide={true}>
        {slides.map((slide, i) => (
          <img src={slide} key={i} />
        ))}
      </Slider>
    </div>
  );
};

const Slider = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const previousSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  const nextSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={previousSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdOutlineKeyboardArrowLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdOutlineKeyboardArrowRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentSlide === i ? "p-2" : "bg-opacity-50"
              }`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
