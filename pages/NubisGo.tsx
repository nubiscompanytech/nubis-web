import React, { useEffect } from "react";
import Header from "@comp/Header.tsx";
import GoHero from "@comp/GoHero";
import NubisGoServices from "@comp/NubisGoServices";
import Features from "@comp/Features";
import NubisSteps from "@comp/Steps";
import Join from "@comp/Join";
import Footer from "@comp/TheFooter";

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
