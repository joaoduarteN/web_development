function mediaSimples(arr) {
    media = arr.reduce((acumulator, curr) => acumulator + curr, 0)
    media/=arr.length
    return media
}

console.log(mediaSimples([1,2,3,4,5,6]))
