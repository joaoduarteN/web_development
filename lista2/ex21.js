function minimo(arr){
    return Math.min(...arr) // o Math.min não aceita array como parametro, assim precisa do spread
}
list = [1,2,3,5,4]
console.log(minimo(list))