import React from "react";
import './ButtonsPanel.css';

const ButtonsPanel = (props) => {

    return (
        <div className="buttons-panel">
            <button onClick={props.addOneStep}>Add 1</button>
            <button onClick={props.reInitValue}>ReInit</button>
            <button onClick={props.resetValue}>Reset</button>
            <button onClick={props.addStepsValue}>Zwiększ o {props.stepValue}</button>
        </div>
    )
}

export default ButtonsPanel;