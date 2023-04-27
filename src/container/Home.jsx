import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import TextBox from "../components/TextBox";
import ApplicationGrid from "../components/ApplicationGrid";
import text from "../data/textBoxData";
import ServicesGrid from "../components/ServicesGrid";
import BrandsCarousel from "../components/BrandsCarousel";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      {/* Applications. */}
      <TextBox
        title={text[0].title}
        subt1={text[0].subone}
        subt2={text[0].subtwo}
      />
      <ApplicationGrid />
      {/* Services. */}
      <TextBox
        title={text[1].title}
        subt1={text[1].subone}
        subt2={text[1].subtwo}
      />
      <ServicesGrid className="bg-amber-200 border-amber-500 border-b-8 " />
      {/* Brands. */}
      <TextBox
        title={text[2].title}
        subt1={text[2].subone}
        subt2={text[2].subtwo}
      />
      <BrandsCarousel />
    </div>
  );
};

export default Home;
