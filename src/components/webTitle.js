import React from 'react';
import './webTitle.css';
var styler = {
  backgroundColor: 'rgba(52, 52, 52, 0.7)'
};
class webTitle extends React.Component {
    render(){
    return(
        <div>
            <h style={styler} >Caviar Supply Management</h>
        </div>
    );
}}
export default webTitle