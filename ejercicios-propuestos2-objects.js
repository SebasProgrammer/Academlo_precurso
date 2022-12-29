//Ejercicios Propuestos

//1- Averigua si el correo corresponde a academlo
const user = {
    name: 'Erick',
    age: 25,
    email: 'sebas.arana2016@gmail.com',
    description: 'me gusta la programación'
}
const user2 = {
    name: 'Sebas',
    age: 24,
    email: 'sebas@academlo.com',
    description: 'Estoy aprendiendo a programar'
}

console.log(user.email.endsWith('academlo.com'))
console.log(user2.email.endsWith('academlo.com'))

//2- Sumar las edades de 2 usuarios
const suma = user.age + user2.age
console.log(suma)
//3- Encuentra el tamaño de la primera palabra de un string
const len1 = user.description.indexOf(' ')
const len2 = user2.description.indexOf(' ')
console.log(len1)
console.log(len2)
