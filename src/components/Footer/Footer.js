import React from "react";

import { cn } from "@bem-react/classname";

import "./Footer.scss";

function Footer(props) {
  const cnFooter = cn("Footer");
  return <footer className={cnFooter({}, [props.className])}></footer>;
}
export default Footer;
