//1- Crear un arreglo de 5 usuarios que tengas las propiedasdes name y email
//2- Validar si los usuarios tienen correo de Academlo

// const user = {
//     name: 'Claudia',
//     email: 'claudia@academlo.com'
// }

// const user2 = {
//     name: 'Sebas',
//     email2: 'sebastian.arana2016@gmail.com'
// }

const users = [
    {
        name: 'Claudia',
        email: 'claudia@academlo.com'
    },
    {
        name: 'Sebas',
        email: 'sebastian.arana2016@gmail.com'
    },
    {
        name: 'Erick',
        email: 'erick@hotmail.com'
    },
    {
        name: 'Arturo',
        email: 'Arturo@academlo.com'
    },
    {
        name: 'Valeria',
        email: 'valeria@academlo.com'
    }
]

console.log(users[0].email.endsWith('academlo.com'))
console.log(users[1].email.endsWith('academlo.com'))
console.log(users[2].email.endsWith('academlo.com'))
console.log(users[3].email.endsWith('academlo.com'))
console.log(users[4].email.endsWith('academlo.com'))