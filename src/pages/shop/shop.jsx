import React from "react";
import bg from "../../assets/img/shopBanner.png";
import { allProductData } from "../../data/data";
import { Product } from "../../components/product";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <>
      <section className="h-[329px] flex flex-col items-center justify-center">
        <img src={bg} alt="" className="absolute z-[-1] object-cover " />
        <div>
          <h2 className="font-extrabold text-6xl text-Arapawa ">Shop</h2>
        </div>
      </section>
      <section className="pt-[90px]">
        <div className="w-[100%] px-[20px] ">
          <ul className="grid grid-cols-4 gap-x-[20px] gap-y-[40px]">
            {allProductData.map((item) => (
              <Link to={`/shop/${item.id}`}>
                <Product {...item} />
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
