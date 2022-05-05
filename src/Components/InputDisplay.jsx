import React from "react";
import '../index.css'

const InputDisplay = (props) => {
    return (
        <input className="inputDisplay" value={props.value} onChange={event => {console.log(event)}}/>
    )
}

export default InputDisplay