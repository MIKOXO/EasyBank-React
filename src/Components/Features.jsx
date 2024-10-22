import React from "react";

const Features = (props) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <img src={props.img} className="w-[25%] lg:pb-6" />
      <h1 className="py-3 text-2xl text-DarkBlue lg:pb-6">{props.title}</h1>
      <p className="pb-4 px-4 text-lg text-GrayishBlue text-center lg:w-[90%] lg:px-0 lg:text-left">
        {props.description}
      </p>
    </div>
  );
};

export default Features;
