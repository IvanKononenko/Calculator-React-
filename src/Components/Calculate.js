const Calculate = (x, y, operator) => {
    const digitsAfterComma = 2
    x=Number(x)
    y=Number(y)
    switch (operator) {
        case '-':
            return x - y
        case '+':
            return x + y
        case '*':
            if (Number.isInteger(x * y)) {
                return x * y
            } else {
                return (x * y).toFixed(digitsAfterComma)
            }
        case '/':
            if (Number.isInteger(x / y)) {
                return x / y
            } else {
                return (x / y).toFixed(digitsAfterComma)
            }
        case 'x2':
            if (Number.isInteger(x * x)) {
                return x * x
            } else {
                return (x * x).toFixed(digitsAfterComma)
            }
        case '1/x':
            if (Number.isInteger(1 / x)) {
                return 1 / x
            } else {
                return (1 / x).toFixed(digitsAfterComma)
            }
        case 'sqrt':
            if (Number.isInteger(Math.sqrt(x))) {
                return Math.sqrt(x)
            } else {
                return (Math.sqrt(x)).toFixed(digitsAfterComma)
            }
    }
}

export default Calculate