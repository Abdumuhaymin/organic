import React from "react";
import { Button } from "../ui/button";
import bg from "../../assets/img/subscribe.png";

export const Subscribe = () => {
  return (
    <div className="w-[100%] relative pt-[180px] pb-[117px]  py-[105px]  rounded-3xl ">
      <img src={bg} alt="" className="absolute z-[-1]" />
      <div className="px-[70px] pt-[109px] flex justify-between">
        <div>
          <h2 className="text-5xl text-white font-extrabold w-[357px]">
            Subscribe to our Newsletter
          </h2>
        </div>
        <form className="flex items-center gap-3">
          <input
            className="pl-[23px] py-[28px] w-[349px] outline-none rounded-2xl"
            placeholder="Your Email Address"
            type="email"
          />
          <Button variant={"input"}>Subscribe</Button>
        </form>
      </div>
    </div>
  );
};
