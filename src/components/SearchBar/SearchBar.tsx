import React, { FC, useState } from "react";
import { compose, composeU } from "@bem-react/core";

import { SearchBarProps, cnSearchBar } from "./index";

import "./SearchBar.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon";

const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

const SearchBar: FC<SearchBarProps> = ({
  children,
  className,
  as: Component = "div",
  ...props
}) => {
  const [active, toggleActive] = useState(false);

  return (
    <Component
      {...props}
      className={cnSearchBar({}, [className, active ? "active" : ""])}
    >
      <input
        className={cnSearchBar("Input")}
        placeholder="Поиск"
        onFocus={() => toggleActive(true)}
        onBlur={() => toggleActive(false)}
      />
      <Button className={cnSearchBar("BarBtn SearchBtn")} theme="icon">
        <i className="fas fa-search"></i>
      </Button>
      <Button className={cnSearchBar("BarBtn PicBtn")} theme="icon">
        <i className="fas fa-camera"></i>
      </Button>
      {children}
    </Component>
  );
};
export default SearchBar;
