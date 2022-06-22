import React from "react";
import "../AppWorking/AppWork.scss";
import accountimg from "../../images/account.png";

const AppWork = () => {
  return (
    <div>
      <div className="appwork">
        <p className="para">How the App Works</p>
        <div className="acc-grid">
          <img src={accountimg} alt="Create your account" />
          <div className="acctxt">
            <h3 className="line1">Create an account</h3>
            <h2>Create/Login to an existing account to get started</h2>
            <h4>
              an account is created with your email and a desired password
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWork;
