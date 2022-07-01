import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="rgb(236, 235, 235)" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
         
          <MDBCol md="3">
            <h7  className="title">NAVIGATION</h7>
            <ul>
              <li className="list-unstyled">
                <a1 href="/">Home</a1>
              </li>
              <li className="list-unstyled">
                <a1 href="/SignUp">SignUp</a1>
              </li>
              <li className="list-unstyled">
                <a1 href="/LoginPage">Login</a1>
              </li>
              <li className="list-unstyled">
                <a1 href="/ContactUs">Contact</a1>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">Footer Content</h5>
            <p1>
              Here you can use rows and columns here to organize your footer
              content.
            </p1>
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