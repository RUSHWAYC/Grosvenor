import React from "react";
import Slider from "react-slick";
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
    <div className="mx-10 border-2 border-gray-300">
      <Slider {...settings}>
        {brandsData.map((brand) => (
          <div key={brand.id}>
            <img src={brand.logo} alt={brand.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsCarousel;
