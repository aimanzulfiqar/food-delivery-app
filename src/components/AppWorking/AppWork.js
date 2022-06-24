import React from "react";
import "../AppWorking/AppWork.scss";

const AppWork = (props) => {
  return (
    <div>
      <div className="appwork" style={{ marginTop: props.margintop }}>
        <div className="acc-grid" style={{ flexDirection: props.direction }}>
          <img src={props.img} alt="Create an account" className="gridimg" />
          <div className="acctxt">
            <h3>{props.h3}</h3>
            <h2 className="acc">{props.h2}</h2>

            <h4 className="txtt">{props.h4}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWork;
//
