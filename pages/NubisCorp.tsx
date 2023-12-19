import React, { useEffect } from "react";
import Header from "@comp/Header.tsx";
import CorpHero from "@comp/CorpHero";
import Partnership from "@comp/Partnership";
import JoinCorp from "@comp/JoinCorp";
import Footer from "@comp/TheFooter";

const NubisCorp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <CorpHero />
      <Partnership />
      <JoinCorp />
      <Footer />
    </>
  );
};

export default NubisCorp;
