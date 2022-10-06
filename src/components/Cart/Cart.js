import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice += product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat(((totalPrice * 10) / 100).toFixed(2));
  const grandTotal = parseFloat((totalPrice + shipping + tax).toFixed(2));

  return (
    <div className="sticky top-10">
      <h1 className="text-3xl font-bold text-center">Orders Summary</h1>
      <div className="underline"></div>
      <div className="mt-5">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3 className="text-2xl">Grand Total: ${grandTotal}</h3>
      </div>
      <div className="my-5">
        <button
          onClick={clearCart}
          className="btn btn-warning text-slate-600 w-full flex items-center"
        >
          Clear Cart
          <FontAwesomeIcon className="mx-3" icon={faTrashAlt}></FontAwesomeIcon>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Cart;
