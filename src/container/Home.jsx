import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import TextBox from "../components/TextBox";

const Home = () => {
  return (
    <div>
      {/* <HeroSlider /> */}
      <HeroCarousel />
      <TextBox
        title="Primena naših proizvoda"
        subt1="Kroz brojne saradnje razvijene tokom godina sa renomiranim proizvođačima, proizvodi koje distribuira Grosvenor SCM zadovoljavaju i najzahtevnije potrebe klijenata iz elektronske, elektrotehničke, automobilske, tekstilne i plastične industrije, kao i iz industrije obrade metala."
        subt2="Kompletna rešenja za proizvodnju štampanih ploča i elektronskih kola, čišćenje i tretman površina, zaštitno antistatičko pakovanje i obeležavanje, rešenja za ličnu zaštitu su deo visokokvalitetnih proizvoda i usluga koji se isporučuju u najkraćem roku."
      />
    </div>
  );
};

export default Home;
