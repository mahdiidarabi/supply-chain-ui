/** Request assets in Admin page */

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
  AdminConfirmAsset,
  AdminConfirmAssetMicro
} from "./serverreq.js";
class AssetReqTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      error: "",
      MicroSerial: ""
    };
  }
  onChange = async e => {
    this.setState({ count: e.target.value });
  };
  onChange2 = async e => {
    this.setState({ MicroSerial: e.target.value });
  };
  // confirm asset
  onClick = async () => {
    this.setState({ error: "" });
    if (this.state.count === "") {
      this.setState({ error: "number can not be 0." });
    } else if (this.state.count > this.props.assetCount) {
      this.setState({ error: "number can not be more than requested!" });
    } else {
      
          const res = await AdminConfirmAssetMicro(
            localStorage.getItem("token"),
            parseInt(this.props.id),
            parseInt(this.state.count),
            
          );
          console.log(res);
          //window.location.reload();
        }
      
    };
  //confirm user
  onClick2 = async () => {
    const res = await ConfirmUser(
      localStorage.getItem("token"),
      this.props.username,
      "false"
    );
    window.location.reload();
  };
  render() {
    if (this.props.status === "notEnded") {
      var add = [];
      if (this.props.micro === true) {
        // add.push(
        //   <InputGroup className="mb-4 mt-3">
        //     <InputGroupAddon addonType="prepend">
        //       <InputGroupText></InputGroupText>
        //     </InputGroupAddon>
        //     <Input
        //       name="MicroSerial"
        //       type="text"
        //       placeholder="Serial of micros "
        //       autoComplete="MicroSerial"
        //       defaultValue={this.state.MicroSerial}
        //       onChange={this.onChange2}
        //     />
        //   </InputGroup>
        // );
      }
      return (
        <MDBContainer style={{ width: "1330px" }}>
          <MDBCol>
            <MDBCard style={{ width: "1030px" }}>
              <MDBCardBody>
                <MDBCardText>
                  <div>
                    <strong>Account number </strong>
                    <h13>{this.props.account} | </h13>
                    <strong>Number of assets : </strong>
                    <h13>{this.props.assetCount} | </h13>
                    <strong>Number of confirmed assets: </strong>
                    <h13>{this.props.confirmedCount}</h13>
                    <strong> | Micro request: </strong>
                    <h13>{String(this.props.micro)}</h13>
                    <br />
                    <InputGroup className="mb-4 mt-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText></InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="count"
                        type="number"
                        placeholder="Number of accepteds "
                        autoComplete="count"
                        defaultValue={this.state.count}
                        onChange={this.onChange}
                      />
                    </InputGroup>

                    {/* {add} */}
                    {this.state.error}
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
    } else if (this.props.status === "ended") {
      return (
        <MDBContainer style={{ width: "1030px" }}>
          <MDBCol>
            <MDBCard style={{ width: "1030px" }}>
              <MDBCardBody>
                <MDBCardText>
                  <div>
                    <strong>Account number </strong>
                    <h13>{this.props.account} | </h13>
                    <strong>Number of assets : </strong>
                    <h13>{this.props.assetCount} | </h13>
                    <strong>Number of confirmed assets: </strong>
                    <h13>{this.props.confirmedCount}</h13>
                    <strong> | Micro request: </strong>
                    <h13>{String(this.props.micro)}</h13>
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

export default AssetReqTab;
