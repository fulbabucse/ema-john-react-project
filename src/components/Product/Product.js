import React from "react";
import { FaBuilding } from "react-icons/fa";

const Product = (props) => {
  const { addToCart, product } = props;
  const { id, category, name, price, stock, img, shipping, seller } = product;
  return (
    <div className="flex justify-center h-full">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <p data-mdb-ripple="true" data-mdb-ripple-color="orange">
          <img className="rounded-t-lg w-full" src={img} alt={name} />
        </p>
        <div className="p-4">
          <h5 className="text-gray-900 text-md font-medium">{name}</h5>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <FaBuilding></FaBuilding> {seller}
            </p>
            <p>
              Price: <strong>${price}</strong>
            </p>
          </div>
          <div className="flex justify-between">
            <p className="badge badge-outline">Stock: {stock}</p>
            <p className="badge badge-outline">Shipping: {shipping}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h3>{category}</h3>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-block px-3 py-2 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
