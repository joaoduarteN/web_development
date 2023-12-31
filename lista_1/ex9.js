let grades = function(grade){
    if((5 - (grade % 5)) < 3){
        grade = grade + (5 - (grade % 5))
        return grade
    }

    if (grade < 40) return "Reprovado"

    
}


console.log(grades(38))