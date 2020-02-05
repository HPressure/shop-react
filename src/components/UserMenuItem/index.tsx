import { ReactType } from "react";
import { IClassNameProps } from "@bem-react/core";
import { cn } from "@bem-react/classname";

export interface UserMenuItemProps extends IClassNameProps {
  as?: ReactType;
}

export const cnUserMenuItem = cn("UserMenuItem");
