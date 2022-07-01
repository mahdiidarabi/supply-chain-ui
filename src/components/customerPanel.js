import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import './customerPanel.css'; 
import 'mdbreact/dist/css/mdb.css';
import WOW from "wowjs";
class CustomerPanel extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
    render(){
return (
  <div >
<MDBContainer  >
  <MDBCard className="wow slideInRight shadow-box-example z-depth-5" data-wow-offset="90" style={{ width: "22rem", marginTop: "1rem",position: "relative", left: "950px", top: "285px" }}>
    <MDBCardHeader className="brown lighten-5">Are you ... </MDBCardHeader>
    <MDBCardBody>
    <MDBCardImage cascade className="img-fluid" src="https://cdn3.iconfinder.com/data/icons/communication-1-2/256/Team-512.png" />
     <MDBCardText>
        An admin or a merchant?
      </MDBCardText>
      <MDBBtn href= "LoginPage" className="mdb-color lighten-1">Click here ! </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</div>
);
};}

export default CustomerPanel;