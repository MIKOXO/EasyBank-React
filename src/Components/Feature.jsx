import React from "react";
import Features from "./Features";
import Online from "../assets/icon-online.svg";
import Budgeting from "../assets/icon-budgeting.svg";
import Onboarding from "../assets/icon-onboarding.svg";
import Api from "../assets/icon-api.svg";

const Feature = () => {
  return (
    <section className="bg-LightGrayishBlue">
      <div className="mx-auto container px-3 py-8 flex flex-col">
        <div className="my-14">
          <h1 className="text-4xl text-DarkBlue py-2 text-center lg:text-left">
            Why choose Easybank?
          </h1>
          <p className="px-3 py-2 text-lg text-GrayishBlue text-center lg:w-[40%] lg:px-0 lg:text-left">
            We leverage Open banking to turn your bank into your financial hub.
            Control your finances like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:space-x-6 md:grid-cols-2 lg:grid-cols-4">
          <Features
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world"
            img={Online}
          />
          <Features
            title="Simple Budgeting"
            description="See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits."
            img={Budgeting}
          />
          <Features
            title="Fast Onboarding"
            description="We don't do branches. Open your account in minutes online andstart taking control of your finances right away."
            img={Onboarding}
          />
          <Features
            title="Open API"
            description="Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier."
            img={Api}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
