import React from "react";
import { cn } from "@bem-react/classname";

import "./Page.scss";

import Header from "../Header/Header";
import ProductsContent from "../ProductsContent/ProductsContent";
import Footer from "../Footer/Footer";
function Page() {
  const Page = cn("Page");
  return (
    <>
      <div className={Page("Header")}>
        <Header />
      </div>

      <main className={Page("Main")}>
        <ProductsContent />
      </main>
      <Footer className={Page("Footer")} />
    </>
  );
}

export default Page;
