import React from "react";
import { cn } from "@bem-react/classname";

import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";

import "./ProductsPage.scss";

import Api from "../../js/api";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.prodSection = React.createRef();
    this.state = {
      products: [],
      barStuck: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (this.prodSection.current) {
      let offset = this.prodSection.current.getBoundingClientRect().top;

      this.setState({
        barStuck: offset <= 0 && true,
      });
    }
  };
  render() {
    let products = this.state.products.map((item, i) => (
      <ProductCard key={i} productType={item} />
    ));
    const ProductsPage = cn("ProductsPage");
    return (
      <div className={ProductsPage()} ref={this.prodSection}>
        <FilterBar
          className={ProductsPage("StickyFilter", {
            fixed: this.state.barStuck,
          })}
        />
        <div className={ProductsPage("Products")}>{products}</div>
      </div>
    );
  }
}
export default ProductsPage;
