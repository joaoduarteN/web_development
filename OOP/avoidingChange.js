//Object.preventextensions : you can't add anything else to the object, but you can remove
//object.seal : you can't add not delete, but you can change


const produto = Object.preventExtensions({nome: "iphone", ano:"2020", peso:"300g"})
