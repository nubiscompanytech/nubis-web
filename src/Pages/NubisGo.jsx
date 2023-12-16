import React, { useEffect } from "react";
import Header from "../Components/Header";
import GoHero from "../Components/GoHero";
import NubisGoServices from "../Components/NubisGoServices";
import Features from "../Components/Features";
import NubisSteps from "../Components/Steps";
import Join from "../Components/Join";
import Footer from "../Components/TheFooter";

const NubisGo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <GoHero />
      <NubisGoServices />
      <Features />
      <NubisSteps />
      <Join />
      <Footer />
    </>
  );
};

export default NubisGo;
