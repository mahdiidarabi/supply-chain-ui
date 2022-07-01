import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import {FaCoins} from "react-icons/fa";
// Not ready yet
const Buy = () => {
  return (
      <div>
          <h8 style={{position:"absolute",top:"100px",left:"1100px"}}><FaCoins/>  Buy or Sell  </h8>
    <Form style={{position:"absolute",top:"240px",left:"1100px",width:"300px"}}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="password" placeholder="1 btc" />
      </Form.Group>
    </Form.Row>
  
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Your Key</Form.Label>
      <Form.Control placeholder="*********" />
    </Form.Group>
   
  </Form>
  </div>
  );
};

export default Buy;