import React, { FC } from "react";
import { withBemMod } from "@bem-react/core";

import { ButtonProps, cnButton } from "../index";

import "./Button_type_link.scss";

export interface ButtonTypeLinkProps {
  type?: "link";
  href?: string;
}

export const withButtonTypeLink = withBemMod<ButtonTypeLinkProps, ButtonProps>(
  cnButton(),
  { type: "link" },
  Button => props => <Button {...props} as="a" />
);
