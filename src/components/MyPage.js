/** MyPage button */

import React, { Component } from "react";

import {
  testToken,
  getAssetHistory,
  MyAssets
} from "./serverreq.js";

class My extends React.Component {
  check = async () => {
    const res2 = await testToken(localStorage.getItem("token"));
    if (res2.status === 0) {
      this.props.history.push("/User");
    } else if (res2.body.userType.includes("admin")) {
      this.props.history.push("/Admin");
    } else if (res2.body.userType.includes("source")) {
      this.props.history.push("/Merchant");
    } else if (res2.body.userType.includes("supplier")) {
      this.props.history.push("/Merchant");
    } else if (res2.body.userType.includes("enduser")) {
      this.props.history.push("/SignedInUser");
    }
  };
  componentDidMount() {
    this.check();
  }
  render() {
    return <div></div>;
  }
}
export default My;
