import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail(props) {
  const { id } = useParams();
  const skuRef = useRef();
  const navigate = useNavigate();

  const { data: product, loading, error } = useFetch(`products/${id}`);
  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  // TODO: Display these products details
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select
        id="size"
        ref={skuRef}
        // value={sku}
        // onChange={(e) => setSku(e.target.value)}
      >
        <option value="">What Size</option>

        {product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>
            {s.size}
          </option>
        ))}
      </select>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            const sku = skuRef.current.value;
            if (!sku) return alert("Select size.");
            props.addToCart(id, sku);
            navigate("/cart");
          }}
        >
          Add To Cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
