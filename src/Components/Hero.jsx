import React from "react";
import Hero2 from "../assets/Heroimg.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-VeryLightGray">
      <div className="mx-auto container pb-20 px-3 flex flex-col-reverse lg:flex lg:flex-row justify-between ">
        <div className="flex flex-col mt-[10rem] items-center lg:items-start md:mt-[40rem] lg:mt-20">
          <h1 className="text-DarkBlue font-semibold text-center text-4xl lg:text-left md:text-4xl lg:text-6xl lg:w-[80%]">
            Next Generation Digital Banking
          </h1>
          <p className="py-5 px-2 text-base text-center text-GrayishBlue sm:text-xl lg:text-left lg:w-[70%]">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
        <div id="hero">
          <img src={Hero2} className="w-[100%] lg:w-[80%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
