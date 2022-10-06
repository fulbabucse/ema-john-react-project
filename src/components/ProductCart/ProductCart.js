import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ProductCart.css";

const ProductCart = ({ product, removeCartProduct }) => {
  const { id, name, price, quantity, shipping, img } = product;
  return (
    <div className="cart__product-container">
      <div className="flex gap-3 border border-solid border-gray-500 p-3 rounded-md">
        <div className="product-image">
          <img src={img} alt={name} />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="product-info">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Shipping Charge: {shipping}</p>
          </div>
          <button
            onClick={() => removeCartProduct(id)}
            className="text-xl bg-orange-100 text-orange-700 w-10 h-10 rounded-full p-3 flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
