import React from "react";
import bannerBg from "../../assets/img/Banner.jpg";
import { Button } from "../ui/button";
import { RightArrow } from "../../assets/icons/right";

export const Banner = () => {
  return (
    <section className=" pb-[391px] ">
      <img className="absolute z-[-1] object-cover " src={bannerBg} alt="" />
      <div className=" translate-y-[200px]  w-[100%] px-[20px]">
        <div>
          <h2 className="font-font1 text-4xl text-Padua mb-[8px]">
            100% Natural Food
          </h2>
          <h1 className="w-[475px]  text-6xl font-extrabold text-Arapawa mb-[23px]">
            Choose the best healthier way of life
          </h1>
          <Button icon2={<RightArrow />} variant={"hero"}>
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};
