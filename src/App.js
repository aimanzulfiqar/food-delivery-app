import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import AppWork from "./components/AppWorking/AppWork";
import paymentimg from "./images/payment.png";
import accountimg from "./images/account.png";
import menuimg from "./images/menu.png";
import downloadimg from "./images/download.png";
import bg from "./images/bg-img.png";
import Footer from "./components/footer/Footer";
import useWindowSize from "./utils/useWindowSize";
import Divider from "./components/Divider/Divider";
const App = () => {
  const [width, height] = useWindowSize();
  return (
    <div>
      <Header />
      <Body
        img={bg}
        tag="Why stay hungry when you can order form Bella Onojie"
        slogan="Download the bella onoje’s food app now on"
        bgClr=" #FAFAFA"
        showColor={width < 800 ? true : false}
        isFirst={true}
      />
      <Divider />
      <AppWork
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
        direction={width > 800 ? "row-reverse" : "column-reverse"}
      />
      <AppWork
        margintop="0px"
        img={paymentimg}
        display="none"
        h3="check out"
        h2="When you done check out and get it delivered."
        h4="When you done check out and get it delivered with ease."
      />
      <Body
        img={downloadimg}
        display="none"
        tag="Download the app now."
        slogan="Available on your favorite store. Start your premium experience now"
        margintop="150px"
        bgClr="#252B42"
        fontClr="white"
        showColor={width < 800 ? true : false}
        isFirst={false}
      />
      <Footer />
    </div>
  );
};

export default App;
