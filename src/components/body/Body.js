import React from "react";
import "./body.scss";
import screen from "../../images/screen-orange.png";
import screen2 from "../../images/screen-white.png";

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
          <img src={screen} alt="screen1" className="image" />
          <img src={screen2} alt="screen1" className="imgw" />
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Body;
