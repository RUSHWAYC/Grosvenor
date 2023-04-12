import React from "react";
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
      <Slider>
        {slides.map((slide) => (
          <img src={slide} />
        ))}
      </Slider>
    </div>
  );
};

const Slider = ({ children: slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <MdOutlineKeyboardArrowLeft size={40} />
        </button>
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <MdOutlineKeyboardArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
