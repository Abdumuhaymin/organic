import React from "react";

export const Features = ({ img, title, cab }) => {
  return (
    <div className="rounded-[33px] p-feature w-[257px] h-[335px] text-center bg-white ">
      <img src={img} alt="img" className="mb-[15px] mx-auto" />
      <h3 className="mb-[12px] font-extrabold text-2xl text-Arapawa">
        {title}
      </h3>
      <p className="text-lg text-CityRain ">{cab}</p>
    </div>
  );
};
