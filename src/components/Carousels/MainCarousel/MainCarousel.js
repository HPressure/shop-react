import React from "react";

import { cn } from "@bem-react/classname";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./MainCarousel.scss";

function MainCarousel(props) {
  const cnMainCarousel = cn("MainCarousel");
  return (
    <Carousel
      autoplay="true"
      infiniteLoop="false"
      showThumbs="false"
      className={cnMainCarousel({}, [props.className])}
    >
      <div className={cnMainCarousel("Elem")}>
        <img src="https://images.wbstatic.net/poster/ru/main/c1360x370/big_mango_07_022.jpg" />
      </div>
      <div className={cnMainCarousel("Elem")}>
        <img src="https://images.wbstatic.net/poster/ru/main/c1360x370/big_vesna_07_02.jpg" />
      </div>
    </Carousel>
  );
}
export default MainCarousel;
