const maiorIgual = function(num1, num2){
    if(typeof num1 != typeof num2) return false



    return num1 >= num2 ? true : false
}

console.log(maiorIgual(15,11))