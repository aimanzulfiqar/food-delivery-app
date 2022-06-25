import React from "react";
import screens from "../../images/grpimg.png";
import "../Divider/divider.scss";
const Divider = () => {
  return (
    <div className="divider">
      <div>
        <img src={screens} alt="screen1" className="image" />
      </div>
      <div className="divbox">
        <hr />
        <p className="para" style={{ color: "black" }}>
          How App Works
        </p>
      </div>
    </div>
  );
};

export default Divider;
