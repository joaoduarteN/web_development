function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Aula 1", 123)
const aula2 = new Aula("Aula 2", 123)

console.log(aula1, aula2)

//if we put params like this (...param), we can pass whatever and it will be stored in an array
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)//we run the f function, passing obj as the context object (the "this")
    return obj
}

const aula3 = novo(Aula, "Olá", 1234)
console.log(aula3)
