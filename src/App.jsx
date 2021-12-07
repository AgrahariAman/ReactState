import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
//import { getProducts } from "./services/productService";
// import Spinner from "./Spinner";
// import useFetch from "./services/useFetch";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Products />
        </main>
      </div>
      <Footer />
    </>
  );
}
