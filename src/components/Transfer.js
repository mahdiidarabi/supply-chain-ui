/** Transfer assets */

import React from "react";
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
import { FaCoins, FaExchangeAlt } from "react-icons/fa";
import { Message } from "semantic-ui-react";
import { Transfers } from "./serverreq.js";
import Header from "./header";
var sectionStyle = {
  width: "100%",
  height: "741px",
  position: "relative",
  backgroundImage: "url(http://www.upsara.com/images/u820240_lfJoa9y.jpg)"
};
class Transfer extends React.Component {
  sendInfo = async e => {
    e.preventDefault();
    const res = await Transfers(
      localStorage.getItem("token"),
      this.state.data.receiver,
      this.state.data.amount
    );
    this.setState({ messag: res.body.message });
  };
  state = {
    data: {
      receiver: "",
      amount: 0
    },
    loading: false,
    errors: {},
    messag: ""
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    e.preventDefault();
  };

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
  render() {
    const { data, errors, loading } = this.state;
    return (
      <section className="img-gradient" style={sectionStyle}>
        <div className="app flex-row align-items-center ">
          <Container
            style={{
              sectionStyle,
              position: "absolute",
              top: "120px",
              left: "200px"
            }}
          >
            <Row className="justify-content-center ">
              <Col md="5">
                <CardGroup>
                  <Card style={{ background: "#b1bace" }} className="p-4">
                    <CardBody>
                      <h8>
                        <FaExchangeAlt /> Token Transfer
                      </h8>
                      <h125>{this.state.messag}</h125>
                      <Form onSubmit={this.onSubmit}>
                        {" "}
                        {errors.global && (
                          <Message negative>
                            <Message.Header>
                              Something went wrong
                            </Message.Header>
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
                          <Input
                            name="receiver"
                            FormLabel="Receiver"
                            type="text"
                            placeholder="Receiver"
                            autoComplete="address"
                            defaultValue={data.receiver}
                            onChange={this.onChange}
                          />
                          {errors.receiver}
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="amount"
                            FormLabel="Amount"
                            type="number"
                            placeholder="Amount"
                            defaultValue={data.amount}
                            onChange={this.onChange}
                          />
                          {errors.amount}
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button
                              color="mdb-color lighten-3"
                              className="px-4"
                            >
                              Send
                            </Button>
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
        <Header />
      </section>
    );
  }
}

export default Transfer;
