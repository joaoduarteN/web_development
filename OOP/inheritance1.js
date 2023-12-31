const ferrari = {
    modelo: 'F40',
    velMax: 325
}
const volvo = {
    modelo: 'v40',
    velMax: 250
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // an object in javascript has the reference for its "prototype"