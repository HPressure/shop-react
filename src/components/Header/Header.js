import React from "react";
import { cn } from "@bem-react/classname";

import "./Header.scss";

class Header extends React.Component {
  state = {
    offset: "",
    headers: []
  };
  componentWillMount() {
    // fetch("/").then(data => this.setState({ headers: data }));
    // console.log(this.state.headers);
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        offset: window.pageYOffset
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    const Header = cn("Header");

    return (
      <header className={Header()}>
        <nav
          className={Header("NavTop")}
          style={{ top: this.state.offset * 0.8 }}
        >
          <img
            className={Header("NavTop-Logo")}
            src="//static.wbstatic.net/i/header/logo.svg"
            alt=""
          />
        </nav>
        <nav className={Header("NavBottom")}></nav>
      </header>
    );
  }
}
export default Header;
