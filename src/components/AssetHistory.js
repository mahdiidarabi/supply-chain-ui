import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCollapse, MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ConfirmUser, AdminConfirmAsset, AdminConfirmAssetMicro } from './serverreq.js';
const PersianDate = require('jalali-moment')

class AssetTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
        };
    }

    // toggleCollapse = collapseID => () => {
    //     this.setState(prevState => ({
    //         collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    //     }));
    // }

    render() {

        console.log(this.props.history);
        

        return (
            this.props.history.length > 0 ?
                <MDBContainer style={{ width: "100%" }}>
                        <br />
                        <h457>Asset Serial Number : {this.props.history[0].Value.seNo}</h457>
                        <br />
                        <br />
                   
                            <MDBCardText >
                                <MDBTable striped style={{ width: "100%" }} >
                                    <MDBTableHead color="teal lighten-1" textWhite>
                                        <tr>
                                            <th style={{ textAlign: "center" }}>Index</th>
                                            <th style={{ textAlign: "center" }}>Asset</th>
                                            <th style={{ textAlign: "center" }}>Asset Type</th>
                                            <th style={{ textAlign: "center" }}>Temperature</th>
                                            <th style={{ textAlign: "center" }}>Humidity</th>
                                            <th style={{ textAlign: "center" }}>Location</th>
                                            <th style={{ textAlign: "center" }}>Holder</th>
                                            <th style={{ textAlign: "center" }}>Status</th>
                                            <th style={{ textAlign: "center" }}>Date</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {this.props.history.map((asset, index) => {
                                            
                                            
                                            return (
                                            <tr>
                                                <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.type }</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.variable}</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.temperature == "notSet" ? "-" : asset.Value.temperature}&deg;C</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.humidity == "notSet" ? "-" : asset.Value.humidity}%</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.location == "notSet" ? "-" : asset.Value.location}</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.holder}</td>
                                                <td style={{ textAlign: "center" }}>{asset.Value.recentFunc}</td>
                                                <td style={{ textAlign: "center" }}>{PersianDate(asset.Timestamp * 1000).locale('fa').format('YYYY/M/D , HH:mm')}</td>
                                            </tr>

                                            )
                                        
                                        }
                                        
                                        )}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardText >

                            <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCollapse>


                </MDBContainer> : null


        );

    }



}


export default AssetTab;
