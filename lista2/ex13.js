function returnNumbers(arr){
    return arr.filter(value => typeof value === 'number')
}

console.log(returnNumbers([1,2,3,'joao', 'nikita']))
console.log(returnNumbers(['joao', 'nikita']))