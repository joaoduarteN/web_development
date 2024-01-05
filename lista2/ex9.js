function arrayMaking(element, reps){
    array = []
    for(let i = 0; i < reps; i++){
        //array[i] = element
        array.push(element)
    }
    return array
}

console.log(arrayMaking(10,3))