// retornar nome do mes a partir do numero

const mes = function(numero){
    const mapear = ['jan', 'fev', 'mar', 'abr','mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    return mapear[--numero]
}

console.log(mes(11))