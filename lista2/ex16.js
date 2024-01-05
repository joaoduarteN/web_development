function bissexto(ano){
    if(ano % 100 == 0){
        if(ano % 400 == 0) return true
        return false
    }
    if(ano % 4 == 0){
        return true
    }
}

console.log(bissexto(2020))
console.log(bissexto(2100))