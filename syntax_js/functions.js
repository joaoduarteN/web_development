//No return:

function printSum(a, b){
    console.log(a + b)
}

//With return:

function printProd(a, b){
    return a * b
}
res = printProd(2,4)

//we can store functions in variables:

const printDiv = function(a, b){
    return a / b
}

//or we can use arrow functions:
const exp = (a, b) => a ** b //it's gonna return a ** b