import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products.id);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCarts(newCart);
    addToDb(product.id);
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
