import React from "react";
import { cn } from "@bem-react/classname";

import "./Header.scss";

import SearchBar from "../SearchBar/SearchBar";

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
    window.removeEventListener("scroll", () => {
      this.setState({
        offset: window.pageYOffset
      });
    });
  }
  render() {
    const Header = cn("Header");

    return (
      <header className={Header()}>
        <div
          className={Header("Top")}
          style={{ top: parseFloat(this.state.offset) * 0.8 }}
        >
          <img
            className={Header("Top-Logo")}
            src="//static.wbstatic.net/i/header/logo.svg"
            alt=""
          />
          <SearchBar className={Header("Top-Search")} />

          <div className={Header("Top-UserMenu")}>
            <a className={Header("Top-UserMenu-Item Map")} href="">
              <i className="fas fa-map-marker-alt"></i>
              <p className={Header("Top-UserMenu-Item-Name")}>Адреса</p>
            </a>
            <a className={Header("Top-UserMenu-Item Delivery")} href=""></a>
            <a className={Header("Top-UserMenu-Item Profile")} href=""></a>
            <a className={Header("Top-UserMenu-Item Basket")} href=""></a>
          </div>
        </div>
        <nav className={Header("Bottom")}></nav>
      </header>
    );
  }
}
export default Header;
