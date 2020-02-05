import React from "react";
import { compose, composeU } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import "./Header.scss";

import SearchBar from "../SearchBar/SearchBar";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon";

const Button = compose(
  withButtonTypeLink,
  withButtonThemeIcon
)(ButtonPresenter);

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
    const cnHeader = cn("Header");

    return (
      <header className={cnHeader()}>
        <div
          className={cnHeader("Top")}
          style={{ top: parseFloat(this.state.offset) * 0.8 }}
        >
          <img
            className={cnHeader("Top-Logo")}
            src="//static.wbstatic.net/i/header/logo.svg"
            alt=""
          />
          <SearchBar className={cnHeader("Top-Search")} />

          <div className={cnHeader("Top-UserMenu")}>
            <Button className={cnHeader("Top-UserMenu-Item Map")} type="link">
              <i
                className={cnHeader(
                  "Top-UserMenu-Item-Icon fas fa-map-marker-alt"
                )}
              ></i>
              <p className={cnHeader("Top-UserMenu-Item-Title")}>Адреса</p>
            </Button>
            <Button
              className={cnHeader("Top-UserMenu-Item Delivery")}
              type="link"
            >
              <i
                className={cnHeader(
                  "Top-UserMenu-Item-Icon fas fa-shipping-fast"
                )}
              ></i>
              <p className={cnHeader("Top-UserMenu-Item-Title")}>Доставка</p>
            </Button>

            <Button
              className={cnHeader("Top-UserMenu-Item Profile")}
              type="link"
            >
              <i className={cnHeader("Top-UserMenu-Item-Icon fas fa-user")}></i>
              <p className={cnHeader("Top-UserMenu-Item-Title")}>Профиль</p>
            </Button>
            <Button
              className={cnHeader("Top-UserMenu-Item Basket")}
              type="link"
            >
              <i
                className={cnHeader(
                  "Top-UserMenu-Item-Icon fas fa-shopping-cart"
                )}
              ></i>
              <p className={cnHeader("Top-UserMenu-Item-Title")}>Корзина</p>
            </Button>
          </div>
        </div>
        <nav className={cnHeader("Bottom")}></nav>
      </header>
    );
  }
}
export default Header;
