import React from "react";
import "./header.css";
import Profile from "./profile.PNG";
import {BsSearch,BsSliders,BsBell,BsChatLeftText} from "react-icons/bs";

export class Header extends React.Component{
    render(){
        return(
            <div id="header_main">
                <div id="dashboard">
                    <h1>Courses Dashboard</h1>
                    <p>Hello Crispin, welcome back!</p>
                </div>
                <div id="search">
                    <BsSearch className="header_icon" size="0.8em"/>
                    <input type="text" placeholder="search Dashboard"/>
                    <BsSliders className="header_icon" size="0.8em"/>
                </div>
                <div id="right_section">
                    <ul id="header_ul">
                        <li><div className="li_logo"><BsChatLeftText size="0.8em"/></div></li>
                        <li> <div className="li_logo"><BsBell size="0.8em"/></div></li>
                        <li>
                            <div id="img">
                                <img src={Profile} alt=""/>
                            </div>
                        </li>
                    </ul>
                    

                </div>
                
            </div>
        );
    }
}