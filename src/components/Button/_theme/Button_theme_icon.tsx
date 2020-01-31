import React, { FC } from "react";
import { withBemMod } from "@bem-react/core";

import { ButtonProps, cnButton } from "../index";

import "./Button_theme_icon.scss";

export interface ButtonThemeIconProps {
  theme?: "icon";
}

export const withButtonThemeIcon = withBemMod<ButtonThemeIconProps>(
  cnButton(),
  {
    theme: "icon"
  }
);
