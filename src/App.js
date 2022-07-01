import React from 'react';
import ReactDOM from 'react-dom';

import loginPage from './components/loginPage.js';
import Transfer from './components/Transfer.js';
import Contact from './components/contact.js';
import NormalUser from './components/normalUser';
import SignedInUser from './components/signedInUser.js';
import SignUp from './components/signUp';

import MyPage from './components/MyPage';
import Asset from './components/assetTransfer.js';
import AdminPage from './components/admin';
import './components/animate.css';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import './components/default.min.css';
import HomePage from './components/homePage.js';
import Merchant from './components/merchant.js';
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



