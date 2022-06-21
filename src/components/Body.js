import React from "react";
import "../styles/body.scss";
import screen from "../images/screen-orange.png";
import screen2 from "../images/screen-white.png";

const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="font">
          <h3>Food app</h3>
          <p className="tag">
            Why stay hungry when you can order form Bella Onojie
          </p>
          <h4>Download the bella onoje’s food app now ons</h4>
        </div>
        <div className="btn">
          <button className="btn-orng">Playstore</button>
          <button className="btn-transparent">Appstore</button>
        </div>
      </div>
      <img src={screen} alt="screen1" className="img" />
      <img src={screen2} alt="screen1" className="imgw" />
    </div>
  );
};

export default Body;
