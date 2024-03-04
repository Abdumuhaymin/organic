import React from "react";
import { Link, useParams } from "react-router-dom";
import { allProductData, reletedData } from "../../data/data";
import { Button } from "../../components/ui/button";
import { RightArrow } from "../../assets/icons/right";
import bg from "../../assets/img/singleBanner.png";
import { Product } from "../../components/product";
import { Subscribe } from "../../components/subscribe";

export const SingleShop = () => {
  const params = useParams();
  const product = allProductData.find(
    (item) => item.id === Number(params.query)
  );

  return (
    <>
      <img src={bg} alt="" />
      <div className="w-[100%] px-[20px] flex justify-between items-center pt-[133px] mb-[90px] ">
        <div className=" flex flex-row items-center justify-center w-[600px] h-[600px] bg-dr rounded-[30px]  my-auto">
          <img src={product.img} alt="yesa bo'ladigan" />
        </div>
        <div>
          <h2 className="font-semibold text-4xl text-Arapawa mb-[9px]">
            {product.name}
          </h2>
          <img className="mb-[9px]" src={product.rating} alt="" />
          <div className="flex gap-[9px] items-end mb-[27px] ">
            <p className="text-FortressGrey font-semibold text-xl line-through">
              {product.oldCost}
            </p>
            <p className="text-Arapawa text-2xl font-bold">{product.newCost}</p>
          </div>
          <p className="pb-[35px] w-[554px] text-Arapawa text-lg">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex items-center gap-[20px]">
            <p className="text-Arapawa font-bold text-xl ">Quantity : </p>
            <p className="text-Arapawa font-bold text-xl px-[61px] py-[26px]  border-[2px] border-Arapawa rounded-[16px]">
              0
            </p>
            <Button icon2={<RightArrow />} variant={"about"}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px] mb-[27px]">
        <h2 className="px-[57px] font-bold text-2xl text-white cursor-pointer bg-Arapawa py-[23px] inline-block rounded-[16px]">
          Product Description
        </h2>
        <h2 className="px-[57px] font-bold text-2xl text-Arapawa cursor-pointer bg-sugar py-[23px] inline-block rounded-[16px]">
          Product Description
        </h2>
      </div>
      <div className="w-[1137px] px-[20px] text-center mx-auto">
        <p className="pb-[35px]  text-Arapawa text-lg ">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className="w-[100%] px-[20px] pt-[140px] text-center">
        <h2 className="font-extrabold text-5xl mb-[40px] text-Arapawa ">
          Related Products
        </h2>
        <div className="grid grid-cols-4">
          {reletedData.map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <Product {...item} />
            </Link>
          ))}
        </div>
      </div>
      <Subscribe />
    </>
  );
};
