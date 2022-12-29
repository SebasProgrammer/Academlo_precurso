//filter crea un nuevo array con los elementos 
//cumplan la condicion implementada

const numbers = [5,3,10,14,5,33]

function condition(element){
    //return false 
    //return true  
    return element > 10
}

const newArray = numbers.filter(condition)
console.log(newArray)

//Ahora también funciona si es una función anónima
//no necesita nombre y lo copiamos al filter
const newArray2 = numbers.filter(function (element){
    return element > 10
})
console.log(newArray2)

//3ra forma: ARROW FUNCTIONS: no llevan la palabra
//function
const newArray3 = numbers.filter((element) => {
    return element > 10
})
console.log(newArray3)

//4ta forma OPTIMIZADO: se borra los paréntesis del parametro, las llaves y el return, ya que el return esta implicito
const newArray4 = numbers.filter(element => element > 10)
console.log(newArray3)
