import React from "react";
import { SecondaryBanner } from "../../components/secondary-banner/secondary-banner";
import { About1 } from "../../assets/icons/about1";
import { About2 } from "../../assets/icons/about2";
import aboutBG from "../../assets/img/about.png";
import { Button } from "../../components/ui/button";
import { RightArrow } from "../../assets/icons/right";
import { Circle } from "../../assets/icons/circle";
import whyImg from "../../assets/img/why.png";
import { featureData, offerData, offerData2 } from "../../data/data";
import { Features } from "../../components/cards/features/features";
import { OfferCard } from "../../components/cards/offer/offer";
import { Subscribe } from "../../components/subscribe";

export const About = () => {
  return (
    <>
      <section>
        <SecondaryBanner />
      </section>
      <section className=" pb-[199px] pt-[186px]">
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
      <section className="bg-about_bg pt-[248px] pb-[189px]">
        <div className="w-[100%] px-[20px] flex justify-between items-center mb-[91px]">
          <div>
            <p className="font-font1 text-Padua text-4xl">Why Choose us?</p>
            <h2 className="font-extrabold text-Arapawa text-5xl mb-[25px] w-[569px]">
              We do not buy from the open market & traders.
            </h2>
            <p className="text-lg text-CityRain w-[645px] mb-[36px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="flex items-center gap-1 pl-[27px] pr-[91px] py-[29px] rounded-[49px] bg-Coronation w-[339px] mb-[12px]">
              <Circle />
              <p className="font-medium text-xl text-Arapawa">
                100% Natural Product
              </p>
            </div>
            <p className="text-lg text-CityRain w-[462px] pl-[60px] mb-[24px]">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="flex items-center gap-1 pl-[27px] pr-[91px] py-[29px] rounded-[49px] bg-Coronation w-[339px] mb-[12px]">
              <Circle />
              <p className="font-medium text-xl text-Arapawa">
                {" "}
                Increases resistance
              </p>
            </div>
            <p className="text-lg text-CityRain w-[462px] pl-[60px] mb-[24px]">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div>
            <img src={whyImg} alt="img" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px] w-[100%] px-[20px] mx-auto">
          {featureData.map((item) => (
            <Features
              key={item.id}
              img={item.img}
              title={item.title}
              cab={item.cab}
            />
          ))}
        </div>
      </section>
      <section className="bg-Arapawa p-offer">
        <div className="w-[100%] px-[ 20px] text-center">
          <p className="font-font1 text-4xl mb-[8px] text-Padua">About Us</p>
          <h2 className="mb-[33px] text-5xl text-white font-extrabold">
            What We Offer for You
          </h2>
          <div className="grid grid-cols-4 gap-[24px]">
            {offerData2.map((item) => (
              <OfferCard {...item} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <Subscribe />
      </section>
    </>
  );
};
