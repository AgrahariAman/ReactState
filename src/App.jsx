import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
//import { getProducts } from "./services/productService";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";

// const products = [
//   {
//     id: 1,
//     category: "shoes",
//     image: "shoe1.jpg",
//     name: "Hiker",
//     price: 94.95,
//     skus: [
//       { sku: "17", size: 7 },
//       { sku: "18", size: 8 },
//     ],
//     description: "This rugged boot will get you up the mountain safely.",
//   },
//   {
//     id: 2,
//     category: "shoes",
//     image: "shoe2.jpg",
//     name: "Climber",
//     price: 78.99,
//     skus: [
//       { sku: "28", size: 8 },
//       { sku: "29", size: 9 },
//     ],
//     description: "Sure-footed traction in slippery conditions.",
//   },
//   {
//     id: 3,
//     category: "shoes",
//     image: "shoe3.jpg",
//     name: "Explorer",
//     price: 145.95,
//     skus: [
//       { sku: "37", size: 7 },
//       { sku: "38", size: 8 },
//       { sku: "39", size: 9 },
//     ],
//     description: "Look stylish while stomping in the mud.",
//   },
// ];

export default function App() {
  const [size, setSize] = useState("");

  const {
    data: products,
    loading,
    error,
  } = useFetch("products?category=shoes");
  //shifted to useFetch.js
  // const [products, setProducts] = useState([]); // to store the products
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getProducts("shoes")
  //     .then(
  //       (
  //         res //receive
  //       ) => setProducts(res)
  //     ) // store the res
  //     .catch((e) => setError(e))
  //     .finally(() => setLoading(false)); //Finally runs after Success or failure for errror and sucess
  // }, []);

  // useEffect(() => {
  //   async function init() {
  //     try {
  //       const response = await getProducts("shoes");
  //       setProducts(response);
  //     } catch (e) {
  //       setError(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   init();
  // }, []);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  ////Imp
  const filteredProducts = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;
  ///Imp
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {size && <h2>Found {filteredProducts.length} items</h2>}
            {/*there should be size before found items    */}
          </section>
          <section id="products">{filteredProducts.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
