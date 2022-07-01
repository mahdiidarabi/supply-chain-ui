

import React, { Component } from 'react';
import PropTypes from "prop-types";
import {  Message } from "semantic-ui-react";
import Validator from "validator";
import { Link } from 'react-router-dom';
import {FaUser,FaLock} from "react-icons/fa";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Header from "../headerComponent/header";
import {Logins,ConfirmUser} from '../serverReq/serverreq.js';
var sectionStyle = {
  width: "100%",
  height: "761px",
  
  position:"relative",
  backgroundImage: "url(http://www.upsara.com/images/e47333_r5CU3uA.jpg)"
};
class Login extends Component {
  sendLoginInfo = async (e) => {
    e.preventDefault();
    //  const username= e.target.username.value;
    //  const password= e.target.password.value;
    const res= await Logins(this.state.data.username,this.state.data.password);
    if(res.body.success==="false"){
      this.setState({resp:res.body.message});
    }
    else{
      console.log(res);
      localStorage.setItem('token',res.body.token);
      localStorage.setItem('refreshToken',res.body.userType);
      localStorage.setItem('username',res.body.username);
      localStorage.setItem('number',res.body.accountNumber);
      if(res.body.userType==="admin1"){
        this.props.history.push('/Admin');
      }
      else if(res.body.userType==="source" || res.body.userType==="supplier"){
        this.props.history.push('/Merchant');
      }
      else if(res.body.userType==="enduser" ){
        this.props.history.push('/SignedInUser');
      }
    }
    //  const res= await ConfirmUser (this.state.data.username);
    //  console.log(res);
  }
  state = {
    data: {
      username: "",
      password: ""
    },
    loading: false,
    errors: {}
    ,resp:""
  };

  onChange = e =>{
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
      
    });
   e.preventDefault();
  }

  onSubmit = e => {
  
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.sendLoginInfo(e);
     
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (<section className="img-gradient" style={ sectionStyle }>
      <div className="app flex-row align-items-center">
        <Container style={{sectionStyle,position: "absolute", top:"120px",left:"200px" }}>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit} loading={loading}>
                    {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
                      <h1>Login</h1>
                     <h7>{this.state.resp} </h7>
                     
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaUser/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name="username" type="text" placeholder="Username" autoComplete="username"  defaultValue={data.username}
            onChange={this.onChange}/>
             {errors.username }
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaLock/>
                          </InputGroupText >
                        </InputGroupAddon >
                        <Input name="password" type="password" placeholder="Password" autoComplete="current-password"  defaultValue={data.password}
            onChange={this.onChange}/>
            {errors.password}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="mdb-color lighten-3" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white mdb-color lighten-1 bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      {/* <h2>Sign up</h2> */}
                      <p>Not a member yet? </p>
                      {/* <Link to="/SignUp"> */}
                        <Button href="/SignUp" color="mdb-color lighten-3" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      {/* </Link> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <Header/>
      </section>
    );
  }
}
Login.propTypes = {
  submit: PropTypes.func.isRequired
};
export default Login;
