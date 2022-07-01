import React from 'react';
import {MDBAnimation, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import 'mdbreact/dist/css/mdb.css' ;
import WOW from "wowjs";
class loginPanel extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render(){
return (
    <div  >
<MDBContainer >
  <MDBCard  className="wow slideInLeft shadow-box-example z-depth-5" data-wow-offset="90" style={{ width: "22rem", marginTop: "1rem",position: "relative", left: "550px", top: "800px"   }}>
    <MDBCardHeader className="brown lighten-5">Do you ... </MDBCardHeader>
    <MDBCardBody >
      {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
      <MDBCardImage cascade className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f575.svg/480px-Emoji_u1f575.svg.png" />
      <MDBCardText >
        Just wanna see what's going on?
      </MDBCardText>
      <MDBBtn href="/User"  className="mdb-color lighten-1">Click here ! </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</div>
);}
}

export default loginPanel;