/** treansfer assets  */
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
import { FaHandHolding, FaBox } from "react-icons/fa";
import { Message } from "semantic-ui-react";
import {
  addAsset,
  RequestAsset,
  UserConfirmAsset,
  UserChangeHolder
} from "./serverreq.js";
import Header from "./header";
var sectionStyle = {
  width: "100%",
  height: "760px",
  position: "relative",
  top: "30px",
  backgroundImage: "url(https://imgurl.ir/uploads/936514_.jpg)"
};
class Asset extends React.Component {
  state = {
    data: {
      serial: "",
      type: "",
      var: "",
      newHolder: "",
      id: "",
      number: ""
    },
    loading: false,
    errors: {},
    Micro: "",
    messageAdd: "",
    messageReq: "",
    errorAdd: "",
    errorReq: "",
    errorCh: ""
  };
  ///////////////////////////////////////////////Add asset (for source only)
  sendInfoAddAsset = async e => {
    e.preventDefault();
    const res2 = await addAsset(
      localStorage.getItem("token"),
      this.state.data.serial,
      this.state.data.type,
      this.state.data.var
    );
    if (res2.body.success === false) {
      this.setState({ errorAdd: res2.body.message });
    } else {
      this.setState({
        messageAdd: "Your confirmation has been sent successfully."
      });
    }
  };

  onSubmitAddAsset = e => {
    e.preventDefault();
    const errors = this.validateAddAsset(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.sendInfoAddAsset(e);
    }
  };

  validateAddAsset = data => {
    const errors = {};
    if (!data.serial) errors.serial = "Can't be blank";
    if (!data.type) errors.type = "Can't be blank";
    if (!data.var) errors.var = "Can't be blank";
    return errors;
  };
  /////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////// Change holder
    
    sendInfoChangeHolder = async e => {
      e.preventDefault();
      const res2 = await UserChangeHolder(
        localStorage.getItem("token"),
        this.state.data.id,
        this.state.data.newHolder
      );
      //console.log(res2);
      if (res2.body.success === true) {
        window.location.reload();
      } else {
        this.setState({ errorCh: res2.body.message });
      }
    };
 

    onSubmitChangeHolder = e => {
      e.preventDefault();
      const errors = this.validateChangeHolder(this.state.data);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.sendInfoChangeHolder(e);
      }
    };
  

    validateChangeHolder = data => {
      const errors = {};
      if (!data.newHolder) errors.newHolder = "Can't be blank";
      if (!data.id) errors.id = "Can't be blank";
      return errors;
    };
  ///////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////// Request asset
  sendInfoRequestAsset = async e => {
    e.preventDefault();

    const res2 = await RequestAsset(
      localStorage.getItem("token"),
      this.state.data.number,
      this.state.Micro
    );
    if (res2.body.success === false) {
      this.setState({ errorReq: res2.body.message });
    } else {
      this.setState({ messageReq: "Your request has been sent successfully." });
    }
  };  
onSubmitReqAsset = e => {
  e.preventDefault();
  this.sendInfoRequestAsset(e);
  };

