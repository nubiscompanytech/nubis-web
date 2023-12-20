import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import NubisGo from "@assets/images/MaskGroup.png";
import Corporate from "@assets/images/CorporateW.png";
import Rider from "@assets/images/RiderMan.png";
import { Link, useNavigate } from "react-router-dom";
import Image from "next/image";

const Services = () => {
  const navigate = useNavigate();

  function navGo() {
    navigate("/NubisGo");
  }

  function navCorp() {
    navigate("/NubisCorp");
  }
  function navRider() {
    navigate("/NubisRider");
  }

  return (
    <div className="OurServices">
      <h3 className="texts">Our Services</h3>
      <div className="services ">
        <div className="serviceCard ">
          <Image
            className="image"
            src={NubisGo}
            alt="Someone recieving a package."
          />
          <div className="serviceTexts">
            <h3>Nubis Go</h3>
            <p className="servicecopy">
              From swift deliveries to transparent communication, we're
              dedicated to making every interaction with us a delightful one.
              Your satisfaction drives our commitment to excellence.
            </p>

            <p className="learn" onClick={navGo}>
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
        </div>
        <div className="serviceCard">
          <div className="serviceTexts">
            <h3>Nubis Corporate</h3>
            <p className="servicecopy">
              Benefit from seamless collaboration, cutting-edge technology, and
              unparalleled support. Together, let's redefine the future of
              logistics and unlock new opportunities for growth.
            </p>

            <p className="learn" onClick={navCorp}>
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
          <Image
            className="imageee"
            src={Corporate}
            alt="A corporate lady with a laptop."
          />
        </div>
        <div className="serviceCard ">
          <Image
            className="imageee"
            src={Rider}
            alt="A dispatch rider on his bike."
          />
          <div className="serviceTexts">
            <h3>Nubis Rider</h3>
            <p className="servicecopy">
              Join our team of dedicated riders who play a pivotal role in our
              success story. we offer more than just a job – we provide a
              platform for growth, empowerment, and community.
            </p>

            <p className="learn" onClick={navRider}>
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
