// We can extract info easily from objects, arrays etc with destructuring operations:

const pessoa = {
    nome:"João",
    idade: 21, 
    endereço: {
        rua: "Jacinto favoretto",
        num: 301,
        apto: 38
    }
}

const {nome, idade} = pessoa ///pegar só nome e idade de pessoa

console.log(nome, idade) //