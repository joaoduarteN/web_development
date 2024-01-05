function numIndex(arr){
    return arr.filter((a,i) => a % 2 == 0 && i % 2 == 0)
}

console.log(numIndex([1,2,3,4,10,22,14,21,10]))