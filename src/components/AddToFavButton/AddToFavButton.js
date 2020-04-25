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
function check_favs(fav, typeId) {
  let tmp = fav.filter((item) => item === typeId);
  return tmp.length;
}
function AddToFavButton(props) {
  const cnAddToFavButton = cn("AddToFavButton");
  return (
    <FavContext.Consumer>
      {({ fav, addToFav }) => (
        <Button
          theme="icon"
          onClick={() => addToFav(props.typeId)}
          className={cnAddToFavButton({}, [props.className])}
        >
          <i
            className={cnAddToFavButton(
              "Icon",
              { active: check_favs(fav, props.typeId) > 0 },
              ["fas fa-heart"]
            )}
          ></i>
        </Button>
      )}
    </FavContext.Consumer>
  );
}

export default AddToFavButton;
