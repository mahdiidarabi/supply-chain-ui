import React from 'react';
import Card from 'react-bootstrap/Card';

class InfoCard extends React.Component {
    render(){
return(
<div>
<Card style={{ width: '15rem',position:"fixed",top:"300px",left:"230px" , background:"#e0f2f1"}}>
  <Card.Body>
    <Card.Title style={{color:"#ffbb33"}}>Warning!</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">You're not signed in</Card.Subtitle>
    <Card.Text>
      You don't have much options.Please login for more.
    </Card.Text>
    <Card.Link href="/SignUp">SignUp</Card.Link>
    <Card.Link href="/LoginPage">Login</Card.Link>
  </Card.Body>
</Card>;
</div>
)
    }


}
export default InfoCard;