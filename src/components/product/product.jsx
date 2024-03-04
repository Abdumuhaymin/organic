import React from "react";

export const Product = ({ name, id, img, rating, type, oldCost, newCost }) => {
  return (
    <div>
      <div className="rounded-2xl w-[335px] bg-about_bg p-[29px]">
        <p className="px-4 bg-Arapawa text-center text-white rounded-md py-1 w-[96px] font-font2 mb-[13px]">
          {type}
        </p>
        <img className="h-[324px]" src={img} alt="product" />
        <div className="w-[279px] mx-auto mt-3">
          <h3 className="text-base font-semibold text-Arapawa mb-3">{name}</h3>
          <hr className="mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-3 ">
              <p className="text-sm font-extrabold text-CityRain  line-through">
                {oldCost}
              </p>
              <p className="text-sm font-extrabold text-Arapawa">{newCost}</p>
            </div>
            <img src={rating} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
