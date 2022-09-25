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
                <a href="/">Shop</a>
              </li>
              <li className="nav-link">
                <a href="/">Orders</a>
              </li>
              <li className="nav-link">
                <a href="/">Inventory</a>
              </li>
              <li className="nav-link">
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
