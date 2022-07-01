import React from 'react';
import '../../Assets/css/wallpaper.css';
import WebTitle from '../Titles/webTitle.js';
import BackgroundPic from "../../Assets/img/backpic.jpg"

var sectionStyle = {
    width: "1517px",
    height: "650px",
    backgroundImage:  `url(${BackgroundPic})`
  };

  var styler = {
    backgroundColor: 'rgba(52, 52, 52, 0.7)'
  };
class Wallpaper extends React.Component {
render(){
return(
<div className="Wallpaper">

<h3 style={styler}>Caviar supply chain is a blockchain-powered network for caviar enterprises,<br /> enabling secure and frictionless dialogue between sensors,<br /> distributed ledgers and databases to optimise supply chain visibility</h3>
<h2><WebTitle /></h2>
    <section className="img-gradient" style={ sectionStyle }>
    </section>
</div>
);
}
resize = () => this.forceUpdate()

componentDidMount() {
  window.addEventListener('resize', this.resize)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.resize)
}
}

export default Wallpaper