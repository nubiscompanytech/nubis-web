import React from "react";
import logo from "@assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "antd";
import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Footer = () => {
  const socialMediaLink =
    "https://instagram.com/nubis_logistics?igshid=YTQwZjQ0NmI0OA==";
  const router = useRouter();

  return (
    <footer className="footer mt-20">
      <div className="footer-wrapper max-w-7xl mx-auto">
        <div className="main">
          <div className="links flex flex-wrap gap-10 justify-between">
            <ul className="list-none flex flex-col gap-2 text-sm">
              {[
                "about us",
                "support",
                "FAQs",
                "terms of use",
                "privacy policy",
              ].map((link) => (
                <li key={link}>
                  <Link
                    className={
                      "capitalize hover:text-primaryColor" +
                      (router.pathname.includes(link.replaceAll(" ", "-"))
                        ? " text-primaryColor font-bold text-lg"
                        : "")
                    }
                    href={"/" + link.replaceAll(" ", "-")}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="list-none flex flex-col gap-2 text-sm">
              <li>
                <Link href="/Terms">Nubis Move</Link>
              </li>
              <li>
                <Link href="/Terms">Nubis Food</Link>
              </li>
              <li>
                <Link href="/Terms">Nubis Shop</Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy">Nubis Go</Link>
              </li>
            </ul>
            <ul className="list-none flex flex-col gap-2 text-sm">
              <li>
                <Link href="/Terms">Nubis Individual</Link>
              </li>
              <li>
                <Link href="/Terms">Nubis Corporate</Link>
              </li>
              <li>
                <Link href="/Terms">Nubis Rider</Link>
              </li>
            </ul>
            <div className="contact text-primaryColor">
              <a href="mailto:corporateservices@nubisng.com" className="mb-3">
                <FontAwesomeIcon icon={faMailForward} className="mr-2" />
                <span>corporateservices@nubisng.com</span>
              </a>
              <a href="tel:+2349064163807">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+2349064163807</span>
              </a>
            </div>
          </div>
        </div>

        <Divider />
        <div className="flex justify-between items-center flex-wrap gap-10 py-4">
          <div className="social-links">
            <div className="icons flex gap-x-3 items-center">
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.link} target="_blank">
                  <FontAwesomeIcon icon={icon.icon} className="" />
                </a>
              ))}
            </div>
          </div>
          <p className="smallA">
            Copyright © 2023 Nubis Company Limited - All Rights Reserved
          </p>

          <p>Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

const socialIcons = [
  {
    title: "whatsapp",
    link: "https://wa.me/+447917904869",
    icon: faWhatsapp,
  },
  {
    title: "instagram",
    link: "https://instagram.com/roshe_studios?igshid=NTc4MTIwNjQ2YQ==",
    icon: faInstagram,
  },
  {
    title: "twitter",
    icon: faTwitter,
    link: "https://twitter.com/roshestudi18670",
  },
  {
    title: "facebook",
    icon: faFacebook,
    link: "https://youtube.com/@roshestudios?si=1hWhiSQoU_6yXNEA",
  },
];

export default Footer;
