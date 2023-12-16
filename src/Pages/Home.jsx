import React, { useEffect } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Footer from "../Components/TheFooter";
import Headerww from "../Components/test";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Headerww /> */}
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
