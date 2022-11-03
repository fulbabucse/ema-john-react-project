import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    const ids = Object.keys(storedCart);

    console.log(ids);

    fetch("http://localhost:5000/productsIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCarts(savedCart);
      })
      .catch((err) => console.error(err));
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
        <div className="mb-6">
          <div className="product-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mr-4 mb-4">
            {products.map((product) => (
              <Product
                product={product}
                key={product._id}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
          <div>
            <h3 className="mb-2">
              Currently selected page: {page + 1} and {size}
            </h3>
            <div className="flex items-center gap-2">
              <div>
                {[...Array(pages).keys()].map((number) => (
                  <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={`btn btn-sm rounded-sm ml-1 ${
                      page === number ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}
              </div>
              <select
                onChange={(e) => setSize(e.target.value)}
                className="border py-1 border-orange-600 outline-none"
              >
                <option value="5">5</option>
                <option selected value={10}>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
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
