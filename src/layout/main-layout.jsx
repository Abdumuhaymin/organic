import React from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

export const MainLayout = () => {
  return (
    <div>
      <header className="py-[69px]">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
