import React from "react";
import { cn } from "@bem-react/classname";

import "./ProductCard.scss";

function ProductCard(props) {
  const cnProductCard = cn("ProductCard");
  return (
    <article className={cnProductCard()}>
      <img className={cnProductCard("Img")} src={props.imgUrl} alt="" />
      <div className={cnProductCard("Info")}>
        <p className={cnProductCard("Info-Title")}>{props.title}</p>
      </div>
    </article>
  );
}

export default ProductCard;
