import React from "react";
import { cn } from "@bem-react/classname";

import "./HomePage.scss";

import MainCarousel from "../Carousels/MainCarousel/MainCarousel";

function HomePage(props) {
  const Home = cn("Home");
  return (
    <div className={Home()}>
      <MainCarousel className={Home("TopCarousel")} />
    </div>
  );
}
export default HomePage;
