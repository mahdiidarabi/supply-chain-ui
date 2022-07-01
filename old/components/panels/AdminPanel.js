import React from 'react';
import {MDBAnimation, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import 'mdbreact/dist/css/mdb.css' ;
import {findalluser,testToken,AllRequestAssets} from '../serverReq/serverreq.js';

//  import {} from '../serverReq/serverreq.js';
class AdminPanel extends React.Component {
    state={
        username:""
    }
    check= async (e)=>{
      const res2 = await testToken(localStorage.getItem('token'));
      if(!(res2.body.success === true) ){
        localStorage.setItem('token',"");
        localStorage.setItem('refreshToken',"");
        localStorage.setItem('username',"");
        localStorage.setItem('number',"");
        this.props.history.push("/LoginPage");
        window.location.reload();

    }
    else{
      const user= localStorage.getItem("username");
    this.setState({username:user});
    }
    }
    onClick= e=>{
      
        localStorage.setItem('token',"");
        localStorage.setItem('refreshToken',"");
        localStorage.setItem('username',"");
        localStorage.setItem('number',"");
       
      window.location.reload();
      }
  componentDidMount(){
  this.check()
  }

  render(){
return (
    <div  >
<MDBContainer >
  <MDBCard    style={{ width: "200px",height:"100%", marginTop: "1rem",position: "fixed", left: "0px", top: "55px"   }}>
    <MDBCardHeader style={{background:"#b0bec5"}}> <MDBCardImage style={{width:"200px",height:"150px"}} cascade className="img-fluid" src="https://png.pngtree.com/svg/20170904/f253cafc9c.svg" /> </MDBCardHeader>
    <MDBCardBody style={{background:"#cfd8dc"}}>
      {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
     
      <MDBCardText style={{color:"#455a64"}}>
        username : {this.state.username}
      </MDBCardText>
 
      <a style={{color:"#455a64"}} href="/Transfer">Transfer Token</a>
      <br/>
      {/* <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/">Change your password</a>
      <br/>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/Asset">Add or change assets</a>
      <br/> */}
      {/* <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/">Your assets history</a>
      <br/> */}
      <a style={{color:"#455a64"}} onClick={this.onClick}>Log out</a>
      <br/>
      
     
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</div>
);}
}

export default AdminPanel;