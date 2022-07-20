import React from "react";
import man from "./man.jpg";
import "./cardHeader.css";

export class CardHeader extends React.Component{

    render(){
        return(
            <div id="card1_header">
                <header>
                    <h1>Your Courses</h1>
                    <button>PREMIUM</button>
                    <img src={man} alt="this the dog"/>
                    <p>26 courses</p>
                </header>

            </div>
        );
    }
}