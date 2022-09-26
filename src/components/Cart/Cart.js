import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const taxStr = ((totalPrice * 10) / 100).toFixed(2);
  const tax = parseFloat(taxStr);
  const grandTotalStr = (totalPrice + shipping + tax).toFixed(2);
  const grandTotal = parseFloat(grandTotalStr);
  return (
    <div className="sticky top-2">
      <div className="py-10 px-10 sticky">
        <h1 className="text-3xl font-bold">Orders History</h1>
        <p className="mt-4">Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3 className="text-xl">Grand Total: ${grandTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
