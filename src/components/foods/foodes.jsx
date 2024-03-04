import React from "react";

export const Foods = ({ name, img, id }) => {
  return (
    <div className="relative">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h3 className="top-[45%] left-[25%] absolute bg-white rounded-xl px-[83px] py-[33px] text-2xl font-semibold text-primary">
          {name}
        </h3>
      </div>
    </div>
  );
};
