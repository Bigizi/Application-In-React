import React from "react";
import { LeftSide } from "../leftSide/leftSide";
import "./app.css";
import { Header } from "../header/header";
import { CardHeader } from "../cardHeader/cardHeader";
import { Card1 } from "../card1/card1";
// import { CardHeader2 } from "../cardHeader/CardHeader2";
// import {DiPhp} from "react-icons/di";
// import {Head} from "../head/head";
// import { IconsSection } from "../iconsSection/iconsSection";

let width={
    width: '100%',
    height: '100%'
};

export class App extends React.Component{
    render(){
        return(     
            <div id="app_main">
                <div style={width} id="left_side">
                    <LeftSide />
                </div>
                <div id="app_header">
                    <Header />
                </div> 
                <div id="title">
                    <CardHeader />
                </div>
                <div id="card">
                    <Card1 />
                </div>
                {/* <div id="crd">
                    <CardHeader2 />
                </div> */}
            </div>
            
        );
    }
}