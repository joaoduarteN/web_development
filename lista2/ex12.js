function removeParametro(obj, param){
    delete obj[param]
    return obj
}

let myObject = {
    name: 'John',
    age: 25,
    city: 'New York'}

console.log(removeParametro(myObject, 'age'))
