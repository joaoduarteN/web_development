const nums = [1,2,3,4,5,6,7]

// map method is an array method that allows you to create
//  a new array by applying a provided function to each element
// of an existing array. The map method does not modify the
// original array; instead, it returns a new array containing the 
// results of applying the provided function to each element.

let resultado = nums.map(function(e){
    return e * 3
})
console.log(resultado)

const soma = e => e + 5
const triplo = e => e * 3

//é possível encadear maps
let multipleOps = nums.map(soma).map(triplo)
console.log(multipleOps)