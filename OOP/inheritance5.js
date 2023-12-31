// notice how all of them are functions. This means they all have .prototype
console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
/**
 * here, we go in the string prototype and create new functions for it
 */
console.log("João Pedro".reverse())
