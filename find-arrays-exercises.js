const users = [
    {name: 'Clau', lastname: 'Perez', testResult: 8, countryId:1, score: 7},
    {name: 'Sebas', lastname: 'garcia', testResult: 9, country:3, score: 9},
    {name: 'Alex', lastname: 'arana', testResult: 5, countryId:2, score: 9}
]

//Problema1: Actualizar test result
//primero encuentro el valor con find(),
//esto te devolverá los datos del usuario
const user= users.find(user=>user.testResult===9)
console.log(user)
//cambias su valor y ya está
user.testResult = 10
console.log(users)

//Problema2: 
//Encontrar el PRIMER estudiante del país 
//recibido en la función con una calificación igual o mayor 9

const countries = [
    {id:1, name: 'Colombia'},
    {id:2, name: 'México'},
    {id:3, name: 'Perú'},
    {id:4, name: 'Colombia'}
]

function condition(country){
    const foundContry = countries.find(c=>c.name===country)
    const contryId = foundContry.id
    return contryId
}

function condition2(countryId){
    const user = users.find(u=>u.countryId===contryId && u.score>=9)
    console.log(user)
}

let contryId = condition('Colombia')
console.log(contryId)
condition2(contryId)
