import React from "react";
import { cn } from "@bem-react/classname";

import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";

import "./ProductsPage.scss";

import Api from "../../js/api";

class ProductsPage extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    Api.getData(this.props.location.pathname, this.props.location.search).then(
      (data) =>
        this.setState({
          products: data,
        })
    );
  }
  componentDidUpdate(prevProps) {
    if (
      `${prevProps.location.pathname}${prevProps.location.search}` !==
      `${this.props.location.pathname}${this.props.location.search}`
    ) {
      Api.getData(
        this.props.location.pathname,
        this.props.location.search
      ).then((data) =>
        this.setState({
          products: data,
        })
      );
    }
  }
  render() {
    let products = this.state.products.map((item, i) => (
      <ProductCard key={i} productType={item} />
    ));
    const ProductsPage = cn("ProductsPage");
    return (
      <div className={ProductsPage()}>
        <FilterBar />
        <div className={ProductsPage("Products")}>{products}</div>
      </div>
    );
  }
}
export default ProductsPage;
