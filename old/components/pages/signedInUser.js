import  React  from  'react';
import SidebarSignedin from '../panels/sidebarSignedin.js';

import CoolTabs from 'react-cool-tabs';



import Sidebar from '../panels/sidebar.js';
import InfoCard from '../panels/infoCard.js';
import { MDBDataTable } from 'mdbreact';
import Header from "../headerComponent/header";
import {Input, Button, Card, CardBody, CardFooter, Col, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {testToken,getAssetById,MyAssets,getBalance} from '../serverReq/serverreq.js';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol , MDBContainer} from 'mdbreact';
const DatatablePage = () => {

  // return (
  //   // <MDBDataTable
  //   //   striped
  //   //   bordered
  //   //   hover
  //   //   data={data}
  //   // />
  // );
}




class Content1 extends React.Component {
  state={
    id:"",
    show:null
  }
  getAssetById = async (e) => {
    this.setState({show:""})
    e.preventDefault();
    const res2 = await getAssetById(localStorage.getItem('token'),this.state.id);
    console.log(res2)
    if(res2.body.success === true){
    var add= []
    add.push(<MDBContainer className="mt-3 mb-3" style={{width:"830px"}}>
    <MDBCol>
    <MDBCard className="mt-3 mb-3" style={{width:"830px"}}>
       <MDBCardBody className="mt-3 mb-3">
        <MDBCardText>
        <div><strong>Request id: </strong><h13>{res2.body.assets[0].request_id}   |  </h13><strong>First holder: </strong><h13>{res2.body.assets[0].first_holder}   |  </h13><strong>is micro assigned: </strong><h13>{String(res2.body.assets[0].is_micro_assigned)}</h13><strong> | Has the micro started working?: </strong><h13>{String(res2.body.assets[0].is_micro_startworking)}</h13><strong> |  Micro id: </strong><h13>{res2.body.assets[0].micro_id}</h13><br/></div>
        </MDBCardText>
        
        {/* <button type="button" class="close" onClick={this.onClick2} aria-label="Close">
      <span aria-hidden="true">&times;</span>
  </button> */}
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  
     
  </MDBContainer>)
  this.setState({show:add})}
  }
onChange= e =>{
  e.preventDefault();
this.setState({id:e.target.value})
}
  render() {
    return <div >
      <Form style={{position:"relative",top:"50px",lest:"50px",width:"400px"}} onSubmit={this.getAssetById}>
      <h11> Enter asset id to get the history :</h11>
        <Input onChange={this.onChange} className="mb-3 mt-3" type="text" name="id" placeholder="asset id" />
        <Button type="submit" color="teal lighten-1 " >Search For History</Button>
        <br/>
        {this.state.show}
      </Form>
    {/* {show history} */}
    </div>
  }
}
  class Content2 extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        assets:null,
        tokens:null
      }
    }
    componentDidMount(){
    // fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid=66de5181e9048a208c1116196f00f992&units=metric`)
    //     .then(response => response.json())
    //     .then(data => this.setState({assets}));
    // fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid=66de5181e9048a208c1116196f00f992&units=metric`)
    //     .then(response => response.json())
    //     .then(data => this.setState({tokens}));
    }
    render() {
      return <div style={{position:"absolute",left:"200px",top:"100px",width: "400px", height: "40px"}}>
    {/* {show assets and tokens} */}
      </div>
    }
  }
  
   class  Example  extends  React.Component {
   
  render() {
     return (
       <div style={{position:"absolute",left:"500px",top:"100px"}}>
           <CoolTabs
             tabKey={'1'}
             style={{ width:  900, height:  700, background:  'mdb-color lighten-1' }}
             activeTabStyle={{ background:  '#4C7069', color:  'white' }}
             unActiveTabStyle={{ background:  '#719D94', color:  'white' }}
             activeLeftTabBorderBottomStyle={{ background:  'mdb-color lighten-1', height:  4 }}
             activeRightTabBorderBottomStyle={{ background:  'mdb-color lighten-1', height:  4 }}
             tabsBorderBottomStyle={{ background:  '#4C7069', height:  4 }}
             leftContentStyle={{ background:  'mdb-color lighten-1' }}
             rightContentStyle={{ background:  'mdb-color lighten-1' }}
             leftTabTitle={'Asset History'}
             rightTabTitle={'Your Token And Asset History'}
             leftContent={<Content1/>}
             rightContent={<Content2/>}
             borderTransitionStyle={'all 0.6s ease-in'}/>
       </div>
  );
  }}
class User extends  React.Component {
 
  state={
    balance:null,
    username:"",
    account:"",
    show:true
  }
 getbalance = async ()=>{
   const res= await getBalance(localStorage.getItem('token'));
   console.log(res)
   this.setState({balance:res.body.metadata})
   const res2 =await testToken(localStorage.getItem("token"))
   if(res2.body.success === true){
     this.setState({username:res2.body.username});
     this.setState({account:res2.body.accountNumber});
     
   }
   
 }
  check = async(e)=>{
    if(localStorage.getItem("token")===""){
      //this.props.history.push("/LoginPage");
      this.setState({show:false})
      
    }
    const res = await testToken(localStorage.getItem("token"));
    console.log(res)
    if(res.status === 0){
      localStorage.setItem('token',"");
      localStorage.setItem('refreshToken',"");
            localStorage.setItem('username',"");
            localStorage.setItem('number',"");
            this.setState({show:false})
         
    }
    if(res.body.success === false){
      localStorage.setItem('token',"");
            localStorage.setItem('refreshToken',"");
            localStorage.setItem('username',"");
            localStorage.setItem('number',"");
         
            this.setState({show:false})
    }
    else{
      if(!(res.body.userType === "enduser")){
       this.setState({show:false})
      }
    }
  }
  componentDidMount(){
    this.check();
    this.getbalance();
  }
    render() {
    if(this.state.show===true){
       return (
       <div>
         
         <Example/>
         <SidebarSignedin username={this.state.username} balance={this.state.balance}/>
         <Header/>
         </div>
    
  
       )
      
      }
      else{
        return(
          <div>
              <h122>You are not allowed in here!</h122>
              <MDBBtn href="/LoginPage">Login</MDBBtn>
              <MDBBtn href="/">Home</MDBBtn>
        
          </div>
      )
      }
      }}
  export default User;