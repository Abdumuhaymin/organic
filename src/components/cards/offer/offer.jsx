import React from "react";

export const OfferCard = ({ img, title }) => {
  return (
    <div className="text-center ">
      <div className="bg-white mb-[24px] rounded-[1.875rem] overflow-hidden">
        <img src={img} alt="" />
      </div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
    </div>
  );
};
