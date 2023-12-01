const myString = "Joao"

console.log(myString.charAt(3)) //assim que indexamos a string para achar algum char
console.log(myString.charCodeAt(3)) //retorna o código da tabela ascii

console.log(myString.indexOf("o")) //retorna o primeiro indice de um valor da string  

console.log(myString.substring(1, 3)) //para seccionar a string

const templateString = `Olá

    ${myString}!

`

console.log(templateString) //Template strings, feitas com crase, suportam botar variavel no meio e quebra de linha


const up = texto => texto.toUpperCase() //tipo criando uma funçaozinha

console.log(`Olá, ${up(myString)}!`) //chamando a funçao
