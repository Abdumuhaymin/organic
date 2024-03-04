import React from "react";
import bannerBg1 from "../../assets/img/banner-bg1.png";

export const SecondaryBanner = () => {
  return (
    <div className="relative text-center h-[329px]">
      <img src={bannerBg1} alt="banner" className="absolute z-[-1]" />
      <h2 className="font-extrabold text-6xl text-Arapawa pt-[119px]">
        About Us
      </h2>
    </div>
  );
};
