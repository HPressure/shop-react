import React, { useState } from "react";
import { cn } from "@bem-react/classname";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Page.scss";

import FavContext from "../../js/fav-context";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage.js";
import ProductsPage from "../ProductsPage/ProductsPage.js";
import Footer from "../Footer/Footer";
class Page extends React.Component {
  addToFav = (fav) => {
    this.setState(() => {
      let tmp = this.state.fav;

      var ind = tmp.findIndex((i) => i === fav);
      console.log(ind);

      ind == -1 ? tmp.push(fav) : tmp.splice(ind, 1);
      localStorage.setItem("favourites", JSON.stringify(tmp));
      return {
        fav: tmp,
      };
    });
  };
  state = {
    fav: [],
    addToFav: this.addToFav,
  };
  componentDidMount() {
    !localStorage.getItem("favourites") &&
      localStorage.setItem("favourites", JSON.stringify([]));

    this.setState({ fav: JSON.parse(localStorage.getItem("favourites")) });
  }
  render() {
    const Page = cn("Page");
    return (
      <Router>
        <FavContext.Provider value={this.state}>
          <div className={Page("Header")}>
            <Header />
          </div>

          <main className={Page("Main")}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/productTypes" component={ProductsPage} />
            </Switch>
          </main>
          <Footer className={Page("Footer")} />
        </FavContext.Provider>
      </Router>
    );
  }
}

export default Page;
