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
  handleTypeChange = type => {
    this.setState({
      currType: type
    });
  };
  getTypes = () => {
    return this.props.product.type.map(item => (
      <Button
        theme="icon"
        className="ColorPick"
        type={item.typeId}
        onClick={() => this.handleTypeChange(item.typeId)}
        style={{
          background: colorFilter[item.colorId],
          border: item.typeId == this.state.currType && "solid 1px gray"
        }}
      ></Button>
    ));
  };

  render() {
    const currProdObj = this.props.product.type[this.state.currType - 1];
    const cnProductCard = cn("ProductCard");
    return (
      <article className={cnProductCard()}>
        <div className={cnProductCard("Top")}>
          <div
            className={cnProductCard("Top-ColorBar")}
            style={{ display: this.props.product.type.length == 1 && "none" }}
          >
            {this.getTypes()}
          </div>
          <img
            className={cnProductCard("Top-Img")}
            src={currProdObj.imgUrl}
            alt=""
          />
        </div>

        <div className={cnProductCard("Info")}>
          <p className={cnProductCard("Info-Title")}>{currProdObj.name}</p>
          <p className={cnProductCard("Info-Price")}>{currProdObj.price}</p>
        </div>
      </article>
    );
  }
}

export default ProductCard;
