const pessoa = {
    nome: "João",
    idade: 21,
    peso: 66
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)); //transforma cada par chave key em um array


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'nascimento',{
    enumerable: true,
    writable: true, //we can define properties to elements of the object
    value:"25-11-2002"
})

pessoa.nascimento = '27-01-2003'
console.log(pessoa.nascimento)

/*
There are tons of commands that we can use. One other example is
Object.assign(obj, param1, param2, ...) -> here, we're basically concatenating 
the params in the object.
Object.freeze: makes the object stop receiving values 
*/
