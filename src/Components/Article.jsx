import React from "react";

const Article = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-xl mb-10">
      <div className="flex flex-col">
        <div>
          <img src={props.img} className="overflow-hidden rounded-t-lg" />
        </div>
        <div className="flex flex-col py-5 px-5">
          <span className="py-3 text-sm text-GrayishBlue">{props.author}</span>
          <h1 className="pb-4 text-lg text-DarkBlue font-semibold w-[80%] cursor-pointer hover:text-LimeGreen ease-in-out duration-300">
            {props.title}
          </h1>
          <p className="text-GrayishBlue">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
