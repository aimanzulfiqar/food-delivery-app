import "./header.scss";
import React from "react";
import logo from "../../images/logo.png";
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

  const listitems = pages.map((page, index) => {
    return (
      <li key={index}>
        <a href={page.path}>{page.name}</a>
      </li>
    );
  });

  return (
    <div className="navbar">
      <div className="iconsBox">
        <img src={logo} alt="logo" className="logo" />
        <img src={icon} alt="tgl" className="navbar-tgl" />
      </div>
      <div>
        <ul>{listitems}</ul>
      </div>
    </div>
  );
};

export default Header;
