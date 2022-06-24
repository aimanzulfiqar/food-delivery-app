import React from "react";
import logo from "../../images/logo.png";
import twitter from "../../images/twitter.png";
import "../footer/footer.scss";
import insta from "../../images/instagram.png";
import fb from "../../images/fb.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="box">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons">
          <img src={twitter} alt="social-media" />
          <img src={fb} alt="social-media" />
          <img src={insta} alt="social-media" />
        </div>
        <div>
          <p>Copywright 2020 Bella Onojie.com </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
