import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <header className="flex flex-row justify-between align-middle px-4 bg-black h-24 w-full ">
        <div className="flex flex-row justify-between w-full">
          <div>
            <Image className="logo" src={Logo} alt="Nubis logo" />
          </div>
          <div className="md:flex flex-row justify-around">
            <ul className="md:flex flex-row justify-around align-middle text-white hidden ">
              {links.map((link) => (
                <Link
                  className="capitalize"
                  key={link}
                  to={"/" + link.replace(" ", "-")}
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* <button className="my-4 hidden md:block thebtn">Get The App</button> */}
            <div>
              <IoMenu
                size={40}
                color="#fff"
                className="flex my-4 md:hidden"
                onClick={toggleNav}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

const links = ["about us", "our services", "faqs", "contact us"];
