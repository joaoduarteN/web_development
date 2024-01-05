function toArray(obj){
    arr = []
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let value = obj[key]
            arr.push([key, value])
        }
    }
    return arr
}



let myObject = {
    name: 'John',
    age: 25,
    city: 'New York'}

console.log(toArray(myObject))