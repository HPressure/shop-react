import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import "./ProductCard.scss";

import colorFilter from "../../js/colors";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon";
const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

class ProductCard extends React.Component {
  state = {
    currType: 0,
    color: 0
  };
  componentWillMount() {
    this.setState({
      currType: this.props.type,
      color: this.props.color
    });
  }
  getTypes = () => {
    return this.props.product.type.map(item => (
      <Button
        theme="icon"
        className="ColorPick"
        style={{
          background: colorFilter[item.colorId],
          border: item.colorId == this.state.color && "solid 1px gray"
        }}
      ></Button>
    ));
  };
  render() {
    const cnProductCard = cn("ProductCard");

    return (
      <article className={cnProductCard()}>
        <div className={cnProductCard("Top")}>
          <div
            className={cnProductCard("ColorBar")}
            style={{ display: this.props.product.type.length == 1 && "none" }}
          >
            {this.getTypes()}
          </div>
          <img
            className={cnProductCard("Top-Img")}
            src={this.props.imgUrl}
            alt=""
          />
        </div>

        <div className={cnProductCard("Info")}>
          <p className={cnProductCard("Info-Title")}>{this.props.title}</p>
          <p className={cnProductCard("Info-Price")}>{this.props.price}</p>
        </div>
      </article>
    );
  }
}

export default ProductCard;
