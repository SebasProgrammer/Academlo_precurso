//1- Extraer los usuarios con correo de Acdemlo
//2- Separar hombres y mujeres

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

const academloUsers = []

if (users[0].email.endsWith('academlo.com')) academloUsers.push(users[0])
if (users[1].email.endsWith('academlo.com'))academloUsers.push(users[1])
if (users[2].email.endsWith('academlo.com'))academloUsers.push(users[2])
if (users[3].email.endsWith('academlo.com'))academloUsers.push(users[3])
if (users[4].email.endsWith('academlo.com'))academloUsers.push(users[4])

console.log(academloUsers)

//problema2
const men = []
const women = []
if (users[0].gender==='Male') {
    men.push(users[0])
} else {
    women.push(users[0])
}
if (users[1].gender==='Male') {
    men.push(users[1])
} else {
    women.push(users[1])}
if (users[2].gender==='Male') {
    men.push(users[2])}
else {
    women.push(users[2])}
if (users[3].gender==='Male') {
    men.push(users[3])}
else {
    women.push(users[3])}
if (users[4].gender==='Male') {
    men.push(users[4]) }
else {
    women.push(users[4])}
// console.log(men)
console.log(women)