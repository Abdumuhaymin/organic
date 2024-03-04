import { nanoid } from "nanoid";
import ct1 from "../assets/img/ct1.png";
import ct2 from "../assets/img/ct2.png";

import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";
import product5 from "../assets/img/product5.png";
import product6 from "../assets/img/product6.png";
import product7 from "../assets/img/product7.png";
import product8 from "../assets/img/product8.png";
import product9 from "../assets/img/product9.png";
import product10 from "../assets/img/product10.png";
import product11 from "../assets/img/product11.png";
import product12 from "../assets/img/product12.png";
import rating from "../assets/icons/rating.svg";
import offer1 from "../assets/img/offer1.png";
import offer2 from "../assets/img/offer2.png";
import offer3 from "../assets/img/offer3.png";
import offer4 from "../assets/img/offer4.png";
import foods1 from "../assets/img/foods1.png";
import foods2 from "../assets/img/foods2.png";
import foods3 from "../assets/img/foods3.png";
import news1 from "../assets/img/news1.png";
import news2 from "../assets/img/news2.png";
import profile from "../assets/icons/profile.svg";

export const categoryData = [
  {
    id: nanoid(),
    text: "Natural!!",
    name: "Get Garden Fresh Fruits",
    img: ct1,
  },
  {
    id: nanoid(),
    text: "Offer!!",
    name: "Get 10% off on Vegetables",
    img: ct2,
  },
];
export const productData = [
  {
    id: 1,
    img: product1,
    type: "Vegetable",
    name: "Calabrese Broccoli",
    oldCost: "$20.00",
    newCost: "$13.00",
    rating: rating,
  },
  {
    id: 2,
    img: product2,
    type: "Fresh",
    name: "Fresh Banana Fruites",
    oldCost: "$20.00",
    newCost: "$14.00",
    rating: rating,
  },
  {
    id: 3,
    img: product3,
    type: "Millets",
    name: "White Nuts",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 4,
    img: product4,
    type: "Vegetable",
    name: "Vegan Red Tomato",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
  {
    id: 5,
    img: product5,
    type: "Health",
    name: "Mung Bean",
    oldCost: "$20.00",
    newCost: "$11.00",
    rating: rating,
  },
  {
    id: 6,
    img: product6,
    type: "Nuts",
    name: "Brown Hazelnut",
    oldCost: "$20.00",
    newCost: "$12.00",
    rating: rating,
  },
  {
    id: 7,
    img: product7,
    type: "Fresh",
    name: "Eggs",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
  {
    id: 8,
    img: product8,
    type: "Vegetable",
    name: "Zelco Suji Elaichi Rusk",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
];
export const customerData = [
  {
    name: "Organic",
    id: nanoid(),
    rate: "100%",
  },
  {
    name: "Active Product",
    id: nanoid(),
    rate: "285",
  },
  {
    name: "Organic Orchads",
    id: nanoid(),
    rate: "350+  ",
  },
  {
    name: "Years of Farming",
    id: nanoid(),
    rate: "25+",
  },
];
export const offerData = [
  {
    id: nanoid(),
    img: offer1,
    type: "Vegetable",
    name: "Mung Bean",
    oldCost: "$20.00",
    newCost: "$11.00",
    rating: rating,
  },
  {
    id: nanoid(),
    img: offer2,
    type: "Vegetable",
    name: "Brown Hazelnut",
    oldCost: "$20.00",
    newCost: "$12.00",
    rating: rating,
  },
  {
    id: nanoid(),
    img: offer3,
    type: "Vegetable",
    name: "Onion",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
  {
    id: nanoid(),
    img: offer4,
    type: "Vegetable",
    name: "Cabbage",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
];
export const foodsData = [
  {
    id: nanoid(),
    img: foods1,
    name: "Organic Juice",
  },
  {
    id: nanoid(),
    img: foods2,
    name: "Organic Food",
  },
  {
    id: nanoid(),
    img: foods3,
    name: "Nuts Cookis",
  },
];
export const newsData = [
  {
    id: nanoid(),
    icon: profile,
    author: "By Rachi Card",
    name: "The Benefits of Vitamin D & How to Get It",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: news1,
  },
  {
    id: nanoid(),
    icon: profile,
    author: "By Rachi Card",
    name: "Our Favourite Summertime Tommeto",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: news2,
  },
];
import Feature1 from "../assets/icons/feature1.svg";
import Feature2 from "../assets/icons/feature2.svg";
import Feature3 from "../assets/icons/feature3.svg";
import Feature4 from "../assets/icons/feature4.svg";

export const featureData = [
  {
    id: nanoid(),
    img: Feature1,
    title: "Return Policy",
    cab: "Simply dummy text of the printintypesetting industry.",
  },
  {
    id: nanoid(),
    img: Feature2,
    title: "100% Fresh",
    cab: "Simply dummy text of the printintypesetting industry.",
  },
  {
    id: nanoid(),
    img: Feature3,
    title: "Support 24/7",
    cab: "Simply dummy text of the printintypesetting industry.",
  },
  {
    id: nanoid(),
    img: Feature4,
    title: "Secured Payment",
    cab: "Simply dummy text of the printintypesetting industry.",
  },
];
import odam1 from "../assets/img/odam1.png";
import odam2 from "../assets/img/odam2.png";
import odam3 from "../assets/img/odam3.png";
export const teamData = [
  {
    img: odam1,
    name: "Giovani Bacardo",
    profession: "Farmer",
  },
  {
    img: odam2,
    name: "Marianne Loreno",
    profession: "Desiger",
  },
  {
    img: odam3,
    name: "Riga Pelore",
    profession: "Farmer",
  },
];

import offer5 from "../assets/img/offer5.png";
import offer6 from "../assets/img/offer6.png";
import offer7 from "../assets/img/offer7.png";
import offer8 from "../assets/img/offer8.png";
export const offerData2 = [
  {
    id: nanoid(),
    img: offer5,
    title: "Spicy",
  },
  {
    id: nanoid(),
    img: offer6,
    title: "Nuts & Feesd",
  },
  {
    id: nanoid(),
    img: offer7,
    title: "Fruits",
  },
  {
    id: nanoid(),
    img: offer8,
    title: "Vegetable",
  },
];
export const allProductData = [
  {
    id: 1,
    img: product1,
    type: "Vegetable",
    name: "Calabrese Broccoli",
    oldCost: "$20.00",
    newCost: "$13.00",
    rating: rating,
  },
  {
    id: 2,
    img: product2,
    type: "Fresh",
    name: "Fresh Banana Fruites",
    oldCost: "$20.00",
    newCost: "$14.00",
    rating: rating,
  },
  {
    id: 3,
    img: product3,
    type: "Millets",
    name: "White Nuts",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 4,
    img: product4,
    type: "Vegetable",
    name: "Vegan Red Tomato",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
  {
    id: 5,
    img: product5,
    type: "Health",
    name: "Mung Bean",
    oldCost: "$20.00",
    newCost: "$11.00",
    rating: rating,
  },
  {
    id: 6,
    img: product6,
    type: "Nuts",
    name: "Brown Hazelnut",
    oldCost: "$20.00",
    newCost: "$12.00",
    rating: rating,
  },
  {
    id: 7,
    img: product7,
    type: "Fresh",
    name: "Eggs",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
  {
    id: 8,
    img: product8,
    type: "Vegetable",
    name: "Zelco Suji Elaichi Rusk",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 9,
    img: product9,
    type: "Vegetable",
    name: "Mung Bean",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 10,
    img: product10,
    type: "Vegetable",
    name: "White Hazelnut",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 11,
    img: product11,
    type: "Vegetable",
    name: "Fresh Corn",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 12,
    img: product12,
    type: "Vegetable",
    name: "Organic Almonds",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
];
export const reletedData = [
  {
    id: 1,
    img: product1,
    type: "Vegetable",
    name: "Calabrese Broccoli",
    oldCost: "$20.00",
    newCost: "$13.00",
    rating: rating,
  },
  {
    id: 2,
    img: product2,
    type: "Fresh",
    name: "Fresh Banana Fruites",
    oldCost: "$20.00",
    newCost: "$14.00",
    rating: rating,
  },
  {
    id: 3,
    img: product3,
    type: "Millets",
    name: "White Nuts",
    oldCost: "$20.00",
    newCost: "$15.00",
    rating: rating,
  },
  {
    id: 4,
    img: product4,
    type: "Vegetable",
    name: "Vegan Red Tomato",
    oldCost: "$20.00",
    newCost: "$17.00",
    rating: rating,
  },
];
