import React from "react";
import { Button } from "antd";
import Image from "next/image";
import NubisIndividual from "@assets/images/MaskGroup.png";
import Corporate from "@assets/images/CorporateW.png";
import Rider from "@assets/images/RiderMan.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home-page">
      <div className="max-w-7xl mx-auto py-20">
        <div className="max-w-xl">
          <h3 className="text-4xl mb-3">
            More than logistics, we deliver experiences.
          </h3>
          <p className="text-sm">
            Whether you're a dedicated rider seeking a rewarding career, a
            business partner looking to grow with us, or a valued customer
            expecting top-notch service, we're here to connect, deliver, and
            thrive together.
          </p>
          <div className="mt-4">
            <Button
              type="primary"
              size="large"
              className="shadow-xl shadow-primaryColor/10"
            >
              Explore Nubis
            </Button>
          </div>
        </div>

        <div className="phone">
          {/* <img className="Himg " src={Himg} alt="Delivery service image" /> */}
        </div>
      </div>
      <div className="OurServices">
        {/* <h3 className="texts text-center">Our Services</h3> */}
        <div className="services grid grid-cols-2">
          <div className="serviceCard col-span-1 row-span-2 relative overflow-hidden border-y-[16px] [&:hover_.image]:scale-150  border-8 border-gray-800 border-solid">
            <Image
              className="image h-full w-full object-cover brightness-75 transition-all"
              src={NubisIndividual}
              alt="Someone receiving a package."
            />
            <div className="absolute bottom-10 w-3/4 left-1/2 -translate-x-1/2 rounded-xl bg-black/40 text-white p-10">
              <h3 className="text-3xl mb-3">Nubis Individual</h3>
              <p className="text-gray-100 leading-7">
                From swift deliveries to transparent communication, we're
                dedicated to making every interaction with us a delightful one.
                Your satisfaction drives our commitment to excellence.
              </p>

              <Button
                size="large"
                className="mt-6 flex items-center justify-center gap-2"
                type="primary"
              >
                <span>EXPLORE MORE</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
              </Button>
            </div>
          </div>
          <div className="serviceCard col-span-1 relative overflow-hidden [&:hover_.image]:scale-150 border-8 border-t-[16px] border-gray-800 border-solid">
            <Image
              className="image h-full w-full object-cover brightness-75 transition-all"
              src={Corporate}
              alt="A corporate lady with a laptop."
            />
            <div className="absolute bottom-10 w-3/4 left-1/2 -translate-x-1/2 rounded-xl bg-black/40 text-white p-10">
              <h3 className="text-3xl mb-3">Nubis Corporate</h3>
              <p className="text-gray-100 leading-7">
                Benefit from seamless collaboration, cutting-edge technology,
                and unparalleled support. Together, let's redefine the future of
                logistics and unlock new opportunities for growth.
              </p>

              <Button
                size="large"
                className="mt-6 flex items-center justify-center gap-2"
                type="primary"
              >
                <span>EXPLORE MORE</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
              </Button>
            </div>
          </div>
          <div className="serviceCard col-span-1 relative overflow-hidden [&:hover_.image]:scale-150 border-8 border-b-[16px] border-gray-800 border-solid">
            <Image
              className="image h-full w-full object-cover brightness-75 transition-all"
              src={Rider}
              alt="A dispatch rider on his bike."
            />
            <div className="absolute bottom-10 w-3/4 left-1/2 -translate-x-1/2 rounded-xl bg-black/40 text-white p-10">
              <h3 className="text-3xl mb-3">Nubis Rider</h3>
              <p className="text-gray-100 leading-7">
                Join our team of dedicated riders who play a pivotal role in our
                success story. we offer more than just a job – we provide a
                platform for growth, empowerment, and community.
              </p>

              <Button
                size="large"
                className="mt-6 flex items-center justify-center gap-2"
                type="primary"
              >
                <span>EXPLORE MORE</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
