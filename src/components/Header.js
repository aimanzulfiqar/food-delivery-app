import React from "react";
import logo from "../images/logo.png";
import "../styles/header.scss";
import icon from "../images/Vector.png";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li className="navbar-tgl">
          <img src={icon} alt="tgl" />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Product">Product</a>
        </li>
        <li>
          <a href="/Faq">Faq</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
