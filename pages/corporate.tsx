import React, { useEffect } from "react";
import Image from "next/image";
import Corporate from "@assets/images/corporate.png";
import { Button } from "antd";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NubisCorp = () => {
  return (
    <div className="corporate-container">
      <div className="max-w-7xl mx-auto flex justify-around items-center py-10">
        <div className="max-w-xl">
          <h3 className="text-4xl font-black mb-3">
            Be a part of the success story called Nubis
          </h3>
          <p className="text-sm">
            Want to be a part of the Nubis Company as a partner? Here is your
            chance to partner with us and earn returns on your investment with
            us.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Button
              size="large"
              className="flex items-center justify-center gap-2"
              type="primary"
            >
              <span>Let's Talk</span>
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </Button>
          </div>
        </div>
        <div className="move">
          <Image className="h-[500px] w-auto" src={Corporate} alt="nubis app" />
        </div>
      </div>
      <section className="partnership-section bg-gray-800 py-20 text-white">
        <div className="section-wrapper max-w-7xl mx-auto">
          <div className="section-head text-center">
            <h3 className="text-4xl font-black mb-3">
              We take our <span>Partnerships </span> seriously
            </h3>
            <p>You can be rest assured that we will make it worth your while</p>
          </div>
          <div className="partner-cards flex flex-wrap max-w-4xl mx-auto gap-6 mt-10">
            <div className="partner-offer-card flex-1 shadow-xl text-black bg-white p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Real time Monitoring</h4>
              <p>
                We offer our partners the feature to monitor their investment in
                Nubis in real time. You can monitor and get updates as they
                happen. Data on rides, location of riders and profits are
                available for you.
              </p>
              <p>We value transparency above all else.</p>
            </div>
            <div className="partner-offer-card flex-1 shadow-xl text-black bg-white p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Returns on Investment</h4>
              <p>
                As a partner, you become an integral part of the Nubis family.
                We share our profits together. Our partners enjoy huge interests
                and returns on their investments. Partner with us today
              </p>
              <p>Partner with us today</p>
            </div>
          </div>
        </div>
      </section>
      <section className="join-section my-20">
        <div className="max-w-7xl grid place-items-center text-center p-20 mx-auto bg-primaryColor text-white shadow-xl shadow-primaryColor/10 border border-solid border-primaryColor/30 rounded-2xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4 ">
              Join Nubis Corporate today!
            </h3>
            <p className="">
              Become a part of the Nubis business today and enjoy huge returns
              on your investments.
            </p>
            <div className="actions mt-6 grid place-items-center">
              <Button
                size="large"
                className="flex items-center justify-center gap-2 bg-white text-primaryColor"
                type="text"
              >
                <span>Let's Talk</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NubisCorp;
