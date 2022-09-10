import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import SearchBooks from "./SearchBooks";

const Home = () => {
  return (
    <div className="container">
      {/* <ProductList /> */}
      <SearchBooks/>
      {/* TODO: this component is causing errors
      THIS SHIT DONT WORK
      TODOOOOOOOO!!!!!!!!!!!!!!!!!!!! */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
