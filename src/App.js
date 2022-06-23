import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import AppWork from "./components/AppWorking/AppWork";
import paymentimg from "./images/payment.png";
import accountimg from "./images/account.png";
import menuimg from "./images/menu.png";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <AppWork
        margintop="700px"
        img={accountimg}
        display="block"
        h3="create an account"
        h2=" Create/Login to an existing account to get started"
        h4="Shop for your favorite meals or drinks
and enjoy while doing it."
      />
      <AppWork
        margintop="0px"
        img={menuimg}
        display="none"
        h3="Explore varieties"
        h2="Shop for your favorites
meal as e dey hot."
        h4="Shop for your favorite meals or drinks and enjoy while doing it."
      />
      <AppWork
        margintop="0px"
        img={paymentimg}
        display="none"
        h3="check out"
        h2="When you done check out and get it delivered."
        h4="When you done check out and get it delivered with ease."
      />
    </div>
  );
};

export default App;
