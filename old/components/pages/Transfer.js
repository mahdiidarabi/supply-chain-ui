import React from "react";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {FaCoins,FaExchangeAlt} from "react-icons/fa";
import SidebarSignedin from '../panels/sidebarSignedin.js';
import Buy from '../forms/BuyToken.js';
import FormText from "../../../node_modules/react-bootstrap/FormText";
import FormLabel from "../../../node_modules/react-bootstrap/FormLabel";
import PropTypes from "prop-types";
import {  Message } from "semantic-ui-react";
import Validator from "validator";
import {Transfers} from '../serverReq/serverreq.js';
import Header from "../headerComponent/header";
var sectionStyle = {
  width: "100%",
  height: "741px",
  position:"relative",
  backgroundImage: "url(http://www.upsara.com/images/u820240_lfJoa9y.jpg)"
};
class Transfer extends React.Component {
  sendInfo = async (e) => {
    e.preventDefault();
    //  const username= e.target.username.value;
    //  const password= e.target.password.value;
    const res = await Transfers(localStorage.getItem('token'),this.state.data.receiver,this.state.data.amount);
    this.setState({messag:res.body.message})
  }
  state = {
    data: {
      receiver: "",
      amount: 0
    },
    loading: false,
    errors: {},
    messag:""
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
      this.sendInfo(e);
     
    }
  };

  validate = data => {
    const errors = {};
    if (!data.receiver) errors.receiver = "Can't be blank";
    if (!data.amount) errors.amount = "Can't be blank";
    return errors;
  };
  render(){
    const { data, errors, loading } = this.state;
  return (

 <section className="img-gradient" style={ sectionStyle }>

<div className="app flex-row align-items-center ">
<Container style={{sectionStyle,position: "absolute", top:"120px",left:"200px" }}>
  <Row className="justify-content-center ">
    <Col md="9">
      <CardGroup>
        <Card style={{background:"#b1bace"}} className="p-4">
          <CardBody>
          <h8><FaExchangeAlt/> Token Transfer</h8>
          <h125>{this.state.messag}</h125>
            <Form onSubmit={this.onSubmit}> {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
              
              
              {/* <p className="text-muted"></p> */}
              <InputGroup className="mb-4 ">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input name="receiver" FormLabel="Receiver" type="text" placeholder="Receiver" autoComplete="address" defaultValue={data.receiver}
            onChange={this.onChange}/>
             {errors.receiver }
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input name="amount" FormLabel="Amount" type="number" placeholder="Amount"  defaultValue={data.amount}
            onChange={this.onChange}/>
             {errors.amount }
              </InputGroup>
              <Row>
                <Col xs="6">
                  <Button color="mdb-color lighten-3" className="px-4">Send</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Card className="text-white mdb-color lighten-3 bg-primary py-4 d-md-down-none" style={{ width: '900px' }}>
          <CardBody className="text-center">
          <Form>
              <h8><FaCoins/> Buy or Sell</h8>
              <p></p>
              {/* <p className="text-muted"></p> */}
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input FormLabel="Receiver" type="password" placeholder="Amount" autoComplete="address" />
              </InputGroup>
              
              <select className="browser-default custom-select mb-4">
          <option>Choose your operation</option>
          <option value="1">Buy</option>
          <option value="2">Sell</option>

        </select>
              <Row>
                <Col xs="6">
                  <Button color="mdb-color lighten-3" className="px-4">Submit</Button>
                </Col>
              </Row>
            </Form>
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
}};

export default Transfer;
