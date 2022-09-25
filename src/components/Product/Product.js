import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Product = (props) => {
  const { addToCart, product } = props;
  const { category, name, price, stock, img, shipping, seller } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img src={img} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="text-base font-bold">{name}</h2>
          <div className="flex justify-between">
            <p>Company: {seller}</p>
            <p>
              Price: <strong>${price}</strong>
            </p>
          </div>
          <p>Category: {category}</p>
          <div className="card-actions">
            <div className="badge badge-outline">Stock: {stock}</div>
            <div className="badge badge-outline">Shipping: {shipping}</div>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => addToCart(product)}
            >
              <p className="mr-2">Cart</p>{" "}
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
