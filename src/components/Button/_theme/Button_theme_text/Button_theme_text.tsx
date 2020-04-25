import React, { FC } from "react";
import { withBemMod } from "@bem-react/core";

import { ButtonProps, cnButton } from "../../index";

import "./Button_theme_text.scss";

export interface ButtonThemeTextProps {
  theme?: "text";
}

export const withButtonThemeText = withBemMod<ButtonThemeTextProps>(
  cnButton(),
  {
    theme: "text",
  }
);
