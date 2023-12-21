import React from "react";
import AppStore from "@assets/images/App-store.svg";
import PlayStore from "@assets/images/Play-store.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faCreditCard,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import download from "@assets/images/Download.png";
import profile from "@assets/images/Profile.png";
import bike from "@assets/images/bike.png";
import home from "@assets/images/Home.png";
import NubisApp from "@assets/images/nubis-app.png";

import Food from "@assets/images/Food.png";
import Store from "@assets/images/Store.png";
import Move from "@assets/images/Move.png";
import Go from "@assets/images/Travel.png";
import HandApp from "@assets/images/nubis-hand-app.png";
import QrCode from "@assets/images/nubis-qrcode.png";
import { Bounce, Fade, Reveal, Slide } from "react-awesome-reveal";

const NubisIndividual = () => {
  return (
    <div className="nubis-individual">
      <div className="max-w-7xl mx-auto flex justify-around items-center py-20">
        <div className="max-w-xl">
          <h3 className="text-4xl mb-3">
            <Slide direction="up" triggerOnce>
              <Fade triggerOnce>
                Nubis Individual, Your personalized delivery service.
              </Fade>
            </Slide>
          </h3>
          <Slide triggerOnce direction="up">
            <Fade triggerOnce>
              <p className="text-sm">
                Nubis is your go-to destination for swift, secure deliveries and
                a modern shopping experience. Your world, your choices — we
                bring it all to you, effortlessly.
              </p>
            </Fade>
          </Slide>
          <Slide direction="up" triggerOnce>
            <Fade triggerOnce>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  className="w-28 h-auto shadow-2xl"
                  src={AppStore}
                  alt="App Store logo"
                />
                <Image
                  className="w-28 h-auto shadow-2xl"
                  src={PlayStore}
                  alt="Play Store logo"
                />
              </div>
            </Fade>
          </Slide>
        </div>
        <div className="move">
          <Bounce triggerOnce>
            <Image
              className="h-[500px] w-auto rotate-12"
              src={NubisApp}
              alt="nubis app"
            />
          </Bounce>
        </div>
      </div>
      <section className="nubisServices">
        <div className="section-wrapper">
          <div className="section-header text-center mb-6">
            <h3 className="text-2xl sm:text-4xl font-black">
              Our <span className="text-primaryColor">Services </span> to you
            </h3>
            <p>These are the services we render for you at Nubis.</p>
          </div>
          <div className="servicesImages grid grid-cols-3">
            <div className="move col-span-1 relative row-span-2 overflow-hidden border-y-[16px]  border-8 border-gray-800 border-solid">
              <Image
                src={Move}
                className="w-full h-[110%] object-cover object-center hover:scale-150 transition-all"
                alt="nubis move"
              />
              <div className="title text-white font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Nubis Move
              </div>
            </div>
            <div className="food col-span-1 relative overflow-hidden border-t-[16px]  border-8 border-gray-800 border-solid">
              <Image
                src={Food}
                className="w-full h-[110%] object-cover object-center hover:scale-150 transition-all"
                alt="nubis food"
              />
              <div className="title text-white font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Nubis Food
              </div>
            </div>
            <div className="store col-span-1 relative overflow-hidden border-t-[16px] border-r-[16px]  border-8 border-gray-800 border-solid">
              <Image
                src={Store}
                className="w-full h-[110%] object-cover object-center hover:scale-150 transition-all"
                alt="nubis store"
              />
              <div className="title text-white font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Nubis Store
              </div>
            </div>
            <div className="go col-span-2 relative overflow-hidden border-b-[16px] border-r-[16px]  border-8 border-gray-800 border-solid">
              <Image
                src={Go}
                className="h-full w-[110%] object-cover object-center hover:scale-150 transition-all"
                alt="nubis go"
              />
              <div className="title text-white font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Nubis Go
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits my-20">
        <div className="max-w-7xl mx-auto">
          <div className="benefits-header text-center mb-6">
            <h3 className="text-4xl font-black mb-2">
              The <span>Nubis </span> Benefits
            </h3>
            <p>Here are the features that will endear us to you.</p>
          </div>
          <div className="features flex flex-wrap gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white flex-1 shadow-xl min-w-[300px] shadow-primaryColor/10 rounded-xl p-6 border border-solid border-primaryColor/20"
              >
                <div className="wrap flex items-center gap-3">
                  <div className="bg-primaryColor p-2 rounded-lg shadow-lg">
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      fontSize={24}
                      className="featureIcon text-white"
                    />
                  </div>
                  <h4 className="text-xl font-extrabold text-primaryColor">
                    {benefit.title}
                  </h4>
                </div>
                <div className="featureText mt-4">
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="steps bg-primaryColor text-gray-100 py-20">
        <div className="section-wrapper max-w-7xl mx-auto">
          <div className="steps-header mb-10 text-center">
            <h3 className="nubisServicesHead font-black 2xl sm:text-4xl mb-2">
              <span>Steps </span> to Using Nubis
            </h3>
            <p>Here are the features that will endear us to you.</p>
          </div>
          <div className="steps flex gap-16 justify-center flex-wrap">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step relative w-max grid place-items-center border border-dashed border-white p-4 rounded-lg"
              >
                <div className="number absolute top-2 right-2 bg-white text-primaryColor font-bold h-8 w-8 rounded-full grid place-items-center">
                  {index + 1}
                </div>
                <div className="step-image">
                  <Image src={step.image} alt={step.title} />
                </div>
                <p>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="app-download relative  my-10 px-4">
        <div className="wrap max-w-6xl mx-auto flex flex-wrap justify-around items-center py-36">
          <Bounce>
            <Image src={HandApp} alt="hand-app" className="max-w-full h-auto" />
          </Bounce>
          <div className="content" id="download">
            <div className="wrap mb-6 max-w-xl text-center lg:text-left">
              <div className="font-extrabold text-2xl sm:text-4xl mb-1 sm:leading-[46px]">
                Download <span className="text-primaryColor">Nubis</span> mobile
              </div>
              <p className="text-gray-600">
                Download the Nubis app now and enjoy premium delivery services
                and more.
              </p>
            </div>
            <div className="flex items-center gap-8 flex-wrap justify-center lg:justify-start">
              <Fade>
                <Image className="w-40 h-auto" src={QrCode} alt="hellome" />
              </Fade>
              <div className="wrap flex flex-col gap-4">
                <Fade damping={1}>
                  <Image src={PlayStore} alt="hellome play store" />
                  <Image src={AppStore} alt="hellome apple store" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="join">
        <div className="BlueJoin">
          <div className="BlueJointexts ">
            <h3 className="BlueJoinHeadTexts">Join Nubis now!</h3>
            <p className="joinptext ">
              Download the Nubis app now and enjoy premium delivery services and
              more.
            </p>
            <div className="appbuttonss ">
              <Image className="downbtnn" src={AppStore} alt="App Store logo" />
              <Image
                className="downbtnn"
                src={PlayStore}
                alt="Play Store logo"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const steps = [
  {
    image: download,
    title: "Download the app",
  },
  {
    image: profile,
    title: "Set up your profile",
  },
  {
    image: bike,
    title: "make your first order",
  },
  {
    image: home,
    title: "Your package in way",
  },
];

const benefits = [
  {
    icon: faTruckFast,
    description:
      "No more delayed or slow deliveries as we offer fast and reliable delivery trips from the originating location to your preferred locations.",
    title: "Fast Delivery",
  },
  {
    icon: faCreditCard,
    description:
      "Enjoy ease of payment for all our services through the many payment methods and avenues we have provided for you.",
    title: "Ease of Payment",
  },
  {
    icon: faMotorcycle,
    description:
      "You can rest knowing your packages are secured and safe with our riders. You can also track the progress of your packages in real time via our app.",
    title: "Trusted Riders",
  },
];

export default NubisIndividual;
