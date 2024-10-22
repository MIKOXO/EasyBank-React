import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { NavbarLinks } from "../Constants/Data";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-White w-full shadow-lg sticky top-0">
      <div className="mx-auto container px-3 py-4 flex flex-row justify-between items-center w-full">
        <div>
          <img src={Logo} className="lg:h-7" />
        </div>
        <div>
          <ul className="hidden md:flex md:flex-row">
            {NavbarLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  className=" text-GrayishBlue pb-7 hover:text-DarkBlue hover:border-b-[6px] hover:border-LimeGreen md:mx-3 lg:mx-7 md:text-sm lg:text-lg"
                  href={nav.id}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button />
        </div>

        <div className="flex md:hidden">
          <button onClick={() => setToggle(!toggle)} className="text-xl">
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-White mx-auto text-center items-center justify-center py-7 h-auto w-[70%] top-20 right-14 absolute shadow-xl rounded-lg`}
          >
            <ul className="flex flex-col space-y-2 relative md:hidden">
              {NavbarLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    className="mx-7 text-DarkBlue text-lg pb-7 hover:text-LimeGreen"
                    href={nav.id}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
