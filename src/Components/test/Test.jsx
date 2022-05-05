import React from 'react';
import classes from "./Test.module.css";

const Test = (props) => {
    return (
        <div className={classes.test}>
            <div> x = {props.vars.x}</div>
            <div> y = {props.vars.y}</div>
            <div> operator = {props.vars.operator}</div>
            <div> current formula = {props.vars.currentFormula}</div>
            <div>solution = {props.vars.solution}</div>
            <div>operator pressed = {props.vars.operatorPressed}</div>
            <div>resolve pressed = {props.vars.resolvePressed}</div>
        </div>
    );
};

export default Test;

    // x: 0,
    // y: 0,
    // operator: '',
    // currentFormula: '',
    // solution: '',
    // operatorPressed: false,
    // resolvePressed: false