import React from "react";
import Article from "./Article";
import Currency2 from "../assets/image-currency2.jpg";
import Restaurant from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="bg-VeryLightGray">
      <div className="mx-auto container px-3 flex flex-col">
        <div className="py-10">
          <h1 className="text-4xl text-DarkBlue">Latest Articles</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 ">
          <div
            id="A1"
            className="hover:scale-105 ease-in-out duration-300 cursor-pointer"
          >
            <Article
              img={Currency2}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              desc="The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single ..."
            />
          </div>
          <div className="hover:scale-105 ease-in-out duration-300 cursor-pointer">
            <Article
              img={Restaurant}
              author="By Wilson Hutton"
              title="Treat yourself without worrying about money"
              desc="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
            />
          </div>
          <div className="hover:scale-105 ease-in-out duration-300 cursor-pointer">
            <Article
              img={Plane}
              author="By wilson Hutton"
              title="Take your Easybank card wherever you go"
              desc="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
            />
          </div>
          <div className="hover:scale-105 ease-in-out duration-300 cursor-pointer">
            <Article
              img={Confetti}
              author="By Claire Robinson"
              title="Our invite-only Beta accounts are now live!"
              desc="After a lot of hard work by the whole team. We're excited to launch our closed beta. It's easy to request an invite through the site ..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
