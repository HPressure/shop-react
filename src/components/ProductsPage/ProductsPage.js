import React from "react";
import { cn } from "@bem-react/classname";

import ProductCard from "../ProductCard/ProductCard";

import "./ProductsPage.scss";

class ProductsPage extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {
    fetch("https://5e26b6e16eeb44001453606d.mockapi.io/api/v1/products")
      .then(data => data.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  }
  render() {
    let products = this.state.products.map((item, i) => (
      <ProductCard key={i} title={item.name} imgUrl={item.imgUrl} />
    ));
    const Products = cn("Products");
    return <div className={Products()}>{products}</div>;
  }
}
export default ProductsPage;
