/** register page */
import { toast, ToastContainer, MDBContainer, MDBBtn } from 'mdbreact';
import React, { Component } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import Header from "./header";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
import { SignUp } from "./serverreq.js";
import Validator from "validator";
import axios from "axios";
const proxy = require("http-proxy-middleware");



var sectionStyle = {
  width: "100%",
  height: "821px",
  backgroundImage: "url(http://www.upsara.com/images/f1250_5navzU2.jpg)",
  position: "absolute",
  top: "0px"
};

 
class Register extends React.Component{
   notify = type => {
    return () => {
      switch (type) {
        case 'info':
          toast.info('Info message', {
            closeButton: false
          });
          break;
        case 'success':
          toast.success('Success message', {
            closeButton: false
          });
          break;
        case 'warning':
          toast.warn('Warning message', {
            closeButton: false
          });
          break;
        case 'error':
          toast.error('Error message', {
            closeButton: false
          });
          break;
        default:
          toast.error('Error message', {
            closeButton: false
          });
      }
    };
  }
  sendRegInfo = async e => {
   
    const res = await SignUp(
      this.state.data.username,
      this.state.data.email,
      this.state.data.password,
      this.state.data.Name,
      this.state.data.familyname,
      this.state.data.type
    );
   
    if (res.body.success === false) {
      this.setState({ resp: res.body.message });
    } else {
      this.notify('success');
      this.setState({
        resp:
          "Registered successfully . Please wait for your account to be confirmed by admin."
      });
    }
  };

  state = {
    data: {
      Name: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      type: "",
      familyname: ""
    },
    loading: false,
    errors: {},
    resp: ""
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    e.preventDefault();
  };
  onChange2 = e => {
   
    this.setState({
      data: { ...this.state.data, type: e.target.value }
    });
    e.preventDefault();
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.sendRegInfo(e);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (!data.Name) errors.Name = "Can't be blank";
    if (!data.username) errors.username = "Can't be blank";
    if (!data.type) errors.type = "Can't be blank";
    if (!(data.password === data.password2))
      errors.password2 = "Passwords not matching";
    if (!data.familyname) errors.familyname = "Can't be blank";
    return errors;
  };
  render(){
    const { data, errors, loading } = this.state;
    return (
      <section className="img-gradient" style={sectionStyle}>
        <div
          style={{ position: "relative", top: "80px" }}
          className="app flex-row align-items-center"
        >
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-3">
                    <Form onSubmit={this.onSubmit} loading={loading}>
                      {errors.global && (
                        <Message negative>
                          <Message.Header>Something went wrong</Message.Header>
                          <p>{errors.global}</p>
                        </Message>
                      )}
                      <h1>Register</h1>
                      <p color="warning">{this.state.resp}</p>
                      <p className="text-muted">Create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaUser />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="Name"
                          type="text"
                          placeholder="Name"
                          autoComplete="name"
                          defaultValue={data.Name}
                          onChange={this.onChange}
                        />
                        {errors.Name}
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaUser />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="familyname"
                          type="text"
                          placeholder="familyName"
                          autoComplete="familyName"
                          defaultValue={data.familyname}
                          onChange={this.onChange}
                        />
                        {errors.familyname}
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaUser />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="username"
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          defaultValue={data.username}
                          onChange={this.onChange}
                        />
                        {errors.username}
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          type="text"
                          placeholder="Email"
                          autoComplete="email"
                          defaultValue={data.email}
                          onChange={this.onChange}
                        />
                        {errors.email}
                      </InputGroup>

                      <select
                        name="type"
                        className="browser-default custom-select mb-3"
                        defaultValue={data.type}
                        onChange={this.onChange2}
                      >
                        <option>Register as...</option>
                        <option value="source">Source</option>
                        <option value="supplier">Supplier</option>
                        <option value="enduser">User</option>
                      </select>
                      {errors.type}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaLock />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          defaultValue={data.password}
                          onChange={this.onChange}
                        />
                        {errors.password}
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaLock />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="password2"
                          type="password"
                          placeholder="Repeat password"
                          autoComplete="new-password"
                          defaultValue={data.password2}
                          onChange={this.onChange}
                        />
                        {errors.password2}
                      </InputGroup>

                      <Button type="submit" color="mdb-color lighten-1" block>
                        Create Account
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Header />
      </section>
    );
  
}}
Register.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Register;
