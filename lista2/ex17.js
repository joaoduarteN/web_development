function sumAll(arr){
    return arr.reduce((acumulator, curr) => acumulator + curr, 0)
}

console.log(sumAll([1,2,3,4,5]))