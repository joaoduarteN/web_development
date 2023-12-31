// OBJETO: Coleção dinâmica de pares chave/valor

let produto = new Object //-> como se eu tivesse feito produto = {}
produto.nome = "João"
produto.idade = "21 anos"
produto.endereco = {Rua: 'Jacinto favoreto',
cidade: "são carlos"}



console.log(produto)

delete produto.idade

console.log(produto)