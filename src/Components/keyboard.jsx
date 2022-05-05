import React from "react";

function Keyboard({buttonHandler}) {
    return (
        <div className="keyboard">

            <button className="percent" onClick={buttonHandler}>%</button>
            <button id="cancel" onClick={buttonHandler}>CE</button>
            <button id="reset" onClick={buttonHandler}>C</button>
            <button className='delete' onClick={buttonHandler}>Del</button>
            {/**/}
            <button className="1/x" onClick={buttonHandler}>1/x</button>
            <button className="x2" onClick={buttonHandler}>X²</button>
            <button className="sqrt" onClick={buttonHandler}>Sqrt</button>
            <button id="divide" className="operator" onClick={buttonHandler}>/</button>
            {/**/}
            <button id="seven" className="number" onClick={buttonHandler}>7</button>
            <button id="eight" className="number" onClick={buttonHandler}>8</button>
            <button id="nine" className="number" onClick={buttonHandler}>9</button>
            <button id="multiply" className="operator" onClick={buttonHandler}>*</button>
            {/**/}
            <button id="four" className="number" onClick={buttonHandler}>4</button>
            <button id="five" className="number" onClick={buttonHandler}>5</button>
            <button id="six" className="number" onClick={buttonHandler}>6</button>
            <button id="minus" className="operator" onClick={buttonHandler}>-</button>
            {/**/}
            <button id="one" className="number" onClick={buttonHandler}>1</button>
            <button id="two" className="number" onClick={buttonHandler}>2</button>
            <button id="three" className="number" onClick={buttonHandler}>3</button>
            <button id="plus" className="operator" onClick={buttonHandler}>+</button>

            <button className="plus_minus" onClick={buttonHandler}>+/-</button>
            <button className="number" onClick={buttonHandler}>0</button>
            <button className="number" onClick={buttonHandler}>.</button>
            <button id="resolve" onClick={buttonHandler}>=</button>

        </div>
    )
}

export default Keyboard