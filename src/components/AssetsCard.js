import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCollapse, MDBIcon } from 'mdbreact';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ConfirmUser, AdminConfirmAsset, AdminConfirmAssetMicro } from './serverreq.js';
class AssetTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: ""
        };
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {


        return (
            <MDBContainer style={{  marginTop : "20px" ,width: "100%" }}>
                <MDBCard style={{ justifySelf : "center",width: "100%" }}>
                    <MDBCardText>
                        <div style={{ paddingTop : "20px" , marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <p><strong>Asset Id : </strong> <h13> {this.props.asset.Key}  </h13> </p>
                            <p><strong>Asset : </strong> <h13> {this.props.asset.Value.type} </h13> </p>
                            <p><strong>Asset Type : </strong> <h13> {this.props.asset.Value.variable} </h13> </p>
                            <p>
                                <h13>
                                    <MDBBtn color="teal lighten-1 " onClick={this.toggleCollapse("basicCollapse")} size="sm" >
                                        More
                                    </MDBBtn>
                                </h13>
                            </p>
                        </div>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <div style={{ paddingTop : "20px" ,borderColor : "lightgrey" ,borderTopStyle: "solid" ,marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <p><strong> Temperature  </strong> <br /><h13> {this.props.asset.Value.temperature == "notSet" ? "-" : this.props.asset.Value.temperature}&deg;C </h13> </p>
                                <p><strong>Humidity  </strong><br /> <h13> {this.props.asset.Value.humidity == "notSet" ? "-" : this.props.asset.Value.humidity} % </h13> </p>
                                <p><strong>Location  </strong> <br /><h13> {this.props.asset.Value.location == "notSet" ? "-" : this.props.asset.Value.location} </h13> </p>
                                <p><strong>Last Change  </strong> <br /><h13> {this.props.asset.Value.recentFunc} </h13> </p>
                            </div>
                        </MDBCollapse>
                    </MDBCardText >


                </MDBCard>

            </MDBContainer>
        )

    }



}


export default AssetTab;
