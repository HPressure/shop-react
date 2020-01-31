import React, { FC } from "react";

import { ButtonProps, cnButton } from "./index";

import "./Button.scss";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  as: Component = "button",
  ...props
}) => (
  <Component {...props} className={cnButton({}, [className])}>
    {children}
  </Component>
);
