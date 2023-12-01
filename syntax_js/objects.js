const produto = {} //we can creae object like dictionaries
produto.nome = "João" //we can simply "create" elements like this
produto.nasc = "25-11-2002"
produto.idade = 21

console.log(produto)

//or owe can create the keys in the declaration
const produto2 = {
    nome : "João",
    nasc : "25-11-2002",
    idade :"21", //and also other objects inside it
    obj:{
        curso : "computacao",
        universidade : "USP"
    }
}
console.log(produto2)