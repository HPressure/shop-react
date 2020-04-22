import React from "react";
import { cn } from "@bem-react/classname";

import ProductCard from "../ProductCard/ProductCard";

import "./ProductsPage.scss";

class ProductsPage extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    console.log(this.props.location.search);

    fetch(`/productTypes${this.props.location.search}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`/productTypes${this.props.location.search}`)
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            products: data,
          });
        });
    }
  }
  render() {
    let products = this.state.products.map((item, i) => (
      <ProductCard key={i} productType={item} />
    ));
    const Products = cn("Products");
    return <div className={Products()}>{products}</div>;
  }
}
export default ProductsPage;
