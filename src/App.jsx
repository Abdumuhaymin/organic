import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Shop } from "./pages/shop/shop";
import { SingleShop } from "./pages/single-shop/single-shop";
import { Not } from "./pages/not/not";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:query" element={<SingleShop />} />
          <Route path="*" element={<Not />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
