import React, { Component } from 'react';
import { FaQuestion,FaUnlock,FaLock } from "react-icons/fa";
import {findalluser,testToken,AllRequestAssets} from '../serverReq/serverreq.js';
import User from '../panels/table';
import AssetReqTab from '../panels/AssetRequestTable';
import Header from '../headerComponent/header';
import AdminPanel from '../panels/AdminPanel';
import { MDBBtn, MDBJumbotron, MDBContainer } from "mdbreact";
import {MDBMask, MDBView,} from "mdbreact";

class AdminPage extends React.Component{
    
    getData = async (e)=>{
        const res2 = await testToken(localStorage.getItem('token'));
        
        if(!(res2.body.success === true) ){
            localStorage.setItem('token',"");
            localStorage.setItem('refreshToken',"");
            localStorage.setItem('username',"");
            localStorage.setItem('number',"");
            this.props.history.push("/LoginPage");
            window.location.reload();

        }
        if(!(res2.body.userType.includes("admin"))){
            console.log("ok")
            this.props.history.push("/LoginPage");
            window.location.reload();
        }
        console.log("here")
        if ( !(localStorage.getItem('refreshToken').includes("admin"))){
            
            this.props.history.push("/LoginPage");
            window.location.reload();
 
        }
       
        const res= await findalluser(localStorage.getItem('token'));
        var adnull = [];
        var adtrue = [];
        var adfalse = [];
        
        console.log(res);
        for(var i = 0 ; i < res.body.users.length ;i++ ){
            console.log(res.body.users[i].isconfirmed);
            if((res.body.users[i].isconfirmed===null) && res.body.users[i].isadmin===false){
                // const s =this.createData(res.body.users[i].name,res.body.users[i].familyname,res.body.users[i].username,res.body.users[i].email)
                // 
                
                adnull.push(<User account={res.body.users[i].account_number} status="null" type={res.body.users[i].user_type} name={res.body.users[i].name} familyname={res.body.users[i].familyname} username={res.body.users[i].username} email={res.body.users[i].email}/>);
                adnull.push(<br/>)
            }
            else if((res.body.users[i].isconfirmed===true) && res.body.users[i].isadmin===false){
                // const s =this.createData(res.body.users[i].name,res.body.users[i].familyname,res.body.users[i].username,res.body.users[i].email)
                // 
                
                adtrue.push(<User account={res.body.users[i].account_number}  status="true" type={res.body.users[i].user_type} name={res.body.users[i].name} familyname={res.body.users[i].familyname} username={res.body.users[i].username} email={res.body.users[i].email}/>);
                adtrue.push(<br/>)
            }
            else if((res.body.users[i].isconfirmed===false) && res.body.users[i].isadmin===false){
                // const s =this.createData(res.body.users[i].name,res.body.users[i].familyname,res.body.users[i].username,res.body.users[i].email)
                // 
                
                adfalse.push(<User account={res.body.users[i].account_number}  status="false" type={res.body.users[i].user_type} name={res.body.users[i].name} familyname={res.body.users[i].familyname} username={res.body.users[i].username} email={res.body.users[i].email}/>);
                adfalse.push(<br/>)
            }



        }
        this.setState({waitings:adnull});
        this.setState({confirmed:adtrue});
        this.setState({rejected:adfalse});
        this.setState({loading:false});
        // console.log(res);
        const res3 = await AllRequestAssets(localStorage.getItem('token'));
        console.log(res3)
        var ended = []
        var notEnded = []
        for(var j = 0 ; j < res3.body.requests.length ;j++ ){
            if(res3.body.requests[j].is_request_ended === false){
                notEnded.push(<AssetReqTab status="notEnded" account={res3.body.requests[j].account_number} assetCount={res3.body.requests[j].assets_count} confirmedCount={res3.body.requests[j].confirmed_assets_count} micro={res3.body.requests[j].is_micro_requested} id={res3.body.requests[j].id} />)
            }
            else{
                ended.push(<AssetReqTab status="ended" account={res3.body.requests[j].account_number} assetCount={res3.body.requests[j].assets_count} confirmedCount={res3.body.requests[j].confirmed_assets_count} micro={res3.body.requests[j].is_micro_requested} id={res3.body.requests[j].id} />)
            }
        }
        this.setState({waitingAssets:notEnded});
        this.setState({endedAssets:ended});

    }
    componentDidMount(){
        
        this.getData();
    }
    state={
        loading:true,
        waitings:null,
        confirmed:null,
        rejected:null,
        waitingAssets:null,
        endedAssets:null
    }
    render(){
        if(this.state.loading === false){
         
        return(
            <div>
  
                <AdminPanel/>
  <div>              
  <MDBContainer style={{position:"absolute",top:"100px",left:"210px",width:"1430px"}}>
         <MDBJumbotron style={{background:"#eceff1",width:"1130px"}} >
           <h1 style={{textAlign: "center"}} className="h1-responsive">Users</h1>
           <strong><hr className="my-4"  /></strong>
           <p><FaQuestion/> waitings </p>
           <hr className="my-6" />
           {this.state.waitings}
           <hr className="my-6" />
           <p><FaUnlock/> confirmed</p>
           <hr className="my-6" />
           {this.state.confirmed}
           <hr className="my-6" />
           <p><FaLock/> rejected</p>
           <hr className="my-6" />
           {this.state.rejected}
           
         </MDBJumbotron>
         <MDBJumbotron style={{background:"#eceff1",width:"1130px"}} >
         <h1 style={{textAlign: "center"}} className="h1-responsive">Asset's Requests</h1>
         <strong><hr className="my-4"  /></strong>
         <p><FaQuestion/> waitings </p>
         <hr className="my-6" />
         {this.state.waitingAssets}
         <hr className="my-6" />
         <p><FaUnlock/> Ended</p>
         <hr className="my-6" />
         {this.state.endedAssets}
        
         
       </MDBJumbotron>
       </MDBContainer>
   {/* <MDBContainer style={{width:"1430px",position:"relative"}}>
      
     </MDBContainer>   */}
     </div>           
<Header/>         
            
            </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}}
export default AdminPage;