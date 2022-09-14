import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: ''
        };

    }

    addOne = () => {
        this.setState(prevState => {
            return ({
                counterValue: prevState.counterValue + 1
            });
        });
    }

    addSteps = () => {
        this.setState(prevState => {
            return ({
                counterValue: prevState.counterValue + +(this.state.stepValue)
            });
        });
    }

    updateStep = (e) => {
        this.setState({
            stepValue: e.target.value
        });
    }

    reInit = () => {
        this.setState({
            counterValue: this.props.initValue
        });
    }

    reset = () => {
        this.setState({
            counterValue: 0
        });
    }


    render() {

        return (
            <div className="counter">
                Counter:
                <Display counterCurrentValue={this.state.counterValue} />
                <ButtonsPanel addOneStep={this.addOne} resetValue={this.reset} reInitValue={this.reInit} addStepsValue={this.addSteps} stepValue={this.state.stepValue}/>
                <Step updateStep={this.updateStep}/>
            </div>
        );
    }
}


export default Counter;