import React from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";
import { Link } from "react-router-dom";

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
  componentWillMount() {}
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
      <header
        className={cnHeader({}, [this.props.className])}
        style={{ top: parseFloat(this.state.offset) * 0.6 }}
      >
        <div className={cnHeader("Top")}>
          <Link className={cnHeader("Top-Logo")} to="/">
            <img
              className={cnHeader("Top-Logo-Img")}
              src="//static.wbstatic.net/i/header/logo.svg"
              alt=""
            />
          </Link>

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
        <nav className={cnHeader("Bottom")}>
          <Link
            to={{ pathname: "/products", search: "?m" }}
            className={cnHeader("Bottom-NavElem")}
          >
            Мужчинам
          </Link>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Женщинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Детям
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Мужчинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Женщинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Детям
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Мужчинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Женщинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Детям
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Мужчинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Женщинам
          </Button>
          <Button type="link" href="#" className={cnHeader("Bottom-NavElem")}>
            Детям
          </Button>
        </nav>
      </header>
    );
  }
}
export default Header;
