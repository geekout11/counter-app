import React from "react";
import './Display.css';


const Display = (props) => {

    return (
        <span className={`value ${(props.counterCurrentValue <= 5) ? `blue` : `red`}`}>
            {props.counterCurrentValue}
        </span>
    )
}


export default Display;