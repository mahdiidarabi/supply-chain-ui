import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="rgb(236, 235, 235)" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        
          <MDBCol md="3">
            <h7  className="title">Quick Links </h7>
            <ul>
              <li className="first">
                <a href="/">Home</a>
              </li>
              <li className="first">
                <a href="/SignUp">SignUp</a>
              </li>
              <li className="first">
                <a href="/LoginPage">Login</a>
              </li>
              <li className="first">
                <a href="/ContactUs">Contact</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;