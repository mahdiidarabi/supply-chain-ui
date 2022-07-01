import React from 'react';
import ReactDOM from 'react-dom';
import LoginPanel from '../panels/loginPanel.js';
import CustomerPanel from '../panels/customerPanel.js';
import Footer from '../footerComponent/footer.js';
//import loginPage from './components/pages/loginPage.js';
import Wallpaper from '../pics/wallpaper.js';
import Header from '../headerComponent/header';
var styler = {
    //backgroundColor: 'rgba(52, 52, 52, 0.2)',
    position:"absolute",top:"950px", left:"50px",fontSize:"25px"
  };
class HomePage extends React.Component {
    render(){
        return(
            <div >
                
                  
         {/* <h style={styler} >Hi</h> */}
          <Wallpaper />
         
         <h1 className="wow zoomIn" data-wow-offset="85" style={{position:"absolute",top:"800px", left:"50px",fontSize:"50px"}}> Caviar supply chain<br/>  management website!</h1>
        <h5 className="wow zoomIn" data-wow-offset="85" style={styler}></h5>
     

            
            
              <LoginPanel />
               <CustomerPanel />
                  
          {/* <Slide delay="10s" ><p>
          <LoginPanel />
          <CustomerPanel />
          </p>
          </Slide> */}
         <Header/>
          {/* <HomePage />
          <Footer /> */}
          {/* <Route exact path='/' component={HomePage} /> */}
          <Footer />
            </div>
        );

    }

}
export default HomePage;