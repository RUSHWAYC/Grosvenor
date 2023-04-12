import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/slide_1.jpg";
import slide_2 from "../assets/slide_2.jpg";
import slide_3 from "../assets/slide_3.jpg";
import slide_4 from "../assets/slide_4.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true, // Show dots at the bottom of the carousel
    infinite: true, // Allow infinite looping of the images
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 2000, // 5 seconds
  };

  const sliderRef = useRef(null);

  const handlePrevious = () => {
    console.log("Previous button clicked");
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    console.log("Next button clicked");
    sliderRef.current.slickNext();
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={slide_1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide_2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide_3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide_4} alt="Slide 4" />
        </div>
      </Slider>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default HeroSlider;
