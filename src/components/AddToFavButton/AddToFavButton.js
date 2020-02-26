import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import "./AddToFavButton.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon";
const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

function AddToFavButton(props) {
  const cnAddToFavButton = cn("AddToFavButton");
  return (
    <Button theme="icon" className={cnAddToFavButton({}, [props.className])}>
      <i className={cnAddToFavButton("Icon far fa-heart")}></i>
    </Button>
  );
}

export default AddToFavButton;
