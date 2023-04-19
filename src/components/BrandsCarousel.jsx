import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import brandsData from "../data/brandsData";

const BrandsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-10 border-2 border-gray-300">
        <Slider {...settings}>
          {brandsData.map((brand) => (
            <div key={brand.id}>
              <Link to={brand.link} target="_blank" rel="noopener noreferrer">
                <img src={brand.logo} alt={brand.alt} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-8 mx-auto block">
        Lista svih partnera
      </button>
    </>
  );
};

export default BrandsCarousel;
