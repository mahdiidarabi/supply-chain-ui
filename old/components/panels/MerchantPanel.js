import React from 'react';
import {MDBAnimation, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon, MDBCardImage } from "mdbreact";
import 'mdbreact/dist/css/mdb.css' ;
 import {getBalance,testToken} from '../serverReq/serverreq.js';
class loginPanel extends React.Component {
  getbalance = async ()=>{
    const res= await getBalance(localStorage.getItem('token'));
    this.setState({balance:res.body.metadata})
    const res2 =await testToken(localStorage.getItem("token"))
    if(res2.body.success === true){
      this.setState({username:res2.body.username});
      this.setState({account:res2.body.accountNumber});
      
    }
    
  }
  onClick= e=>{
      
    localStorage.setItem('token',"");
    localStorage.setItem('refreshToken',"");
    localStorage.setItem('username',"");
    localStorage.setItem('number',"");
   
  window.location.reload();
  }
   check=async (e)=>{
    const res2 = await testToken(localStorage.getItem('token'));
    console.log(res2)
  if(!(res2.body.success === true) ){
      localStorage.setItem('token',"");
      localStorage.setItem('refreshToken',"");
      localStorage.setItem('username',"");
      localStorage.setItem('number',"");
      this.props.history.push("/LoginPage");
      window.location.reload();

  }

  console.log("here")
 
  }
  componentDidMount(){
  // this.check()
    console.log(this.props);
    //get and name balance from api
    
   
    this.getbalance();
  }
  state={
    username:"",
    balance:"",
    account:""
  }
  render(){
return (
    <div  >
<MDBContainer >
  <MDBCard    style={{ width: "18rem",height:"100%", marginTop: "1rem",position: "absolute", left: "0px", top: "55px"   }}>
    <MDBCardHeader style={{background:"rgba(0, 150, 136, 0.3)"}}> <MDBCardImage cascade className="img-fluid" src="https://img.pngio.com/perfect-changer-email-authentication-merchant-png-400_400.png" /> </MDBCardHeader>
    <MDBCardBody style={{background:"rgba(0, 150, 136, 0.1)"}}>
      {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
     
      <MDBCardText >
        Username : {this.state.username} <br/>
        Balance : {this.state.balance} btc<br/>
        Account number : {this.state.account}
      </MDBCardText>
 
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/Transfer">Transfer Token</a>
      <br/>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/">Change your password</a>
      <br/>
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/Asset">Add or change assets</a>
      <br/>
      {/* <a style={{color:"rgba(0, 150, 136, 0.9)"}} href="/">Your assets history</a>
      <br/> */}
      <a style={{color:"rgba(0, 150, 136, 0.9)"}} onClick={this.onClick}>Log out</a>
      
      <br/>
      
     
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</div>
);}
}

export default loginPanel;