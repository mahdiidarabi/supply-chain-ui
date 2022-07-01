import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import  React  from  'react';

import { FaHome } from "react-icons/fa";
// Be sure to include styles at some point, probably during your bootstraping
import '../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidebar extends React.Component {
    render(){
        return(
            <div   >
                <SideNav 
    onSelect={(selected) => {
        if(selected.eventKey==="Login"){
            
        }
    }}
>
    <SideNav.Toggle  />
    <SideNav.Nav defaultSelected="home" >
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <FaHome className="m-2"/>
                 Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                For more options...
            </NavText>
            <NavItem eventKey="Signup">
                <NavText>
                    Sign Up
                </NavText>
            </NavItem>
            <NavItem eventKey="Login">
                <NavText>
                   Login
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
            </div>)
        
        }}
export default Sidebar;

