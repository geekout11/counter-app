import React from 'react'; 
import './Step.css';

const Step = (props) => { 

    return (
        <div className="step">
            <h3>Krok</h3>
            <input type="number" min="1" value={props.stepValue} onChange={props.updateStep}></input>  
        </div>
    )
}

export default Step; 