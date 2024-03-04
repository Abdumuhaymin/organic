import React from "react";

export const Category = ({ id, name, text, img }) => {
  return (
    <div className="w-[662px] h-[376px]">
      <div>
        <img
          className="w-[662px] h-[367px] object-cover rounded-3xl z-[-1] absolute"
          src={img}
          alt="img"
        />
      </div>
      <div className="pt-[150px] pl-[70px] w-[320px]">
        <p className="font-font1 text-yellowTail_green text-4xl mb-[5px]">
          {text}
        </p>
        <h3 className="text-4xl font-extrabold text-primary">{name}</h3>
      </div>
    </div>
  );
};
