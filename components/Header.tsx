import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Affix, Button } from "antd";
import AppStore from "@assets/images/App-store.svg";
import PlayStore from "@assets/images/Play-store.svg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Affix className="text-base" offsetTop={0}>
      <div className="top-banner bg-white p-2">
        <div className="wrapper max-w-7xl mx-auto flex justify-center gap-10 items-center">
          <div className="text-sm">
            The Nubis app is available on the Google Play and App Stores
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="w-28 h-auto shadow-2xl"
              src={AppStore}
              alt="App Store logo"
            />
            <Image
              className="w-28 h-auto"
              src={PlayStore}
              alt="Play Store logo"
            />
          </div>
        </div>
      </div>
      <header className=" bg-gray-800 text-white px-4">
        <div className="flex items-center justify-between h-14 max-w-7xl mx-auto">
          <Link href={"/"}>
            <Image className="logo" src={Logo} alt="Nubis logo" />
          </Link>
          <nav className="md:flex flex-row justify-around h-full">
            <ul className="flex gap-4">
              {links.map((link) => (
                <Link
                  className={
                    "capitalize text-sm font-light grid place-items-center px-4 hover:text-yellow-600" +
                    (router.pathname.includes(link.toLowerCase())
                      ? " bg-white text-primaryColor font-bold"
                      : "")
                  }
                  key={link}
                  href={"/" + link.replace(" ", "-").toLowerCase()}
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* <button className="my-4 hidden md:block thebtn">Get The App</button> */}
          </nav>

          <div className="actions">
            <Button type="primary">Try Nubis Go</Button>
            <div>
              <IoMenu
                size={40}
                color="#fff"
                className="flex my-4 md:hidden"
                // onClick={toggleNav}
              />
            </div>
          </div>
        </div>
      </header>
    </Affix>
  );
};

export default Header;

const links = ["Individual", "Rider", "Corporate", "Support"];
