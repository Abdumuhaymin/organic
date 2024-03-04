import React from "react";
import { Button } from "../ui/button";
import { RightArrow } from "../../assets/icons/right";

export const News = ({ id, icon, name, author, text, img }) => {
  return (
    <div className="relative">
      <img className="rounded-3xl" src={img} alt="" />
      <div className="absolute top-[300px] bg-white w-[500px] rounded-3xl p-[50px] pr-[10px] left-[12%]">
        <div className="flex items-center gap-3 mb-[15px]">
          <img src={icon} alt="icon" />
          <p className="text-base text-Arapawa ">{author}</p>
        </div>
        <h3 className="font-extrabold text-Arapawa text-xl">{name}</h3>
        <p className="text-base text-Padua pr-[50px] pb-[30px]">{text}</p>
        <Button icon2={<RightArrow />} variant={"hero"}>
          Read More
        </Button>
      </div>
    </div>
  );
};
