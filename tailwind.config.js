/** @type {import('tailwindcss').Config} */
import bg from "./src/assets/img/customer_bg.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Arapawa: "#274C5B",
        Padua: "#7EB693",
        dr: "#FAFAFA",
        ChristmasSilver: "#E0E0E0",
        funkyYellow: "#EFD372",
        about_bg: "#F9F8F8",
        CityRain: "#525C60",
        Coronation: "#ECECEC",
        FortressGrey: "#B8B8B8",
        sugar: "#EFF6F1",
      },
      padding: {
        src: "17px 16px 18px 19px",
        in: "21px 164px 21px 30px",
        cartBtn: "17px 17px 17px 15px",
        cart: "5px 23px 5px 6px",
        mainB: "247px 0",
        feature: "50px 38px 19px 35px",
        offer: "188px 260px",
      },
      fonts: {
        cartCount: {
          fontSize: "18px",
          lineHeight: "21px",
          fontWeight: "600",
        },
      },
      fontFamily: {
        font1: ["Yellowtail"],
      },
      width: {
        with: "100%",
      },
    },
  },
  plugins: [],
};
