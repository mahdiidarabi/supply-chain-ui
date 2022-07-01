/** admin page  */
import React, { Component } from "react";
import { FaQuestion, FaUnlock, FaLock } from "react-icons/fa";
import {
  findalluser,
  testToken,
  AllRequestAssets,
  finduser,
  findNotseenuser,
  findconfirmeduser,
  findRejectedUser,
  findallConfirmedRequest,
  findallNotConfirmedRequest
} from "./serverreq.js";
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
import User from "./table";
import AssetReqTab from "./AssetRequestTable";
import Header from "./header";
import AdminPanel from "./AdminPanel";
import { MDBBtn, MDBJumbotron, MDBContainer } from "mdbreact";
class AdminPage extends React.Component {

  //load more users
  LoadMoreNull = async e =>{
    console.log(this.state.nextNull);
    const resNull = await findNotseenuser(localStorage.getItem("token"),this.state.nextNull);  
    var adnull = [];
    if(!(resNull.body.message === "no user found")){

    for (var i = 0; i < resNull.body.users.length; i++) {
     
        adnull.push(
          <User
            account={resNull.body.users[i].account_number}
            status="null"
            type={resNull.body.users[i].user_type}
            name={resNull.body.users[i].name}
            familyname={resNull.body.users[i].familyname}
            username={resNull.body.users[i].username}
            email={resNull.body.users[i].email}
          />
         
        );
        console.log(resNull.body.users[i].account_number);
        adnull.push(<br />);}}
        this.setState({ waitings: adnull });
        this.setState({ nextNull: resNull.body.next });
      }
      /////////////////////////////////////////////////////////////
      LoadMoreTrue = async e =>{
        
        const resTrue = await findconfirmeduser(localStorage.getItem("token"),this.state.nextTrue);
        
        //console.log(this.state.confirmed)
        var adtrue =[];
        if(!(resTrue.body.message === "no user found")){
        for (var i = 0; i < resTrue.body.users.length; i++) {
        adtrue.push(
          <User
            account={resTrue.body.users[i].account_number}
            status="true"
            type={resTrue.body.users[i].user_type}
            name={resTrue.body.users[i].name}
            familyname={resTrue.body.users[i].familyname}
            username={resTrue.body.users[i].username}
            email={resTrue.body.users[i].email}
          />
        );
        adtrue.push(<br />);
      }}
      
      this.setState({ confirmed: adtrue }); 
      this.setState({ nextTrue: resTrue.body.next });
    }
    /////////////////////////////////////////////////////////
      LoadMoreFalse = async e =>{
        const resFalse = await findRejectedUser(localStorage.getItem("token"),this.state.nextFalse); 
        var adfalse = [];
        if(!(resFalse.body.message === "no user found")){
      for (var i = 0; i < resFalse.body.users.length; i++) {
        adfalse.push(
          <User
            account={resFalse.body.users[i].account_number}
            status="false"
            type={resFalse.body.users[i].user_type}
            name={resFalse.body.users[i].name}
            familyname={resFalse.body.users[i].familyname}
            username={resFalse.body.users[i].username}
            email={resFalse.body.users[i].email}
          />
        );
        adfalse.push(<br />);
      }}
      this.setState({ rejected: adfalse });
      this.setState({ nextFalse: resFalse.body.next });
    }
  /////////////////////////////////////////////////////////////  
  LoadMoreAssetCon = async e =>{
    const resCon = await findallConfirmedRequest(localStorage.getItem("token"),this.state.nextCon);
    console.log(resCon);
    var ended =[];
    if(!(resCon.body.message === "no Asset request found")){
    for (var j = 0; j < resCon.body.requests.length; j++) {
      ended.push(
        <AssetReqTab
          status="ended"
          account={resCon.body.requests[j].account_number}
          assetCount={resCon.body.requests[j].assets_count}
          confirmedCount={resCon.body.requests[j].confirmed_assets_count}
          micro={resCon.body.requests[j].is_micro_requested}
          id={resCon.body.requests[j].id}
        />
      );
    }}
  this.setState({ endedAssets: ended });
  this.setState({ nextCon: resCon.body.next });
  }
  ///////////////////////////////////////////////////////////////////
  LoadMoreAssetUnCon = async e =>{
    const resUnCon = await findallNotConfirmedRequest(localStorage.getItem("token"),this.state.nextUnCon);
    var notEnded = [];
    if(!(resUnCon.body.message === "no Asset request found")){
    for (var j = 0; j < resUnCon.body.requests.length; j++) {
      notEnded.push(
        <AssetReqTab
          status="ended"
          account={resUnCon.body.requests[j].account_number}
          assetCount={resUnCon.body.requests[j].assets_count}
          confirmedCount={resUnCon.body.requests[j].confirmed_assets_count}
          micro={resUnCon.body.requests[j].is_micro_requested}
          id={resUnCon.body.requests[j].id}
        />
      );
    }}  
  this.setState({ waitingAssets : notEnded });
  this.setState({ nextUnCon: resUnCon.body.next });
  }
  // get all data needed to show to admin
  getData = async e => {
    //check if the person is admin
    const res2 = await testToken(localStorage.getItem("token"));

    if (!(res2.body.success === true)) {
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("username", "");
      localStorage.setItem("number", "");
      this.props.history.push("/LoginPage");
      window.location.reload();
    }
    if (!res2.body.userType.includes("admin")) {
      this.props.history.push("/LoginPage");
      window.location.reload();
    }

    if (!localStorage.getItem("refreshToken").includes("admin")) {
      this.props.history.push("/LoginPage");
      window.location.reload();
    }
    //get users
    const resNull = await findNotseenuser(localStorage.getItem("token"),this.state.nextNull);  
    const resTrue = await findconfirmeduser(localStorage.getItem("token"),this.state.nextTrue); 
    const resFalse = await findRejectedUser(localStorage.getItem("token"),this.state.nextFalse); 
    this.setState({ nextNull: resNull.body.next });
    console.log(this.state.nextNull);
    this.setState({ nextTrue: resTrue.body.next });
    this.setState({ nextFalse: resFalse.body.next });
    var adnull = [];
    var adtrue = [];
    var adfalse = [];
    console.log(resCon);
    console.log(resTrue);
    console.log(resFalse);
    if(!(resNull.body.message === "no user found")){
    for (var i = 0; i < resNull.body.users.length; i++) {
      console.log(resNull.body.users[i].account_number);
        adnull.push(
          <User
            account={resNull.body.users[i].account_number}
            status="null"
            type={resNull.body.users[i].user_type}
            name={resNull.body.users[i].name}
            familyname={resNull.body.users[i].familyname}
            username={resNull.body.users[i].username}
            email={resNull.body.users[i].email}
          />
        );
        adnull.push(<br />);}}
        if(!(resTrue.body.message === "no user found")){
        for (var i = 0; i < resTrue.body.users.length; i++) {
        adtrue.push(
          <User
            account={resTrue.body.users[i].account_number}
            status="true"
            type={resTrue.body.users[i].user_type}
            name={resTrue.body.users[i].name}
            familyname={resTrue.body.users[i].familyname}
            username={resTrue.body.users[i].username}
            email={resTrue.body.users[i].email}
          />
        );
        adtrue.push(<br />);
      } }
      if(!(resFalse.body.message === "no user found")){
      for (var i = 0; i < resFalse.body.users.length; i++) {
        adfalse.push(
          <User
            account={resFalse.body.users[i].account_number}
            status="false"
            type={resFalse.body.users[i].user_type}
            name={resFalse.body.users[i].name}
            familyname={resFalse.body.users[i].familyname}
            username={resFalse.body.users[i].username}
            email={resFalse.body.users[i].email}
          />
        );
        adfalse.push(<br />);
      }}
    this.setState({ waitings: adnull });
    this.setState({ confirmed: adtrue });
    this.setState({ rejected: adfalse });
    this.setState({ loading: false });
    // get all asset requests
    const resCon = await findallConfirmedRequest(localStorage.getItem("token"));
    const resUnCon = await findallNotConfirmedRequest(localStorage.getItem("token"));
    console.log("-------------------------------")
    console.log(resCon);
    console.log(resUnCon);
    var ended = [];
    var notEnded = [];
    if(!(resUnCon.status === 401)){
    for (var j = 0; j < resUnCon.body.requests.length; j++) {
        notEnded.push(
          <AssetReqTab
            status="notEnded"
            account={resUnCon.body.requests[j].account_number}
            assetCount={resUnCon.body.requests[j].assets_count}
            confirmedCount={resUnCon.body.requests[j].confirmed_assets_count}
            micro={resUnCon.body.requests[j].is_micro_requested}
            id={resUnCon.body.requests[j].id}
          />
        );}}
      if(!(resCon.status === 401)){
      for (var j = 0; j < resCon.body.requests.length; j++) {
        ended.push(
          <AssetReqTab
            status="ended"
            account={resCon.body.requests[j].account_number}
            assetCount={resCon.body.requests[j].assets_count}
            confirmedCount={resCon.body.requests[j].confirmed_assets_count}
            micro={resCon.body.requests[j].is_micro_requested}
            id={resCon.body.requests[j].id}
          />
        );
      }}
    this.setState({ endedAssets: ended });
    this.setState({ waitingAssets: notEnded });
    this.setState({ nextCon: resCon.body.next });
    this.setState({ nextUnCon: resUnCon.body.next });
    
  };
  componentDidMount() {
    this.getData();
  }
  getUser = async e =>{
    e.preventDefault();
    console.log(this.state.username);
    const res = await finduser(this.state.username,localStorage.getItem("token"));
    var user=[];
    console.log(res);
    if(res.body.success === true){
      console.log(res.body.user.isconfirmed);
user.push(<User
            account={res.body.user.account_number}
            status= {String(res.body.user.isconfirmed)}
            type={res.body.user.user_type}
            name={res.body.user.name}
            familyname={res.body.user.familyname}
            username={res.body.user.username}
            email={res.body.user.email}
          />);
    }
    this.setState({show:user});
  }
  onChangeUsername = e=>{
    e.preventDefault();
    this.setState({ username: e.target.value });
  }
  state = {
    loading: true,
    waitings: null,
    confirmed: null,
    rejected: null,
    waitingAssets: null,
    endedAssets: null,
    nextFalse:null,
    nextNull:null,
    nextTrue:null,
    nextCon:null,
    nextUnCon:null,
    username:null,
    show:null,
    prevFalse:null,
    prevNull:null,
    prevTrue:null,
    prevCon:null,
    prevUnCon:null,
    
  };
  render() {
    
    
    if (this.state.loading === false) {
     
      return (
        <div>
          <AdminPanel />
          <div>
            <MDBContainer
              style={{
                position: "absolute",
                top: "100px",
                left: "210px",
                width: "1430px"
              }}
            >
              <MDBJumbotron style={{ background: "#eceff1", width: "1130px" }}>
                <h1 style={{ textAlign: "center" }} className="h1-responsive">
                  Users
                  
                </h1>
                <strong>
                  <hr className="my-4" />
                </strong>
                <Form
          style={{
            position: "relative",
            top: "50px",
            lest: "50px",
            width: "400px"
          }}
          onSubmit={this.getUser}
        >
          <h11> Enter username to get the user :</h11>
          <Input
            onChange={this.onChangeUsername}
            className="mb-3 mt-3"
            type="text"
            name="id"
            placeholder="username"
          />
          <Button type="submit" color="red">
            Search For User
          </Button>
          <br />
          {this.state.show}
        </Form>
        <br />
        <br />
                <p>
                  <FaQuestion /> waitings{" "}
                  
                </p>
                <hr className="my-6" />
                {this.state.waitings}
                <MDBBtn color="red" onClick={this.LoadMoreNull}>Next</MDBBtn>
                <hr className="my-6" />
                <p>
                  <FaUnlock /> confirmed
                </p>
                <hr className="my-6" />
                {this.state.confirmed}
                <MDBBtn color="red" onClick={this.LoadMoreTrue}>Next</MDBBtn>
                <hr className="my-6" />
                <p>
                  <FaLock /> rejected
                </p>
                <hr className="my-6" />
                {this.state.rejected}
                <MDBBtn color="red" onClick={this.LoadMoreFalse}>Next</MDBBtn>
              </MDBJumbotron>
              <MDBJumbotron style={{ background: "#eceff1", width: "1130px" }}>
                <h1 style={{ textAlign: "center" }} className="h1-responsive">
                  Asset's Requests
                </h1>
                <strong>
                  <hr className="my-4" />
                </strong>
                <p>
                  <FaQuestion /> waitings{" "}
                </p>
                <hr className="my-6" />
                {this.state.waitingAssets}
                <MDBBtn color="red" onClick={this.LoadMoreAssetUnCon}>Next</MDBBtn>
                <hr className="my-6" />
                <p>
                  <FaUnlock /> Ended
                </p>
                <hr className="my-6" />
                {this.state.endedAssets}
                <MDBBtn color="red" onClick={this.LoadMoreAssetCon}>Next</MDBBtn>
                
              </MDBJumbotron>
            </MDBContainer>
          </div>
          <Header />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default AdminPage;