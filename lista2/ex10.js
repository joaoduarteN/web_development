function arrayMaking(reps){
    array = ''
    for(let i = 0; i < reps; i++){
        //array[i] = element
        array += '+'
    }
    return array
}

console.log(arrayMaking(3))