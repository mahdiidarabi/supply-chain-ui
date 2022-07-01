/** not signed in users */

import React from "react";
import CoolTabs from "react-cool-tabs";
import Mytable from "./AssetHistory";
import InfoCard from "./infoCard.js";
import { MDBDataTable } from "mdbreact";
import Header from "./header";
import {
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import {
  testToken,
  getAssetHistory,
  MyAssets
} from "./serverreq.js";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer
} from "mdbreact";

class Asset extends React.Component {
  state = {
    id: "",
    show: null,
    AssetHistory: [],
    nextAssetHistory: null,
  };
  getAssetHistory = async e => {
    this.setState({ show: "" });
    e.preventDefault();
    const res2 = await getAssetHistory(
      localStorage.getItem("token"),
      this.state.id
    );
    console.log(res2);
    if (res2.body.success === false) {
      this.setState({ show: res2.body.message });
    }
    if (res2.body.success === true) {
      this.setState({ AssetHistory: res2.body.data });
      this.setState({ nextAssetHistory: res2.body.next });
    }
  };
  LoadAssetHistory = async e => {
    this.setState({ show: "" });
    e.preventDefault();
    const res2 = await getAssetHistory(
      localStorage.getItem("token"),
      this.state.id,
      this.state.nextAssetHistory
    );
    console.log(res2);
    if (res2.body.success === false) {
      this.setState({ show: res2.body.message });
    }
    if (res2.body.success === true) {
      this.setState({ AssetHistory: [...this.state.AssetHistory, ...res2.body.data] });
      this.setState({ nextAssetHistory: res2.body.next });
    }
  };
  onChange = e => {
    e.preventDefault();
    this.setState({ id: e.target.value });
  };
  render() {
    return (
      <div>
        <Form
          style={{
            position: "relative",
            top: "50px",
            lest: "50px",
            width: "400px"
          }}
          onSubmit={this.getAssetHistory}
        >
          <h11> Enter asset's serial number to get the history :</h11>
          <Input
            onChange={this.onChange}
            className="mb-3 mt-3"
            type="text"
            name="id"
            placeholder="serial number"
          />
          <Button type="submit" color="teal lighten-1 ">
            Search For History
          </Button>
          <br />
          <Mytable history={this.state.AssetHistory} />
        </Form>
        {/* {show history} */}
      </div>
    );
  }
}
class myTokenAsset extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "200px",
          top: "100px",
          width: "400px",
          height: "40px"
        }}
      >
        Please sign in to be able to see this part!
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div style={{ position: "absolute", left: "500px", top: "100px" }}>
        <CoolTabs
          tabKey={"1"}
          style={{ width: 900, height: 700, background: "mdb-color lighten-1" }}
          activeTabStyle={{ background: "#4C7069", color: "white" }}
          unActiveTabStyle={{ background: "#719D94", color: "white" }}
          activeLeftTabBorderBottomStyle={{
            background: "mdb-color lighten-1",
            height: 4
          }}
          activeRightTabBorderBottomStyle={{
            background: "mdb-color lighten-1",
            height: 4
          }}
          tabsBorderBottomStyle={{ background: "#4C7069", height: 4 }}
          leftContentStyle={{ background: "mdb-color lighten-1" }}
          rightContentStyle={{ background: "mdb-color lighten-1" }}
          leftTabTitle={"Asset History"}
          rightTabTitle={"Token History"}
          leftContent={<Asset />}
          rightContent={<myTokenAsset />}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}
class User extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        <InfoCard />
        <Header />
      </div>
    );
  }
}
export default User;
