//funcao construtora

function Produto(nome, preco, desc){
    this.nome = nome // metodo publico

    this.getPrecoDescontado = () => {return preco * (1 - desc)}

}
const p1 = new Produto("Caneta", 10, 0.15)
console.log(p1)
console.log(p1.getPrecoDescontado())