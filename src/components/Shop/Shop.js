import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...carts, product];
    setCarts(newCart);
    console.log(newCart);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mr-4">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <div className="mt-16 text-center">
            <h1 className="text-3xl font-bold">Orders History</h1>
            <p className="font-bold mt-4">Cart Products: {carts.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
