function verifyValue(value){
    if (typeof value === 'boolean') return !value
    if (typeof value === 'number'){
        if (isNaN(value)) return "É nulo"
        else return (-1 * value)
    } 
    else if(typeof value === 'string'){
        if (!isNaN(parseFloat(value)) && isFinite(value)){
            return (-1 * value)
        }
    }
    return `Valor é ${typeof(value)}`
}

console.log(verifyValue(12))
console.log(verifyValue('João'))
console.log(verifyValue('20'))