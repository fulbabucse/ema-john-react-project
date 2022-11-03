import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [carts, setCarts] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exits = carts.find((product) => product._id === selectedProduct._id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter(
        (product) => product._id !== selectedProduct._id
      );
      exits.quantity = exits.quantity + 1;
      newCart = [...rest, exits];
    }
    setCarts(newCart);
    addToDb(selectedProduct._id);
  };

  const clearCart = () => {
    setCarts([]);
    deleteShoppingCart();
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mr-4">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={carts} clearCart={clearCart}>
            <Link to="/orders">
              <button className="btn btn-sm btn-error w-full mt-5 text-white flex items-center">
                Review Order
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="mx-2"
                ></FontAwesomeIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
