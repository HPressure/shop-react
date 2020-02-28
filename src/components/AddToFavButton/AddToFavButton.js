import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import FavContext from "../../js/fav-context";

import "./AddToFavButton.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon";
const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);
function check_favs(arr, product) {
  let tmp = arr.filter(
    item => item.prodId === product.prodId && item.typeId === product.typeId
  );
  return tmp.length;
}
function AddToFavButton(props) {
  const cnAddToFavButton = cn("AddToFavButton");
  return (
    <FavContext.Consumer>
      {({ fav, addToFav }) => (
        <Button
          theme="icon"
          onClick={() => addToFav(props.product)}
          className={cnAddToFavButton({}, [props.className])}
        >
          <i
            className={cnAddToFavButton("Icon fas fa-heart")}
            style={
              check_favs(fav, props.product) > 0
                ? {
                    opacity: "1",
                    color: "#481173"
                  }
                : {}
            }
          ></i>
        </Button>
      )}
    </FavContext.Consumer>
  );
}

export default AddToFavButton;
