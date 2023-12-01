console.log(Math.ceil(6,1)) // objetos e seus parametros, usando pontos

const obj1 = {}
obj1.nome = "Joao"

function Obj(nome){
    this.nome = nome //recebe o parametro nome e transforma ele em publico para quem instanciar a funcao Ob
}

const obj2 = new Obj("Luis")
console.log(obj2.nome)