/** Home Page  */
import React from "react";
import LoginPanel from "./loginPanel.js";
import CustomerPanel from "./customerPanel.js";
import Footer from "./footer.js";
import Wallpaper from "./wallpaper.js";
import Header from "./header";
var styler = {
  position: "absolute",
  top: "950px",
  left: "50px",
  fontSize: "25px"
};
//first page of the website
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Wallpaper />
        <h1
          className="wow zoomIn"
          data-wow-offset="85"
          style={{
            position: "absolute",
            top: "800px",
            left: "50px",
            fontSize: "50px"
          }}
        >
          {" "}
          Caviar supply chain 
          <br /> management website!
        </h1>
        
        <h5 className="wow zoomIn" data-wow-offset="85" style={styler}></h5>

        <LoginPanel />
        <CustomerPanel />
        <Header />  
        <Footer />
      </div>
    );
  }
}
export default HomePage;
