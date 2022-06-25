import React from "react";
import "./body.scss";
import "../../styles/globals.scss";

import useWindowSize from "../../utils/useWindowSize";

const Body = (props) => {
  const [width, height] = useWindowSize();

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: props.showColor ? "" : `url(${props.img})`,
          backgroundColor: props.showColor ? props.bgClr : "transparent",
        }}
      >
        <div className="font">
          <h3 style={{ display: props.display }}>Food app</h3>
          <h5 style={{ display: props.display }}>Food app</h5>
          <p
            className="tag"
            style={{
              marginTop: props.margintop,
              color: props.showColor ? props.fontClr : "white",
            }}
          >
            {props.tag}
          </p>
          <h4 className="slogan">{props.slogan}</h4>
        </div>
        <div
          className="btn"
          style={{
            paddingInline: 20,
            flexDirection:
              width < 500 ? (props.isFirst ? "column" : "row") : "row",
          }}
        >
          <button
            className="btn-orng"
            style={{
              borderRadius: props.isFirst ? 30 : 10,
            }}
          >
            {props.firstBtn}
          </button>
          <button
            className="btn-transparent"
            style={{
              borderRadius: props.isFirst ? 30 : 10,
              color: props.isFirst ? "white" : "white",
              color:
                width < 800 ? (props.isFirst ? "#fa4a0c" : "white") : "white",
              borderColor: width < 800 ? "orange" : "white",
              borderColor: props.isFirst ? "#fa4a0c" : "white",
            }}
          >
            {props.secondBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
