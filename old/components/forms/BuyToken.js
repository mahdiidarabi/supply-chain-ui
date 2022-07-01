import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import {FaCoins} from "react-icons/fa";
import SidebarSignedin from '../panels/sidebarSignedin.js';
import FormText from "../../../node_modules/react-bootstrap/FormText";
import FormLabel from "../../../node_modules/react-bootstrap/FormLabel";
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
  
    {/* <Form.Group controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group> */}
  
    <Form.Row>
      {/* <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group> */}
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Choose you operation</Form.Label>
        <Form.Control as="select">
          <option>Buy</option>
          <option>Sell</option>
        </Form.Control>
      </Form.Group>
  
      {/* <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group> */}
    </Form.Row>
  
    <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="I accept policies" />
    </Form.Group>
    <MDBBtn style={{width:"150px"}} type="submit">
      Submit
    </MDBBtn>
  </Form>
  {/* <SidebarSignedin/> */}
  </div>
  );
};

export default Buy;