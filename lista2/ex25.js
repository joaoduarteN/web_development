function findSubstrings(arr, substr){
    return arr.filter(a => a.includes(substr))
}

arr = ['programacao', 'mobile', 'profissional']

console.log(findSubstrings(arr, 'pro'))
