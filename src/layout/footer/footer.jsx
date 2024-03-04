import React from "react";
import { Logo } from "../../assets/icons/logo.jsx";
import { Footer1 } from "../../assets/icons/footer1.jsx";
import { Footer2 } from "../../assets/icons/footer2.jsx";
import { Footer3 } from "../../assets/icons/footer3.jsx";
import { Footer4 } from "../../assets/icons/footer4.jsx";

export const Footer = () => {
  return (
    <div>
      <div className="py-[117px] w-[100%] px-[20px] flex justify-between border-b-10">
        <div className="text-end">
          <h2 className="text-3xl font-bold text-primary mb-[32px]">
            Contact Us
          </h2>
          <ul>
            <li className="mb-[30px]">
              <p className="font-bold text-text_green">Email</p>
              <p className="font-medium text-text_green">
                needhelp@Organia.com
              </p>
            </li>
            <li className="mb-[30px]">
              <p className="font-bold text-text_green">Phone</p>
              <p className="font-medium text-text_green">666 888 888</p>
            </li>
            <li className="mb-[30px]">
              <p className="font-bold text-text_green">Address</p>
              <p className="font-medium text-text_green">
                88 road, borklyn street, USA
              </p>
            </li>
          </ul>
        </div>
        <div className="text-center w-[843px] border-x-2">
          <div className="mx-auto w-[543px]">
            <div className="flex justify-center mb-[26px]">
              <Logo />
            </div>
            <p className="text-base text-text_green mb-[49px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <ul className="flex justify-center gap-[15px]">
              <li>
                <a href="/">
                  <Footer1 />
                </a>
              </li>
              <li>
                <a href="/">
                  <Footer2 />
                </a>
              </li>
              <li>
                <a href="/">
                  <Footer3 />
                </a>
              </li>
              <li>
                <a href="/">
                  <Footer4 />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-primary font-extrabold text-3xl mb-[30px]">
            Utility Pages
          </h2>
          <ul>
            <li className="mb-[15px]">
              <a
                className="text-text_green hover:text-black text-base"
                href="/"
              >
                Style Guide
              </a>
            </li>
            <li className="mb-[10px]">
              <a
                className="text-text_green hover:text-black text-base"
                href="/"
              >
                404 Not Found
              </a>
            </li>
            <li className="mb-[15px]">
              <a
                className="text-text_green hover:text-black text-base"
                href="/"
              >
                Password Protected
              </a>
            </li>
            <li className="mb-[15px]">
              <a
                className="text-text_green hover:text-black text-base"
                href="/"
              >
                Licences
              </a>
            </li>
            <li className="mb-[15px]">
              <a
                className="text-text_green hover:text-black text-base"
                href="/"
              >
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="w-[700px] mx-auto py-[20px] text-text_green text-center">
        Copyright © Organick | Designed by VictorFlow Templates - Powered by
        Webflow{" "}
      </p>
    </div>
  );
};
