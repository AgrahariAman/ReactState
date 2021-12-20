import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
//import { getProducts } from "./services/productService";
// import Spinner from "./Spinner";
// import useFetch from "./services/useFetch";
import { Route, Routes } from "react-router";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
// import cartReducer from "./cartReducer";
// import { CartContext } from "./cartContext";

// let initialCart;

// try {
//   initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
// } catch {
//   console.error("The cart Could not be parsed  into JSON");
//   initialCart = [];
// }

export default function App() {
  //const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  // function addToCart(id, sku) {
  //   // setCart((items) => {
  //   //   const itemInCart = items.find((i) => i.sku === sku);
  //   //   if (itemInCart) {
  //   //     //return a new array with the matching item replaced
  //   //     return items.map((i) =>
  //   //       i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
  //   //     );
  //   //   } else {
  //   //     // Return new array with the new item appended
  //   //     return [...items, { id, sku, quantity: 1 }];
  //   //   }
  //   // });
  // }

  // function updateQuantity(sku, quantity) {
  //   // setCart((item) => {
  //   //   if (quantity === 0) {
  //   //     return item.filter((i) => i.sku !== sku);
  //   //   }
  //   //   return item.map((i) => (i.sku === sku ? { ...i, quantity } : i));
  //   // });
  // }
  // function emptyCart() {
  //   setCart([]);
  // }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Fitness Shoes</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
