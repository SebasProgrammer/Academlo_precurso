//Problema1
//Encontrar el tamaño de la última palabra en un texto.

const txt = 'feliz cumpleaños para todos'
let indice_final = txt.length
let indice_inicial = txt.lastIndexOf(' ')+1
console.log('El tamaño de la última palabra es', indice_final-indice_inicial)

//Problema2
//Encontrar el tamaño de la segunda palabra en un texto.
indice_inicial = txt.indexOf(' ') + 1 
//aplicamos un slice desde indice_inicial hasta el final
new_text = txt.slice(indice_inicial,indice_final)
let answer = new_text.indexOf(' ') 
console.log('El tamaño de la segunda palabra ', answer)

console.log(typeof answer)