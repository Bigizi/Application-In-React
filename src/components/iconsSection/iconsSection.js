import React from "react";
// import "./icons.css";
import {BsBookmarkFill,BsSearch} from "react-icons/bs";


export class IconsSection extends React.Component{

    render(){
        return(
            <div>
                <BsBookmarkFill className="icon" color="1E0A1C"/>
                <BsSearch idclassName="icon"/>
                <h1>hello</h1>
            </div>
        );
    }
}