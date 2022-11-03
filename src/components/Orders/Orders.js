import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const removeCartProduct = (id) => {
    const restProduct = cart.filter((product) => product._id !== id);
    setCart(restProduct);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="grid grid-cols-1 gap-4 my-4 w-3/4 mx-auto">
        {cart.map((product) => (
          <ProductCart
            key={product._id}
            product={product}
            removeCartProduct={removeCartProduct}
          ></ProductCart>
        ))}
        {cart.length === 0 && (
          <h1 className="text-center text-2xl font-semibold text-amber-500 my-20">
            Order is Empty <br />{" "}
            <button className="btn btn-sm btn-secondary mt-10">
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </h1>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button className="btn btn-sm btn-secondary w-full mt-3">
              Proceed Shipping
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
