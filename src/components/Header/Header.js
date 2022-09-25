import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="md:px-0 lg:px-24">
        <div className="navbar">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className="nav-items">
              <li className="nav-link">
                <a href="/shop">Shop</a>
              </li>
              <li className="nav-link">
                <a href="/orders">Orders</a>
              </li>
              <li className="nav-link">
                <a href="/inventory">Inventory</a>
              </li>
              <li className="nav-link">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
