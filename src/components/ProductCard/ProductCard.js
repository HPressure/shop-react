import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import "../AddToFavButton/AddToFavButton";

import "./ProductCard.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon/Button_theme_icon";
import AddToFavButton from "../AddToFavButton/AddToFavButton";
const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

class ProductCard extends React.Component {
  state = {
    color: 0,
  };

  render() {
    let productType = this.props.productType;
    const cnProductCard = cn("ProductCard");
    return (
      <article className={cnProductCard()}>
        <div className={cnProductCard("Top")}>
          <img
            className={cnProductCard("Top-Img")}
            src={productType.imgUrl}
            alt=""
          />
          <AddToFavButton
            className={cnProductCard("Top-Fav")}
            typeId={productType.id}
          />
        </div>

        <div className={cnProductCard("Info")}>
          <p className={cnProductCard("Info-Title")}>{productType.name}</p>
          <p className={cnProductCard("Info-Price")}>{productType.price}</p>
        </div>
      </article>
    );
  }
}

export default ProductCard;
