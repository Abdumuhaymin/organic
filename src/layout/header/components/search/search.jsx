import React from "react";
import { Src } from "../../../../assets/icons/src";
export const Search = () => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="iput"
        className="outline-none  bg-dr p-in rounded-[36px]"
      />
      <button className="text-white p-src translate-x-[-63px] bg-Padua rounded-[50%] translate-y-[3px]">
        <Src />
      </button>
    </div>
  );
};
