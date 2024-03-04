import React from "react";
import { CartIcon } from "../../../../assets/icons/cart-icon";

export const Cart = ({ count }) => {
  if (count === undefined) {
    count = 0;
  } else {
    count = count;
  }
  return (
    <div className="border-[1px] border-ChristmasSilver  flex items-center justify-between rounded-[33px] p-cart gap-[12px]">
      <button className="p-cartBtn bg-Arapawa text-white rounded-[50%]">
        <CartIcon />
      </button>
      <p className="font-semibold text-Arapawa text-l">Cart ({count})</p>
    </div>
  );
};
