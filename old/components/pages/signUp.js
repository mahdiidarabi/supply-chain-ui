import React, { Component } from 'react';
import {FaUser,FaLock} from "react-icons/fa";
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Header from "../headerComponent/header";
import PropTypes from "prop-types";
import {  Message } from "semantic-ui-react";
import {SignUp} from '../serverReq/serverreq.js';
import Validator from "validator";
import axios from 'axios';
const proxy = require('http-proxy-middleware');

var sectionStyle = {
    width: "100%",
    height: "821px",
    backgroundImage: "url(http://www.upsara.com/images/f1250_5navzU2.jpg)",
    position:"absolute",
    top:"0px"
  };
class Register extends Component {
  seeblock = async (e) => {
    console.log(this.state.data.type)
   const res= await SignUp(this.state.data.username,this.state.data.email,this.state.data.password,this.state.data.Name,this.state.data.familyname,this.state.data.type);
   console.log(res);
   if(res.body.success === false){
    this.setState({resp:res.body.message});
   }
   else{
    this.setState({resp:"Registered successfully . Please wait for your account to be confirmed by admin."});
   }
    
  }
  //   axios.get('' , {
  //     method: 'POST',
  //     headers: {
  //       'Access-Control-Allow-Origin':"*",
  //       "Authorization" : `Bearer ${ORG1_TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       fcn:"getBalence",
  //       args:["star"],
  //       peers:["peer0.org1.example.com","peer0.org2.example.com"]
  //     })}
  //   ).then(function(res,errors){
  //     console.log(errors);
  //     console.log(res);
    
  // });
  
  componentDidMount(){
  
  }
  sendRegInfo = async (e) => {
    e.preventDefault();
    // const Name= this.state.data.Name;
    // const username= this.state.data.username;
    // const email= this.state.data.email;
    // const password= this.state.data.password;
    // const type= this.state.data.type;
    
  //   const ORG1_TOKEN = "123"
  //   const api_call = await fetch(proxy('http://172.18.0.1', { target: 'localhost:4000/channels/mychannel/chaincodes/mycc/admin' }), {
  //     method: 'POST',
  //     headers: {
  //       "Authorization" : `Bearer ${ORG1_TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       fcn:"getBalence",
  //       args:["star"],
  //       peers:["peer0.org1.example.com","peer0.org2.example.com"]
  //     })}
  //   );
  //   await api_call.json().then(function(res,errors){
  //     console.log(errors);
  //     console.log(res);
    
  // });}
  // try {
  //   const response = await fetch('https://172.27.14.74/test', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: "username",
  //       password: "password"
  //     }),
  //   });
  //   const responseJson = await response.json();
  //   return {
  //     status : response.status ,
  //     body : responseJson
  //   };
  // } catch(error) {
  //   console.error(error);
  //   return {
  //     status : 0 ,
  //     body : {message : 'connection Problem'}
  //   };
  // }
  }
  state = {
    data: {
      Name: "",
      username: "",
      email: "",
      password: "",
      password2:"",
      type:"",
      familyname:""
    },
    loading: false,
    errors: {},
    resp:""
  };

  onChange = e =>{
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    e.preventDefault();
  };
  onChange2 = e =>{
    console.log(e.target.value)
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
      this.seeblock(e);
     
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (!data.Name) errors.Name = "Can't be blank";
    if (!data.username) errors.username = "Can't be blank";
    if (!data.type) errors.type = "Can't be blank";
    if(!(data.password === data.password2)) errors.password2 = "Passwords not matching";
    if (!data.familyname) errors.familyname = "Can't be blank";
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (<section className="img-gradient" style={ sectionStyle }>
      <div style={{position:"relative", top:"80px"}} className="app flex-row align-items-center">
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
                          <FaUser/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="Name" type="text" placeholder="Name" autoComplete="name" defaultValue={data.Name}
            onChange={this.onChange}/>
             {errors.Name } 
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <FaUser/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="familyname" type="text" placeholder="familyName" autoComplete="familyName" defaultValue={data.familyname}
            onChange={this.onChange}/>
             {errors.familyname }
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <FaUser/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="username" type="text" placeholder="Username" autoComplete="username" defaultValue={data.username}
            onChange={this.onChange}/>
             {errors.username }
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input name="email" type="text" placeholder="Email" autoComplete="email" defaultValue={data.email}
            onChange={this.onChange}/>
             {errors.email }
                    </InputGroup>
                   
                    <select name="type" className="browser-default custom-select mb-3" defaultValue={data.type}
            onChange={this.onChange2}>
          <option>Register as...</option>
          <option value="source">Source</option>
          <option value="supplier">Supplier</option>
          <option value="enduser">User</option>
          </select>
          {errors.type }
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FaLock/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="password" type="password" placeholder="Password" autoComplete="new-password" defaultValue={data.password}
            onChange={this.onChange}/>
             {errors.password }
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <FaLock/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="password2" type="password" placeholder="Repeat password" autoComplete="new-password" defaultValue={data.password2}
            onChange={this.onChange}/>
             {errors.password2 }
                    </InputGroup>

                    <Button  type="submit" color="mdb-color lighten-1" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-2">
                 
                  <h6>already a member?</h6>
                    <Button href="/LoginPage" className="mdb-color lighten-3" block><span>login</span></Button>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Header/>
      </section>
    );
  }
}
Register.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Register;
