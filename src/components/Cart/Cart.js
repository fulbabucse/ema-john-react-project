import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="sticky top-2">
      <div className="py-10 px-10 sticky">
        <h1 className="text-3xl font-bold">Orders History</h1>
        <p className="mt-4">Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h3 className="text-xl">Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
