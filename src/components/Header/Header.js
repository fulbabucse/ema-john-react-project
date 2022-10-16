import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="md:px-0 lg:px-24">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/shop">
              <img src={logo} alt="Ema John" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="nav-items">
              <li className="nav-link">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="nav-link">
                <Link to="/orders">Orders</Link>
              </li>
              <li className="nav-link">
                <Link to="/inventory">Inventory</Link>
              </li>
              <li className="nav-link">
                <Link to="/about">About</Link>
              </li>

              <li className="nav-link">
                <Link to="/login">
                  <button className="btn btn-sm btn-secondary">Log In</button>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/register">
                  <button className="btn btn-sm btn-success">Register</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
