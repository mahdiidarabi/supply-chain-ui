/** Signed in users */
import Mytable from "./AssetHistory";
import React from "react";
import SidebarSignedin from "./sidebarSignedin.js";
import CoolTabs from "react-cool-tabs";
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
  MyAssets,
  getBalance,AllMyAssets,AllMyConReqs,AllMyUnConReqs, GetTransactionHistory
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
class Tokens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsCon: [],
      tokens: null,
      nextConReq:null,
      nextUnConReq:null,
      assetsUnCon: [],
      assets: [],
      txHistory:[]
    };
  }
  getConReq = async () => {
    const res = await AllMyConReqs(this.state.nextConReq,localStorage.getItem("token"));
    this.setState({nextConReq:res.body.next});
    console.log(res);
    if (res.body.success === true) {
      var add = [];
      for (var i = 0; i < res.body.requests.length; i++) {
        add.push(<Asset asset={res.body.requests[i]} />);
      }
      this.setState({ assetsCon: add });
    } else {
      var add = [];
      add.push(res.body.message);
      this.setState({ assetsCon: add });
    }
  };
  getUnConReq = async () => {
    const res = await AllMyUnConReqs(this.state.nextUnConReq,localStorage.getItem("token"));
    this.setState({nextUnConReq:res.body.next});
    console.log(res);
    if (res.body.success === true) {
      var add = [];
      for (var i = 0; i < res.body.requests.length; i++) {
        add.push(<Asset asset={res.body.requests[i]} />);
      }
      this.setState({ assetsUnCon: add });
    } else {
      var add = [];
      add.push(res.body.message);
      this.setState({ assetsUnCon: add });
    }
  };
  getAssets = async () => {
    const res = await AllMyAssets(this.state.nextAsset,localStorage.getItem("token"));
    this.setState({nextAsset:res.body.next});
    console.log(res);
    if (res.body.success === true) {
      var add = [];
      for (var i = 0; i < res.body.requests.length; i++) {
        add.push(<Asset asset={res.body.requests[i]} />);
      }
      this.setState({ assets: add });
    } else {
      var add = [];
      add.push(res.body.message);
      this.setState({ assets: add });
    }
  };
  getTransactionHistory = async () => {
    const res2 = await GetTransactionHistory(localStorage.getItem("token"));
    console.log(res2);
    var add=[];
    if(res2.body.success === true){
      for(var i = 0; i < res2.body.data.length; i++){
    add.push(
      <MDBContainer className="mt-3 mb-3" style={{ width: "830px" }}>
          <MDBCol>
            <MDBCard className="mt-3 mb-3" style={{ width: "830px" }}>
              <MDBCardBody className="mt-3 mb-3">
                <MDBCardText>
    <div>
                    <strong>Transaction Id: </strong>
                    <h13>{res2.body.data[i].TxId} | </h13>
                    <strong>Timestamp: </strong>
                    <h13>{res2.body.data[i].Timestamp} | </h13>
                    <strong>Value:<br/> </strong>
                    <h13>{Object.entries(res2.body.data[i].Value).map(([key, value]) => {
      return (<h13>{key} : {value}<br/></h13>);
}) }</h13>
                    <br />
                  </div>
                  </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>);
    }}
    this.setState({txHistory:add});
  };
  componentDidMount() {
    this.getConReq();
    this.getUnConReq();
    this.getAssets();
  }
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "100px",
          width: "400px",
          height: "40px"
        }}
      >
        <h457>My Confirmed Requests : </h457> <MDBBtn color="teal lighten-1 " onClick={this.getConReq}>Load More ...</MDBBtn>
        <br />
        <br />
        {this.state.assetsCon}
        <br />
        <br />
        <h457>My Unconfirmed Requests : </h457><MDBBtn color="teal lighten-1 " onClick={this.getUnConReq}>Load More ...</MDBBtn>
        <br />
        <br />
        {this.state.assetsUnCon}
        <br />
        <br />
        <h457>My Assets : </h457><br/><MDBBtn color="teal lighten-1 " onClick={this.getAssets}>Load More ...</MDBBtn>
        <br />
        <br />
        {this.state.assets}
        <br />
        <br />
        <h457>My Transactions : </h457>
        <br />
        <br />
        {this.state.txHistory}
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
          style={{ width: 900, height: 1500, background: "mdb-color lighten-1" }}
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
          rightTabTitle={"Your Token And Asset History"}
          leftContent={<Asset />}
          rightContent={<Tokens />}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}
class User extends React.Component {
  state = {
    balance: null,
    username: "",
    account: "",
    show: true
  };
  getbalance = async () => {
    const res = await getBalance(localStorage.getItem("token"));
    //console.log(res);
    this.setState({ balance: res.body.metadata });
    const res2 = await testToken(localStorage.getItem("token"));
    if (res2.body.success === true) {
      this.setState({ username: res2.body.username });
      this.setState({ account: res2.body.accountNumber });
    }
  };
  check = async e => {
    if (localStorage.getItem("token") === "") {
      this.setState({ show: false });
    }
    //check if the user is allowed here
    const res = await testToken(localStorage.getItem("token"));
   
    if (res.status === 0) {
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("username", "");
      localStorage.setItem("number", "");
      this.setState({ show: false });
    }
    if (res.body.success === false) {
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("username", "");
      localStorage.setItem("number", "");

      this.setState({ show: false });
    } else {
      if (!(res.body.userType === "enduser")) {
        this.setState({ show: false });
      }
    }
  };
  componentDidMount() {
    this.check();
    this.getbalance();
  }
  render() {
    if (this.state.show === true) {
      return (
        <div>
          <Slider />
          <SidebarSignedin
            username={this.state.username}
            balance={this.state.balance}
          />
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
export default User;
