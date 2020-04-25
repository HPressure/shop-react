import React, { FC } from "react";
import { withBemMod } from "@bem-react/core";

import { ButtonProps, cnButton } from "../../index";

import "./Button_type_filter.scss";

export interface ButtonTypeFilterProps {
  type?: "filter";
  title?: string;
}

export const withButtonTypeFilter = withBemMod<
  ButtonTypeFilterProps,
  ButtonProps
>(cnButton(), { type: "filter" }, (Button) => (props) => (
  <Button {...props} as="button">
    {props.title}
  </Button>
));
