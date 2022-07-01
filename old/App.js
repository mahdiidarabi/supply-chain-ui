import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footerComponent/footer.js';
import Header from './components/headerComponent/header.js';
import LoginPanel from './components/panels/loginPanel.js';
import CustomerPanel from './components/panels/customerPanel.js';
import loginPage from './components/pages/loginPage.js';
import Transfer from './components/pages/Transfer.js';
import Contact from './components/pages/contact.js';
import NormalUser from './components/pages/normalUser';
import SignedInUser from './components/pages/signedInUser.js';
import SignUp from './components/pages/signUp';
import MyPage from './components/pages/MyPage';
import Asset from './components/pages/assetTransfer.js';
import AdminPage from './components/pages/admin';
import './Assets/css/animate.css';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import './Assets/css/default.min.css';
import HomePage from './components/pages/homePage.js';
import Merchant from './components/pages/merchant.js';
const request = require('request');
document.body.Background = 'background: white;';


class App extends React.Component {
  render(){
    return(
      <Router>
        <div  >
      
        <Route exact path='/My' component={MyPage} /> 
        <Route exact path='/ContactUs' component={Contact} /> 
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/Admin' component={AdminPage} /> 
          <Route exact path='/LoginPage' component={loginPage} />
          <Route exact path='/SignUp' component={SignUp}  />
          <Route exact path='/User' component={NormalUser} />
          <Route exact path='/SignedInUser' render={()=> (<SignedInUser  id="" /> )} />
          <Route exact path='/Transfer' render={()=> (<Transfer  id="" /> )} />
          <Route exact path='/Merchant' render={()=> (<Merchant  id="" /> )} />
          <Route exact path='/Asset' render={()=> (<Asset Type="source" id="" /> )} />
          {/* <Header /> */}
        </div>
        </Router>
        
    );

}
}
export default App



