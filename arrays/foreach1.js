// Percorrer um array

//callback function: function that is passed as an argument in another function

const nomes = ['Joao', 'Luis', 'Helena']

nomes.forEach(function(nome, index){
        console.log(`${index + 1})${nome}`)
})
/**
 * The callback function you provide to forEach is designed 
 * to take up to three parameters: the current element, the 
 * index of the current element, and the array being traversed. 
 * However, you don't have to include all three parameters in your 
 * callback function. The forEach method will still pass them
 *  in that order, but you can choose to include only the ones you need.
 */
