// reduzir um array a um único valor. Isso é feito aplicando uma função acumuladora a cada elemento do array, da esquerda para a direita, para reduzi-los a um único valor. A função acumuladora recebe dois parâmetros: o acumulador e o elemento atual do array.
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Função acumuladora para somar os números
const somar = (acumulador, numero) => acumulador + numero;

// Utilizando reduce para somar todos os números do array
const resultado = numeros.reduce(somar, 0);

console.log(resultado); // Saída: 15
