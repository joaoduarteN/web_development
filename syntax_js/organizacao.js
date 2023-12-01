console.log("Hello world!") 
var a = 3 //variavel a recebe 3 -> pode redeclarar dentro de um mesmo escopo (nonsense)
let b = 4 //variavel b recebe 4 -> melhor usar isso!
const c = 5 //constante, valor não muda

//Tem tipagem fraca, pode só mudar o tipo da variável mudando valores

const d = 4
const e = 3.0
const res = d + e
console.log(res.toFixed(2))

