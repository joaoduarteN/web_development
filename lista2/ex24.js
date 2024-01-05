function countChars(str, char){
    return str.split('').filter(c => c === char).length
}



str = "eu sou o joao pedrO"
console.log(countChars(str, 'o'))