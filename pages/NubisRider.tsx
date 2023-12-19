import React from "react";
import Header from "@comp/Header";
import Hero from "@comp/Hero";
import Services from "@comp/Services";
import Footer from "@comp/TheFooter";

const NubisRider = () => {
  return (
    <>
      <Header />
      <div className="rider">
        {" "}
        <h4>Watch This Space!</h4>
        <p>We are bringing this soon.</p>
      </div>

      <Footer />
    </>
  );
};

export default NubisRider;
