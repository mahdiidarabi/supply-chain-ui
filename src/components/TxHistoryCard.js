import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCollapse, MDBIcon } from 'mdbreact';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ConfirmUser, AdminConfirmAsset, AdminConfirmAssetMicro } from './serverreq.js';
class AssetTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "" ,
            transferType : "" ,
            sender : "" ,
            receiver :"",
            value : "",
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
                        <div style={{ marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <p><strong>Transation Id : </strong> <br/> <span style={{fontSize : "17px"}} > {this.props.data.Key}  </span> </p>

                            <p>
                                <h13>
                                    <MDBBtn color="teal lighten-1 " onClick={this.toggleCollapse("basicCollapse")} size="sm">
                                        More
                                    </MDBBtn>
                                </h13>
                            </p>
                        </div>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <div style={{ borderColor : "lightgrey" ,borderTopStyle: "solid"  ,marginTop : 0 ,marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <p><strong>Sender : </strong> <h13> {this.props.accNum == this.props.data.Value.sender ? 'You' : this.props.data.Value.sender  } </h13> </p>
                                <p><strong>Receiver : </strong> <h13> {this.props.accNum == this.props.data.Value.receiver ? 'You' : this.props.data.Value.receiver  } </h13> </p>
                                <p><strong>Value : </strong> <h13> {this.props.data.Value.value} SPMS </h13> </p>
                            </div>
                            
                        </MDBCollapse>
                    </MDBCardText >


                </MDBCard>

            </MDBContainer>
        )

    }



}


export default AssetTab;
