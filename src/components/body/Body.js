import React from "react";
import "./body.scss";
import screens from "../../images/screens.png";

const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="font">
          <h3>Food app</h3>
          <h5>Food app</h5>
          <p className="tag">
            Why stay hungry when you can order form Bella Onojie
          </p>
          <h4 className="slogan">
            Download the bella onoje’s food app now ons
          </h4>
        </div>
        <div className="btn">
          <button className="btn-orng">Playstore</button>
          <button className="btn-transparent">Appstore</button>
        </div>
        <div className="img-container">
          <img src={screens} alt="screen1" className="image" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Body;
