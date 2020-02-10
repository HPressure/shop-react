import React from "react";
import { cn } from "@bem-react/classname";

import "./ProductsContent.scss";

import MainCarousel from "../Carousels/MainCarousel/MainCarousel";

function ProductsContent(props) {
  const ProductsContent = cn("ProductsContent");
  return (
    <div className={ProductsContent()}>
      <MainCarousel className={ProductsContent("TopCarousel")} />
    </div>
  );
}
export default ProductsContent;
