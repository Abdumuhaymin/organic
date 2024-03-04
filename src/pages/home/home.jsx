import React from "react";
import { Banner } from "../../components/banner/banner";
import { categoryData } from "../../data/data";
import { Category } from "../../components/category";
import { About1 } from "../../assets/icons/about1";
import { About2 } from "../../assets/icons/about2";
import aboutBG from "../../assets/img/about.png";
import { Button } from "../../components/ui/button";
import { RightArrow } from "../../assets/icons/right";
import { Product } from "../../components/product";
import { productData } from "../../data/data";
import { Link } from "react-router-dom";
import customer_bg from "../../assets/img/customer_bg.png";
import customer from "../../assets/img/customer.jpg";
import rating from "../../assets/icons/rating.svg";
import { customerData } from "../../data/data";
import { Customer } from "../../components/customer";
import { offerData } from "../../data/data";
import eco_bg from "../../assets/img/eco_bg.png";
import { foodsData } from "../../data/data";
import { Foods } from "../../components/foods";
import { newsData } from "../../data/data";
import { News } from "../../components/news";
import { Subscribe } from "../../components/subscribe";
export const Home = () => {
  return (
    <>
      <Banner />
      <section>
        <div className="w-[100%] px-[20px] pb-[200px]">
          <div className="grid grid-cols-2  gap-10">
            {categoryData.map((item) => (
              <div key={item.id}>
                <Category img={item.img} name={item.name} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-about_bg pb-[199px] pt-[186px]">
        <div className="bg-inherit">
          <div className="container flex items-center justify-between">
            <div>
              <img src={aboutBG} alt="img" />
            </div>
            <div className="w-[702px] ">
              <p className="font-font1 text-4xl text-Padua mb-4"> About Us</p>
              <h2 className="text-5xl font-extrabold text-Arapawa mb-5">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="text-base text-CityRain mb-[48px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <ul>
                <li className="flex items-center gap-2">
                  <div>
                    <About1 />
                  </div>
                  <div className="w-[404px] mb-[48px]">
                    <h3 className="font-extrabold text-2xl text-Arapawa mb-2">
                      Organic Foods Only
                    </h3>
                    <p className="text-base  text-CityRain ">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div>
                    <About2 />
                  </div>
                  <div className="w-[404px] mb-[48px]">
                    <h3 className="font-extrabold text-2xl text-Arapawa mb-2">
                      Quality Standards
                    </h3>
                    <p className="text-base  text-CityRain">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </li>
              </ul>
              <Button variant={"about"} icon2={<RightArrow />}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[100%] px-[20px] pt-[100px] pb-[200px]">
          <div className="w-[312px] mx-auto text-center">
            <p className="font-font1 mb-[8px] text-4xl text-Padua ">
              Categories
            </p>
            <h2 className="mb-[40px] text-Arapawa text-5xl font-extrabold">
              Our Products
            </h2>
          </div>
          <ul className="mb-[148px] grid grid-cols-4 gap-5 justify-between">
            {productData.map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <Product {...item} />
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <Button icon2={<RightArrow />} variant={"about"}>
              Load More
            </Button>
          </div>
        </div>
      </section>
      <section className="  w-[100%] ">
        <img className="absolute z-[-1]" src={customer_bg} alt="" />
        {/* <div className="absolute h-[1267px] z-[-1] pb-[164px]">
        </div> */}
        <div className=" w-[100%] px-[20px] text-center pb-[74px]  pt-[74px]">
          <p className="font-font1 text-4xl text-Padua mb-3">Testimonial</p>
          <h2 className="text-5xl font-extrabold text-Arapawa mb-[51px]">
            What Our Customer Saying?
          </h2>
          <div className="w-[780px] mx-auto mb-[128px]">
            <div className="flex justify-center flex-col mx-auto w-[125px] mb-[25px]">
              <img className="block rounded-[50%]" src={customer} alt="img" />
              <img className="block" src={rating} alt="icon" />
            </div>
            <p className="text-lg text-CityRain mb-[20px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h3 className="text-Arapawa font-semibold text-2xl">
              ABDUMUHAYMIN
            </h3>
            <p className="text-sm text-CityRain opacity-90">Consumer</p>
          </div>
          <hr className="w-[1000px] mx-auto mb-[102px]" />
          <ul className="w-[1030px] mx-auto flex justify-between">
            {customerData.map((item) => (
              <li key={item.id}>
                <Customer {...item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="bg-Arapawa ">
          <div className="w-[100%] px-[20px]  py-[200px]  ">
            <p className="text-4xl font-font1 text-Padua mb-4">Offer</p>
            <div className="flex justify-between items-center pb-[50px]">
              <h2 className="text-5xl font-extrabold text-white">
                We Offer Organic For You
              </h2>
              <Button icon2={<RightArrow />} variant={"hero"}>
                View All Product
              </Button>
            </div>

            <ul className="mb-[148px] grid grid-cols-4 gap-5 justify-between">
              {offerData.map((item) => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex">
          <img className="w-[851px] h-[951px]" src={eco_bg} alt="img" />
          <div className="w-[100%] px-[20px] ">
            <div className="absolute left-[790px] mt-[140px] w-[522px]   py-[78px] px-[70px] pr-[0] rounded-3xl bg-white">
              <p className="font-font1 text-4xl text-Padua mb-4">
                Eco Friendly
              </p>
              <h2 className="text-Arapawa font-extrabold text-5xl mb-[35px]">
                Econis is a Friendly Organic Store
              </h2>
              <ul>
                <li className="mb-[35px]">
                  <h3 className="text-2xl text-Arapawa font-medium">
                    Start with Our Company First
                  </h3>
                  <p className="text-base text-Padua">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </li>
                <li className="mb-[35px]">
                  <h3 className="text-2xl text-Arapawa font-medium">
                    Learn How to Grow Yourself
                  </h3>
                  <p className="text-base text-Padua">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </li>
                <li className="mb-[35px]">
                  <h3 className="text-2xl text-Arapawa font-medium">
                    Farming Strategies of Today
                  </h3>
                  <p className="text-base text-Padua">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[187px] bg-about_bg">
          <ul className="flex mx-auto gap-6 w-[100%px]">
            {foodsData.map((item) => (
              <li key={item.id}>
                <Foods {...item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>
          <div className="w-[100%] px-[20px] py-[177px]">
            <p className="text-4xl font-font1 text-Padua mb-4">News</p>
            <div className="flex justify-between items-center pb-[45px]">
              <h2 className="text-5xl font-extrabold text-Arapawa w-[700px]">
                Discover weekly content about organic food, & more
              </h2>
              <Button icon2={<RightArrow />} variant={"news"}>
                More News
              </Button>
            </div>
            <ul className="flex justify-between ">
              {newsData.map((item) => (
                <li key={item.id}>
                  <News {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Subscribe />
      </section>
    </>
  );
};
