let operations = function(number){
    //number = Math.round(number * 1000000)/1000000

    number = number.toFixed(2)
    number = number.toString()
    number = number.replace('.', ',')
    
    return `R$${number}`
}

console.log(0.1 + 0.2)
console.log(operations(0.1 + 0.2))
