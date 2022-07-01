import React from 'react';
import {MDBAnimation, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import 'mdbreact/dist/css/mdb.css' ;

class loginPanel extends React.Component {
  // log out
  onClick= e=>{
      
    localStorage.setItem('token',"");
    localStorage.setItem('refreshToken',"");
    localStorage.setItem('username',"");
    localStorage.setItem('number',"");
   
  window.location.reload();
  }
  render(){
return (
    <div  >
<MDBContainer >
  <MDBCard    style={{ width: "18rem",height:"100%", marginTop: "1rem",position: "absolute", left: "0px", top: "55px"   }}>
    <MDBCardHeader style={{background:"rgba(0, 150, 136, 0.3)"}}> <MDBCardImage cascade className="img-fluid" src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-2/512/add_user_group-512.png" /> </MDBCardHeader>
    <MDBCardBody style={{background:"rgba(0, 150, 136, 0.1)"}}>
      <MDBCardText >
        Username : {this.props.username}<br/>
        Balance : {this.props.balance}
      </MDBCardText>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/Transfer">Transfer Token</a>
      <br/>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} onClick={this.onClick}>Log out</a>
      <br/>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/">Change your password</a>
     
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</div>
);}
}

export default loginPanel;