// validate3 = data => {
//   const errors = {};
//   if (!data.data.number) errors.number = "Can't be blank";
//   if (!data.Micro) errors.Micro = "Can't be blank";
//   return errors;
//   };
////////////////////////////////////////////////////////////////////////////
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    e.preventDefault();
  };

  onChange1 = e => {
    this.setState({ Micro: e.target.value });
  };

  render() {
    const { data, errors, loading } = this.state;
    if (localStorage.getItem("refreshToken") === "source") {
      return (
        <section className="img-gradient" style={sectionStyle}>
          <Header />
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
                <Col md="13">
                  <CardGroup>
                    <Card className="text-white blue-grey lighten-2 bg-primary py-4 d-md-down-none">
                      <CardBody>
                        <h8>
                          <FaBox /> Add Asset
                        </h8>
                        <h12>{this.state.messageAdd}</h12>
                        <h12>{this.state.errorAdd}</h12>
                        <Form onSubmit={this.onSubmitAddAsset}>
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
                          <InputGroup className="mb-4 mt-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="serial"
                              type="text"
                              placeholder="Serial number"
                              autoComplete="Serial number"
                              defaultValue={data.serial}
                              onChange={this.onChange}
                            />
                            {errors.serial}
                          </InputGroup>
                          <InputGroup className="mb-4 ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="type"
                              type="text"
                              placeholder="Type"
                              autoComplete="Type"
                              defaultValue={data.type}
                              onChange={this.onChange}
                            />
                            {errors.type}
                          </InputGroup>
                          <InputGroup className="mb-4 ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="var"
                              type="text"
                              placeholder="Var"
                              autoComplete="Var"
                              defaultValue={data.var}
                              onChange={this.onChange}
                            />
                            {errors.var}
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button
                                style={{ position: "relative", top: "10px" }}
                                color="blue-grey darken-4"
                                className="blue-grey darken-4"
                              >
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="text-white blue-grey lighten-3 bg-primary py-4 d-md-down-none">
                      <CardBody>
                        <h8>
                          <FaBox /> Request Asset
                        </h8>
                        <h12>{this.state.messageReq}</h12>
                        <h12>{this.state.errorReq}</h12>
                        <Form onSubmit={this.onSubmitReqAsset}>
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
                          <InputGroup className="mb-4 mt-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="number"
                              type="number"
                              placeholder="number of assets"
                              autoComplete="number"
                              defaultValue={data.number}
                              onChange={this.onChange}
                            />
                            {errors.number}
                          </InputGroup>
                          <select
                            onChange={this.onChange1}
                            className="browser-default custom-select mb-4"
                          >
                            <option>Do you want Micro?</option>
                            <option
                              name="Type"
                              defaultValue={data.Micro}
                              value={true}
                            >
                              Yes
                            </option>
                            <option
                              name="Type"
                              defaultValue={data.Micro}
                              value={false}
                            >
                              No
                            </option>
                            {errors.Micro}
                          </select>
                          <Row>
                            <Col xs="6">
                              <Button
                                style={{ position: "relative", top: "70px" }}
                                color="blue-grey darken-4"
                                className="blue-grey darken-4"
                              >
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card
                      className="text-white blue-grey lighten-4 bg-primary py-4 d-md-down-none"
                      style={{ width: "900px" }}
                    >
                      <CardBody className="text-center">
                        <Form onSubmit={this.onSubmitChangeHolder}>
                          {" "}
                          {errors.global && (
                            <Message negative>
                              <Message.Header>
                                Something went wrong
                              </Message.Header>
                              <p>{errors.global}</p>
                            </Message>
                          )}
                          <h8>
                            <FaHandHolding /> Change Holder
                          </h8>
                          <h12>{this.state.errorCh}</h12>
                         
                          <InputGroup className="mb-4 mt-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="newHolder"
                              type="text"
                              placeholder="New Holder"
                              defaultValue={data.newHolder}
                              onChange={this.onChange}
                            />
                            {errors.newHolder}
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="id"
                              type="text"
                              placeholder="Asset ID"
                              defaultValue={data.id}
                              onChange={this.onChange}
                            />
                            {errors.id}
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button
                                style={{ position: "relative", top: "70px" }}
                                color="blue-grey darken-4"
                                className="blue-grey darken-4"
                              >
                                Submit
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
        </section>
      );
    } else {
      return (
        <section className="img-gradient" style={sectionStyle}>
          <Header />
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
                <Col md="6">
                  <CardGroup>
                    <Card
                      className="text-white blue-grey lighten-3 bg-primary py-4 d-md-down-none"
                      style={{ width: "900px" }}
                    >
                      <CardBody className="text-center">
                        <Form onSubmit={this.onSubmitChangeHolder}>
                          {" "}
                          {errors.global && (
                            <Message negative>
                              <Message.Header>
                                Something went wrong
                              </Message.Header>
                              <p>{errors.global}</p>
                            </Message>
                          )}
                          <h8>
                            <FaHandHolding /> Change Holder
                          </h8>
                          <h12>{this.state.errorCh}</h12>
                          
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="newHolder"
                              type="text"
                              placeholder="New Holder"
                              defaultValue={data.newHolder}
                              onChange={this.onChange}
                            />
                            {errors.newHolder}
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="id"
                              type="text"
                              placeholder="Asset ID"
                              defaultValue={data.id}
                              onChange={this.onChange}
                            />
                            {errors.id}
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button
                                style={{ position: "relative", top: "10px" }}
                                color="blue-grey darken-4"
                                className="blue-grey darken-4"
                              >
                                Submit
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
        </section>
      );
    }
  }
}

export default Asset;