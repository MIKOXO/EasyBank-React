import React from "react";
import Logo from "../assets/logo.svg";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import Button from "./Button";
import { FooterLinks1 } from "../Constants/Data";
import { FooterLinks2 } from "../Constants/Data";

const Footer = () => {
  return (
    <section className=" bg-DarkBlue py-14">
      <div className="mx-auto container px-3 flex flex-col justify-between items-center md:flex md:flex-row">
        <div className="flex flex-col">
          <div>
            <img src={Logo} />
          </div>
          <div className="flex flex-row mt-6 text-white text-xl space-x-3 cursor-pointer ">
            <FaFacebook className="hover:text-LimeGreen hover:scale-110 ease-in-out duration-300" />
            <FaYoutube className="hover:text-LimeGreen hover:scale-110 ease-in-out duration-300" />
            <FaTwitter className="hover:text-LimeGreen hover:scale-110 ease-in-out duration-300" />
            <FaPinterest className="hover:text-LimeGreen hover:scale-110 ease-in-out duration-300" />
            <FaInstagram className="hover:text-LimeGreen hover:scale-110 ease-in-out duration-300" />
          </div>
        </div>

        <div className="my-5 grid gap-5 grid-cols-1 md:grid md:grid-cols-2 lg:mr-32 md:my-0">
          <div>
            <ul className="space-y-2 text-center md:text-left">
              {FooterLinks1.map((foot) => (
                <li key={foot.id}>
                  <a
                    className="text-White hover:text-LimeGreen ease-in-out duration-300 "
                    href={foot.id}
                  >
                    {foot.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-center md:text-left">
              {FooterLinks2.map((foot) => (
                <li key={foot.id}>
                  <a
                    className="text-White hover:text-LimeGreen ease-in-out duration-300"
                    href={foot.id}
                  >
                    {foot.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="items-center flex flex-col">
          <Button />
          <p className="mt-5 text-GrayishBlue">
            &#169; EasyBank. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
