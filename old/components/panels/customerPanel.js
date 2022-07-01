import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import '../../Assets/css/customerPanel.css'; 
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
      {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */} <MDBCardImage  cascade className="img-fluid" src="https://cdn2.iconfinder.com/data/icons/business-2-39/128/149-512.png" />
      
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