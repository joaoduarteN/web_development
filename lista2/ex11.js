function primeiroUltimo(arr){
    return arr.slice(0,1).concat(arr.slice(-1))// slice cria subarrays
}
console.log(primeiroUltimo([1,2,34,'joao']))