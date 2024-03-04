import React from "react";
import clsx from "clsx";
export const Button = ({
  type,
  variant,
  children,
  onClick,
  icon1: startIcon,
  icon2: endIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("rounded-[16px] py-[25px] px-[39px]", {
        "text-primary rounded-[16px] text-xl font-bold py-[25px] px-[39px] bg-funkyYellow flex items-center gap-3 hover:text-white hover:bg-Arapawa hover:border-Arapawa":
          variant == "hero",
        "bg-Arapawa text-white font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-Arapawa border hover:border-1 hover:border-Arapawa ":
          variant == "about",
        "flex gap-3 items-center py-[25px] px-[45px] border-[2px] border-primary hover:bg-Arapawa hover:text-white text-xl font-semibold":
          variant == "news",
        "bg-Arapawa px-[47px] text-white text-xl font-bold": variant == "input",
      })}
    >
      {startIcon ? startIcon : ""}
      <span>{children}</span>
      {endIcon ? endIcon : ""}
    </button>
  );
};
