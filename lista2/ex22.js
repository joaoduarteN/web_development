function sorteio(value){
    sortear = Math.floor(Math.random() * 11)
    if (sortear == value) return "Mesmo valor"
    else return `diferente ${sortear}`
}

console.log(sorteio(10))