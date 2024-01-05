function somaIterada(num1, num2){
    let soma = 0
    for(let i = 0; i < num2; i++){
        soma += num1
    }
    return soma
}

console.log(somaIterada(5,5)) //25
console.log(somaIterada(10,3)) // 30