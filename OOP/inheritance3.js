/**
 * With Object.create(), we can set a prototype relation:
 */
const pai = {nome : 'pedro', corCabelo : 'castanho'}

const filho1 = Object.create(pai) //set pai as prototype obj, like with the __proto__
filho1.nome = 'Joao'
console.log(filho1.nome, filho1.corCabelo)
const filho2 = Object.create(pai, {
    nome:{value: "Luis", enumerable: false, writable: false}
})
