import React, { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import { UserMenuItemProps, cnUserMenuItem } from "./index";

import "./UserMenuItem.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon/Button_theme_icon";

const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

const UserMenuItem: FC<UserMenuItemProps> = ({
  children,
  className,
  as: Component = "link",
  ...props
}) => {
  return (
    <Button className={cnUserMenuItem({}, [className])} type="link">
      <div className={cnUserMenuItem({}, [className])}></div>
    </Button>
  );
};
// function UserMenuItem(props: any) {
//   return (
//     <Button className={cnUserMenuItem()} type="link">
//       {props.icon}
//       {props.text}
//     </Button>
//   );
// }
export default UserMenuItem;
