import React from "react";
import logo from "../../images/logo.png";
import "./header.scss";
import icon from "../../images/Vector.png";
const Header = () => {
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Faq",
      path: "/faq",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const listitems = pages.map((page) => {
    return (
      <li>
        <a href={page.path}>{page.name}</a>
      </li>
    );
  });
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul>{listitems}</ul>
      <img src={icon} alt="tgl" className="navbar-tgl" />
    </div>
  );
};

export default Header;
