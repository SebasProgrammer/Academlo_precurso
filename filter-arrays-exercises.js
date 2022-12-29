const users = [
    {name: 'Clau', lastname: 'Perez', testResult: 8},
    {name: 'Sebas', lastname: 'garcia', testResult: 9},
    {name: 'Alex', lastname: 'arana', testResult: 5}
]
//filtrar result>7
const newArray = users.filter(user => user.testResult > 7)
console.log(newArray)
//filatrar usuarios que no tengan correo de academlo
const newArray2 = users.filter(user=> user.lastname==='arana')
console.log(newArray2)