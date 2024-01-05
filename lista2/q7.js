function entreMinMax(num, min, max, inclusivo = false){
    if(inclusivo){
        return (num >= min && num <= max)
    }else return (num > min && num < max)
}

console.log(entreMinMax(10, 50, 100)) //false
console.log(entreMinMax(30, 10, 50)) // true
console.log(entreMinMax(10, 10, 50, false))