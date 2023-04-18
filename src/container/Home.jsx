import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import TextBox from "../components/TextBox";
import CardGrid from "../components/CardGrid";
import text from "../data/textBoxData";

const Home = () => {
  return (
    <div>
      {/* <HeroSlider /> */}
      <HeroCarousel />
      <TextBox
        title={text[0].title}
        subt1={text[0].subone}
        subt2={text[0].subtwo}
      />
      <CardGrid />
      <TextBox
        title={text[1].title}
        subt1={text[1].subone}
        subt2={text[1].subtwo}
      />
    </div>
  );
};

export default Home;
