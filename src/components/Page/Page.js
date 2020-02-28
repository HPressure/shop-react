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
  addToFav = fav => {
    this.setState(prevState => {
      let tmp = prevState.fav;
      let exists = false;
      let ind = 0;
      for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].prodId === fav.prodId && tmp[i].typeId === fav.typeId) {
          ind = i;
          exists = true;
        }
      }
      exists ? tmp.splice(ind, 1) : tmp.push(fav);
      return {
        fav: tmp
      };
    });
  };
  state = {
    fav: [],
    addToFav: this.addToFav
  };

  render() {
    // console.log(this.state.fav);
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
              <Route path="/products">
                <ProductsPage />
              </Route>
            </Switch>
          </main>
          <Footer className={Page("Footer")} />
        </FavContext.Provider>
      </Router>
    );
  }
}

export default Page;
