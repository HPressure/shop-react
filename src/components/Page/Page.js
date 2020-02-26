import React from "react";
import { cn } from "@bem-react/classname";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Page.scss";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage.js";
import ProductsPage from "../ProductsPage/ProductsPage.js";
import Footer from "../Footer/Footer";
function Page() {
  const Page = cn("Page");
  return (
    <Router>
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
    </Router>
  );
}

export default Page;
