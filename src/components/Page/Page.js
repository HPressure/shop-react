import React from "react";

import "./Page.scss";

import Header from "../Header/Header";
import ProductsContent from "../ProductsContent/ProductsContent";
function Page() {
  return (
    <>
      <Header />
      <main className="Page-Main">
        <ProductsContent />
      </main>
    </>
  );
}

export default Page;
