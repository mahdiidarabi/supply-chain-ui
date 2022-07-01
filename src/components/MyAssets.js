import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ConfirmUser, AdminConfirmAsset, AdminConfirmAssetMicro } from './serverreq.js';
class AssetTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            count: "",
            error: "",
            MicroSerial: ""

        };


    }

    onChange = async (e) => {
        this.setState({ count: e.target.value });
    }
    onChange2 = async (e) => {
        this.setState({ MicroSerial: e.target.value });
    }
    onClick = async () => {
        this.setState({ error: "" })
        if (this.state.count === "") {
            this.setState({ error: "number can not be 0." })
        }
        else if (this.state.count > this.props.assetCount) {
            this.setState({ error: "number can not be more than requested!" })
        }
        else {


            const res = await AdminConfirmAssetMicro(localStorage.getItem('token'), parseInt(this.props.id), parseInt(this.state.count));
            console.log(res)
            window.location.reload();
        }

    }


    onClick2 = async () => {
        const res = await ConfirmUser(localStorage.getItem('token'), this.props.username, "false");
        window.location.reload();
    }
    render() {
        if (this.props.hist === true) {
            return (
                <MDBContainer style={{ width: "830px" }}>
                    <MDBCol>
                        <MDBCard style={{ width: "830px" }}>
                            <MDBCardBody>
                                <MDBCardText>
                                    <div><strong>serial number : </strong><h13>{this.props.asset.seNo}   |  </h13><strong>holder </strong><h13>{this.props.asset.holder}   |  <br /> </h13><strong>location : </strong><h13>{this.props.asset.location}   | <br /> </h13><br /><strong>temperature: </strong><h13>{this.props.asset.temperature}</h13></div>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>


                </MDBContainer>
            )
        }
        else {
            if (this.props.myassets === true) {
                return (
                    <MDBContainer style={{  width: "100%" }}>

                        <MDBCard style={{ width: "100%" }}>

                            <MDBCardText>
                                <div><strong>Created on : </strong><h13>{this.props.asset.created_on}   |  </h13><strong>current holder </strong><h13>{this.props.asset.current_holder}   |  </h13><strong>first holder : </strong><h13>{this.props.asset.first_holder}   |  </h13><br /><strong>is micro assigned: </strong><h13>{this.props.asset.is_micro_assigned}</h13><strong> | micro id: </strong><h13>{String(this.props.asset.micro_id)}  |  </h13><strong>micro last login : </strong><h13>{String(this.props.asset.micro_last_login)}  |  </h13><strong>micro password : </strong><h13>{String(this.props.asset.micro_password)}  |  </h13><strong>micro server ip: </strong><h13>{String(this.props.asset.micro_server_ip)}  |  </h13><strong>serial number : </strong><h13>{String(this.props.asset.serial_number)}  |  </h13><strong>start on: </strong><h13>{this.props.asset.start_on}  |  </h13><strong>request id: </strong><h13>{this.props.asset.request_id}    </h13></div>
                            </MDBCardText>
                        </MDBCard>



                    </MDBContainer>
                )
            }
            else {
                return (
                    <MDBContainer style={{ marginTop: "20px", width: "100%" }}>

                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardText>
                                    <div><strong>Id : </strong> <h13> {this.props.asset.id}   |  </h13> <strong> Account number </strong> <h13> {this.props.asset.account_number}   |  </h13> <strong> Number of assets : </strong> <h13> {this.props.asset.assets_count}   |  </h13> <br /><strong> Number of confirmed assets: </strong> <h13> {this.props.asset.confirmed_assets_count} </h13> <strong> | Micro request: </strong> <h13> {String(this.props.asset.is_micro_requested)}  |  </h13> <strong> Is Request Ended? : </strong> <h13> {String(this.props.asset.is_request_ended)}    </h13></div>
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBContainer>
                )
            }
        }
    }


}


export default AssetTab;
