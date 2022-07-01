import React from 'react';
import Sticky from './headerReal.js';
import { FaFish } from "react-icons/fa";
class Header extends React.Component {
    render(){
        return(
            <Sticky>
            <header >
                <div className="logo">
                <p10>Caviar <FaFish /></p10>
                </div>
                <nav>
                    <ul>
                    <li className="first">
                            <a href= "/">Home</a>
                        </li>
                        <li className="first">
                            <a href= "/AboutUs">More About Us</a>
                        </li>
                        <li>
                            <a href= "SignUp">Sign Up</a>
                        </li>
                        <li>
                            <a href= "/My">My Page</a>
                        </li>
                        <li>
                            <a href= "LoginPage">Login</a>
                        </li>
                        <li className="last">
                            <a href= "ContactUs">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            </Sticky>
        );

    }

}
export default Header;
