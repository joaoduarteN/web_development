let bhaskara = function(a, b, c) {/*a,b,c are the coefficients*/
    deltha = (b**2)-(4*a*c)

    if (deltha < 0) return "Deltha é negativo"

    x1 = (-b + Math.sqrt(deltha))/(2*a)
    x2 = (-b - Math.sqrt(deltha))/(2*a)
    
    let x = [x1, x2]

    return x
}
x = bhaskara(2, -4, +2)

if(x){
    console.log(x)
}