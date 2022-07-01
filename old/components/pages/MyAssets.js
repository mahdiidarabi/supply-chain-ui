import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {ConfirmUser,AdminConfirmAsset,AdminConfirmAssetMicro} from '../serverReq/serverreq.js';
class AssetTab extends React.Component {
    constructor(props){
        super(props);
      this.state = {
          
          count:"",
          error:"",
          MicroSerial:""

        };
       

      }
    onChange = async (e)=>{
        this.setState({count:e.target.value});
    }
    onChange2 = async (e)=>{
        this.setState({MicroSerial:e.target.value});
    }
     onClick = async () =>{
         this.setState({error:""})
        if(this.state.count === ""){
            this.setState({error:"number can not be 0."})
        }
        else if(this.state.count > this.props.assetCount){
            this.setState({error:"number can not be more than requested!"})
        }
        else{
            if(this.props.micro === true){
        var s =this.state.MicroSerial.split("-");
        
        if(!(parseInt(s.length) === parseInt(this.state.count))){
            this.setState({error:"numbers of micro serials and accepted requests are not the same!"})  
        }
        else{
            const res= await AdminConfirmAssetMicro(localStorage.getItem('token'),parseInt(this.props.id),parseInt(this.state.count),s);
            console.log(res)
            window.location.reload();
        }}
        else{
            const res= await AdminConfirmAsset(localStorage.getItem('token'),this.props.id,this.state.count);
        
            window.location.reload();
        }
        }
        
    }
    onClick2 = async () =>{
        const res= await ConfirmUser(localStorage.getItem('token'),this.props.username,"false");
        window.location.reload();
    }
    render(){
       

    return(
        <MDBContainer style={{width:"830px"}}>
  <MDBCol>
  <MDBCard style={{width:"830px"}}>
     <MDBCardBody>
      <MDBCardText>
      <div><strong>Id : </strong><h13>{this.props.asset.id}   |  </h13><strong>Account number </strong><h13>{this.props.asset.account_number}   |  </h13><strong>Number of assets : </strong><h13>{this.props.asset.assets_count}   |  </h13><br/><strong>Number of confirmed assets: </strong><h13>{this.props.asset.confirmed_assets_count}</h13><strong> | Micro request: </strong><h13>{String(this.props.asset.is_micro_requested)}  |  </h13><strong>Is Request Ended? : </strong><h13>{String(this.props.asset.is_request_ended)}    </h13></div>
          </MDBCardText>
          
      {/* <button type="button" class="close" onClick={this.onClick2} aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button> */}
    </MDBCardBody>
  </MDBCard>
</MDBCol>

   
</MDBContainer>
    )
}



}


export default AssetTab;
