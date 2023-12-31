const arr = ['Joao', 'Nikita', 'Luis', 'Daniel']
arr.pop() // tira o ultimo elemento

console.log(arr)

arr.push("Helena")

console.log(arr)

arr.shift() // remove o primeiro
arr.unshift("Pedro") // add no começo
    
console.log(arr)

const subarray = arr.slice(2, 3) // creates a subarray starting in the position given and ending in the other. If there is no 2nd position, it goes till the end
console.log(subarray)

// splice: add or remove elements in the following format:

arr.splice(2, 0, 'Caio', 'Camila') //from the index 2, I add caio and camila, but remove 0 elements
console.log(arr)

arr.splice(2, 1) //remove 1 element from index 2 -> goes from the index given to the right

console.log(arr)

arr.splice(2) //removes everyone from the index 2 beyond
console.log()

