//pop: elimina el ultimo elemento del arreglo
const numbers = [4,6,7,8,9]
numbers.pop()
console.log(numbers)

//push: agrega un elemento al final del arreglo
numbers.push(14)
console.log(numbers)

//shift: elimina el primer elemento del arreglo
numbers.shift()
console.log(numbers)

//unshift: agregar un elemento al inicio del arreglo
numbers.unshift(0)
console.log(numbers)

//splice: Elimina un elemento en cualquier posición que no sea el primero o ultimo
//parámetros
//primero: que posicion voy a eliminar //segundo: cuantos elementos voy a eliminar
numbers.splice(1, 1)
console.log(numbers)

//splice: También te permite agregar elemento al arreglo
numbers.splice(1,0,2)
console.log(numbers)

//splice: agregar y elimnar
numbers.splice(3,1,10)
console.log(numbers)

//splice: elinamos el 7 y agregamos el 8 y 9 elementos
numbers.splice(2,1,8,9)
console.log(numbers)

