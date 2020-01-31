import { ReactType } from "react";
import { IClassNameProps } from "@bem-react/core";
import { cn } from "@bem-react/classname";

export interface SearchBarProps extends IClassNameProps {
  as?: ReactType;
}

export const cnSearchBar = cn("SearchBar");
