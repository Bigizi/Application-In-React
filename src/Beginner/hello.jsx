import React from "react";
import dog from './dog.jpg';
// import './hello.css';

let myImage = {
    title:'This is the Image',
    src:dog
}
let imageStyle = {
    width: 400,
    height: 400,
    borderRadius: '50%',
    transform: 'translateX(100)',
    opacity:0.5,
    
}
export class MyImage extends React.Component {
   
    render() { 
        
        return(
            <div>
                <h1>{myImage.title}</h1>
                <img src={myImage.src} alt={myImage.title} style={imageStyle}/>
            </div>
            

        );
    }
}


