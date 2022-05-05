import React, {useState} from "react";
import Keyboard from "./Components/keyboard";
import InputDisplay from "./Components/InputDisplay";
import './index.css'
import FormulaDisplay from "./Components/FormulaDisplay";
import Test from "./Components/test/Test";
import Calculate from "./Components/Calculate";

function App() {
    const [displayValue, setDisplayValue] = useState('0')
    const [vars, setVars] = useState({
        x: '',
        y: '',
        operator: '',
        currentFormula: '',
        solution: '',
        operatorPressed: false,
        resolvePressed: false
    })

    function reset() {
        setVars({
            x: '',
            y: '',
            operator: '',
            currentFormula: '',
            solution: '',
            operatorPressed: false,
            resolvePressed: false
        })
    }

    function buttonHandler(event) {
        // Handler for number buttons
        if (event.target.className === 'number') { //Handler for buttons with numbers

            setDisplayValue(displayValue + event.target.textContent)
            if (vars.resolvePressed) {
                const newX = event.target.textContent
                setDisplayValue(newX)
                setVars({
                    x: newX,
                    y: '',
                    operator: '',
                    currentFormula: '',
                    solution: '',
                    operatorPressed: false,
                    resolvePressed: false
                })
            } else {
                if (vars.operatorPressed) {
                    let tempY = displayValue + event.target.textContent
                    if (tempY.charAt(0)==='0' & tempY.charAt(1)==='.') {

                    } else if
                    (tempY.charAt(0) === '0') {
                        tempY = tempY.slice(1)
                    }
                    setDisplayValue(tempY)
                    setVars({...vars, y: tempY})
                } else {
                    let tempX = displayValue + event.target.textContent
                    if (tempX.charAt(0)==='0' & tempX.charAt(1)==='.') {

                    } else if
                        (tempX.charAt(0) === '0') {
                        tempX = tempX.slice(1)
                    }
                    setDisplayValue(tempX)
                    setVars({...vars, x: tempX})
                }
            }
        }
        // Handler for operator buttons (+,-,/,*)
        if (event.target.className === 'operator') {
            if (vars.solution !== '') {
                let x2 = vars.solution
                setVars({
                    ...vars,
                    operator: event.target.textContent,
                    operatorPressed: true,
                    currentFormula: (x2 + event.target.textContent).toString(),
                    x: x2,
                    resolvePressed: false
                })
                setDisplayValue('0')
            } else {

                setVars({
                    ...vars,
                    operator: event.target.textContent,
                    operatorPressed: true,
                    currentFormula: (vars.x + event.target.textContent),
                    resolvePressed: false
                })
                setDisplayValue('0')
            }
        }
        // Handler for resolve button (=)
        if (event.target.id === 'resolve') {
            const currentOperator = vars.operator
            setVars({
                ...vars,
                currentFormula: (vars.x + currentOperator + vars.y + '='),
                resolvePressed: true,
                solution: Calculate(vars.x, vars.y, vars.operator),
                operatorPressed: false
            })
            setDisplayValue(Calculate(vars.x, vars.y, vars.operator).toString())
        }
        // Handler for reset button (C)
        if (event.target.id === 'reset') {
            setDisplayValue('0')
            reset()
        }
        // Handler for cancel button (CE)
        if (event.target.id === 'cancel') {
            setDisplayValue('0')
        }
        // Handler for delete button (Del)
        if (event.target.className === 'delete') {
            const newValue = Number(displayValue.toString().slice(0, -1))
            setDisplayValue(newValue.toString())
            if (vars.operatorPressed) {
                setVars({
                    ...vars,
                    y: Number(newValue).toString()
                })
            } else {
                setVars({...vars, x: Number(newValue).toString()})
            }
        }
        // Handler for X2 button

        if (event.target.className === 'x2') {
            if (vars.solution !== '') { //If calculation was done, then make operation with solution
                const tempX = vars.solution
                setVars({
                    ...vars,
                    x: tempX,
                    operator: 'x2',
                    currentFormula: tempX + '²' + '=',
                    solution: Calculate(tempX, vars.y, 'x2'),
                    resolvePressed: true
                })
                setDisplayValue(Calculate(tempX, vars.y, 'x2').toString())
            } else { // Otherwise, make calculation with x
                setVars({
                    ...vars,
                    operator: 'x2',
                    currentFormula: vars.x + '²' + '=',
                    solution: Calculate(vars.x, vars.y, 'x2'),
                    resolvePressed: true
                })

                setDisplayValue(Calculate(vars.x, vars.y, 'x2').toString())
            }
        }
        // Handler for 1/x
        if (event.target.className === '1/x') {
            if (vars.x === '') {

            } else {
                if (vars.solution !== '') { //If calculation was done, then make operation with solution
                    const tempX = vars.solution
                    setVars({
                        ...vars,
                        x: tempX,
                        operator: '1/x',
                        currentFormula: ('1/' + tempX + '=').toString(),
                        solution: Calculate(tempX, vars.y, '1/x'),
                        resolvePressed: true
                    })
                    setDisplayValue(Calculate(tempX, vars.y, '1/x').toString())
                } else if (vars.y !== '') {
                    const tempY = (1 / vars.y).toFixed(2)
                    setVars({
                        ...vars,
                        y: tempY
                    })
                    setDisplayValue(tempY.toString())
                } else { // Otherwise, make calculation with x
                    setVars({
                        ...vars,
                        operator: '1/x',
                        currentFormula: ('1/' + vars.x + '=').toString(),
                        solution: Calculate(vars.x, vars.y, '1/x'),
                        resolvePressed: true
                    })

                    setDisplayValue(Calculate(vars.x, vars.y, '1/x').toString())
                }
            }
        }
        // Handler for Sqrt()
        if (event.target.className === 'sqrt') {
            if (vars.solution !== '') { //If calculation was done, then make operation with solution
                const tempX = vars.solution
                setVars({
                    ...vars,
                    x: tempX,
                    operator: 'sqrt',
                    currentFormula: ('√(' + tempX + ')=').toString(),
                    solution: Calculate(tempX, vars.y, 'sqrt'),
                    resolvePressed: true
                })
                setDisplayValue(Calculate(tempX, vars.y, 'sqrt').toString())
            } else {
                setVars({
                    ...vars,
                    operator: 'sqrt',
                    currentFormula: ('√(' + vars.x + ')=').toString(),
                    solution: Calculate(vars.x, vars.y, 'sqrt'),
                    resolvePressed: true
                })

                setDisplayValue(Calculate(vars.x, vars.y, 'sqrt').toString())
            }
        }
        // Handler for +/-
        if (event.target.className === "plus_minus") {
            if (vars.solution !== '') {
                const tempSolution = (Number(vars.solution) * (-1)).toString()
                setVars({
                    ...vars,
                    solution: tempSolution
                })
                setDisplayValue(tempSolution)

            } else {
                if (vars.y === '') {
                    const tempX = (Number(vars.x) * (-1)).toString()
                    setVars({
                        ...vars,
                        x: tempX
                    })
                    setDisplayValue(tempX)
                } else {
                    const tempY = (Number(vars.y) * (-1)).toString()
                    setVars({
                        ...vars,
                        y: tempY
                    })
                    setDisplayValue(tempY)
                }
            }
        }
        // Handler fo %
        if (event.target.className === 'percent') {
            if (vars.y === '') {
                setDisplayValue('0')
                reset()
            } else {
                const tempY = vars.x / 100 * vars.y
                setVars({...vars, y: tempY.toString()})
                setDisplayValue(tempY.toString())
            }
        }
    }

    return (
        <div className="application">
            <FormulaDisplay
                value={vars.currentFormula}
            />
            <InputDisplay value={displayValue}
            />
            <Keyboard buttonHandler={buttonHandler}/>
            {/*<Test vars={vars}/>*/}
            {/*Uncomment to turn on the testing block*/}
        </div>
    )
}

export default App;
