/** @format */

import React from "react";
import { MDBContainer, MDBAlert } from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import {
  ConfirmUser,
  getbalanceAdmin,
  IssueForUser
} from "./serverreq.js";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: "",
      error: "",
      amount: "0",
      message: ""
    };
  }
  onChange = async e => {
    this.setState({ amount: e.target.value });
  };
  // accept user
  onClick = async () => {
    console.log("hereeeeeeee");
    const res = await ConfirmUser(
      localStorage.getItem("token"),
      this.props.username,
      "true"
    );
    window.location.reload();
  };
  // delete user
  onClick2 = async () => {
    const res = await ConfirmUser(
      localStorage.getItem("token"),
      this.props.username,
      "false"
    );
    window.location.reload();
  };
  // get admin's balance
  onClick3 = async () => {
    const res = await getbalanceAdmin(
      localStorage.getItem("token"),
      this.props.account
    );
    if (res.body.success === true) {
      this.setState({ balance: " user's balance : " + res.body.metadata });
    } else {
      this.setState({ error: res.body.message });
    }
  };
  // add to user's balance
  onClick4 = async () => {
    const res = await IssueForUser(
      localStorage.getItem("token"),
      this.props.account,
      this.state.amount
    );
    if (res.body.success === true) {
      this.setState({ message: "Token was issued successfully." });
    } else {
      this.setState({ message: res.body.message });
    }
  };
  render() {
    if (this.props.status === "null") {
      return (
        <MDBContainer style={{ width: "1330px" }}>
          <MDBCol>
            <MDBCard style={{ width: "1030px" }}>
              <MDBCardBody>
                <MDBCardText>
                  <div>
                    <strong>type: </strong>
                    <h13>{this.props.type} | </h13>
                    <strong>name: </strong>
                    <h13>{this.props.name} | </h13>
                    <strong>familyname: </strong>
                    <h13>{this.props.familyname}</h13>
                    <strong> | username: </strong>
                    <h13>{this.props.username}</h13>
                    <strong> | email: </strong>
                    <h13>{this.props.email}</h13>
                    <br />
                    <MDBBtn outline color="success" onClick={this.onClick}>
                      confirm
                    </MDBBtn>
                    <MDBBtn outline color="warning" onClick={this.onClick2}>
                      delete
                    </MDBBtn>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      );
    } else if (this.props.status === "true") {
      return (
        <MDBContainer style={{ width: "1030px" }}>
          <MDBCol>
            <MDBCard style={{ width: "1030px" }}>
              <MDBCardBody>
                <MDBCardText>
                  <div>
                    <strong>type: </strong>
                    <h13>{this.props.type} | </h13>
                    <strong>name: </strong>
                    <h13>{this.props.name} | </h13>
                    <strong>familyname: </strong>
                    <h13>{this.props.familyname}</h13>
                    <strong> | username: </strong>
                    <h13>{this.props.username}</h13>
                    <strong> | email: </strong>
                    <h13>{this.props.email}</h13>
                    <br />
                    <MDBBtn outline color="warning" onClick={this.onClick2}>
                      delete
                    </MDBBtn>
                  </div>
                  <MDBBtn outline color="purple" onClick={this.onClick3}>
                    Get Balance
                  </MDBBtn>
                  <h124> {this.state.balance}</h124>
                  <h124>{this.state.error}</h124>
                  <br />
                  <InputGroup className="mb-4 mt-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="amount"
                      type="text"
                      placeholder="amount"
                      autoComplete="amount"
                      onChange={this.onChange}
                    />
                  </InputGroup>
                  <MDBBtn outline color="pink" onClick={this.onClick4}>
                    Issue for user
                  </MDBBtn>
                  {this.state.message}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      );
    } else {
      return (
        <MDBContainer className="mt-3 mb-3" style={{ width: "1230px" }}>
          <MDBCol>
            <MDBCard className="mt-3 mb-3" style={{ width: "1030px" }}>
              <MDBCardBody className="mt-3 mb-3">
                <MDBCardText>
                  <div>
                    <strong>type: </strong>
                    <h13>{this.props.type} | </h13>
                    <strong>name: </strong>
                    <h13>{this.props.name} | </h13>
                    <strong>familyname: </strong>
                    <h13>{this.props.familyname}</h13>
                    <strong> | username: </strong>
                    <h13>{this.props.username}</h13>
                    <strong> | email: </strong>
                    <h13>{this.props.email}</h13>
                    <br />
                    <MDBBtn outline color="success" onClick={this.onClick}>
                      confirm
                    </MDBBtn>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      );
    }
  }
}

export default User;
