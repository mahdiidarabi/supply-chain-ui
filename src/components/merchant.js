/** for sources or suppliers  */

import React, { Component } from "react";
import Tab from "react-bootstrap/Tabs";
import Tabs from "react-bootstrap/Tabs";
import MerchantPanel from "./MerchantPanel.js";
import CoolTabs from "react-cool-tabs";
import Header from "./header";
import Asset from "./MyAssets";
import Asset2 from "./AssetsCard";
import TxHis from "./TxHistoryCard";
import Mytable from "./AssetHistory";
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
  MyAssets,
  AllMyConReqs,
  AllMyUnConReqs,
  AllMyAssets,
  GetTransactionHistory
} from "./serverreq.js";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow
} from "mdbreact";


const mylimit = 5 ;

class Assets extends React.Component {
  state = {
    id: "",
    AssetHistory: [],
    nextAssetHistory: null,
    show: null
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
            width: "100%"
          }}
          onSubmit={this.getAssetHistory}
        >
          <h11> Enter asset's serial number to get the info :</h11>
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
      </div>
    );
  }
}

class MyTokens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: null,
      assetsCon: [],
      nextConReq: "",
      showConMore: true,

      assetsUnCon: [],
      nextUnConReq: "",
      showUnConMore: true,
      
      assets: [],
      nextAsset: "",
      showAssetMore: true,

      txHistory: [],
      nextTxHistory : "",
      showTxHistoryMore: true,
    };
  }

  getConReq = async () => {
    const res = await AllMyConReqs(this.state.nextConReq, localStorage.getItem("token"));
    console.log(res);
    if (res.body.success === true) {
      this.setState({ nextConReq: res.body.next });
      this.setState({ assetsCon: [...this.state.assetsCon, ...res.body.requests] })
      if (res.body.requests.length < mylimit){
        this.setState({showConMore : false})
      }
    }
    else {
      this.setState({showConMore : false})
    }
  };
  getUnConReq = async () => {
    const res = await AllMyUnConReqs(this.state.nextUnConReq, localStorage.getItem("token"));

    console.log(res);
    if (res.body.success === true) {
      this.setState({ nextUnConReq: res.body.next });
      this.setState({ assetsUnCon: [...this.state.assetsUnCon, ...res.body.requests] })
      if (res.body.requests.length < mylimit){
        this.setState({showUnConMore : false})
      }
    }
    else{
      this.setState({showUnConMore : false})
    }
  };

  getAssets = async () => {
    console.log("--------------------------");
    console.log("next next is " + this.state.nextAsset);
    const res = await AllMyAssets(this.state.nextAsset, localStorage.getItem("token"));
    console.log(res);
    if (res.body.success === true) {
      this.setState({ nextAsset: res.body.next });
      this.setState({ assets: [...this.state.assets, ...res.body.data] })
      if (res.body.data.length < mylimit){
        this.setState({showAssetMore : false})
      }
    }
    else{
      this.setState({showAssetMore : false})
    }
  };

  getTransactionHistory = async () => {
    const res2 = await GetTransactionHistory(localStorage.getItem("token"));
    console.log(res2);
    if (res2.body.success === true) {
      // this.setState({ nextAsset: res2.body.next });
      this.setState({ txHistory: [...this.state.txHistory, ...res2.body.data] })
      // if (res2.body.data.length < mylimit){
      //   this.setState({showAssetMore : false})
      // }
    }
    else{
      console.log("he");
      
      // this.setState({showAssetMore : false})
    }
  };
  componentDidMount() {
    this.getConReq();
    this.getUnConReq();
    this.getAssets();
    this.getTransactionHistory();
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
        }}
      >

        <h457>My Confirmed Requests : </h457> 
        <br />
        <br />
        {this.state.assetsCon.map((item, index) => <Asset asset={item} />)}
        <br />
        {this.state.showConMore ? <MDBBtn color="teal lighten-1 " onClick={this.getConReq}>Load More ...</MDBBtn> : null}
        <br />
        <h457>My Unconfirmed Requests : </h457>
        <br />
        <br />
        {this.state.assetsUnCon.map((item, index) => <Asset asset={item} />)}
        <br />
        {this.state.showUnConMore ? <MDBBtn color="teal lighten-1 " onClick={this.getUnConReq}>Load More ...</MDBBtn> : null}
        <br />
        <h457>My Assets : </h457> <br />
        <br />
        <br />
        {this.state.assets.map((item, index) => <Asset2 asset={item} />)}
        <br />
        {this.state.showAssetMore ? <MDBBtn color="teal lighten-1 " onClick={this.getAssets}>Load More ...</MDBBtn> : null}
        <br />
        <h457>My Transactions : </h457>
        <br />
        <br />
        {this.state.txHistory.map((item, index) => <TxHis accNum = {localStorage.getItem("number")}  data = {item} />)}
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
          style={{ width: 900, height: 8000, background: "mdb-color lighten-1" }}
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
          rightTabTitle={"Your Token And Assets History "}
          leftContent={<Assets />}
          rightContent={<MyTokens />}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}
class Merchant extends React.Component {
  state = {
    show: true
  };
  check = async () => {
    // check if user is logedin
    const res = await testToken(localStorage.getItem("token"));
    if (!(res.body.success === true)) {
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("username", "");
      localStorage.setItem("number", "");
    }
    if (res.body.message === "connection Problem") {
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("username", "");
      localStorage.setItem("number", "");
    }
  };
  componentDidMount() {
    this.check();
    if (
      !(
        localStorage.getItem("refreshToken") === "source" ||
        localStorage.getItem("refreshToken") === "supplier"
      )
    ) {
      this.setState({ show: false });
    }
  }
  render() {
    if (this.state.show === true) {
      return (
        <div>
          <Slider />
          <MerchantPanel id="" />
          <Header />
        </div>
      );
    } else {
      return (
        <div>
          <h122>You are not allowed in here!</h122>
          <MDBBtn href="/LoginPage">Login</MDBBtn>
          <MDBBtn href="/">Home</MDBBtn>
        </div>
      );
    }
  }
}


export default Merchant;
