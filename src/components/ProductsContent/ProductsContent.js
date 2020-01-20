import React from "react";
import { cn } from "@bem-react/classname";

import "./ProductsContent.scss";

function ProductsContent(props) {
  const ProductsContent = cn("ProductsContent");
  return <div className={ProductsContent()}></div>;
}
export default ProductsContent;
