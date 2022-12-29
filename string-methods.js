//Propiedades
//una puerta tiene como características color,
//numero de puertas, año, entre otros.
//características = propiedad: los tipos de datos
//tienen caractgerísticas, estas no llevan parentesis
const txt = 'hola mundo'
console.log(txt.length)

//los tipos de datos también tienen métodos o acciones
//un carro puede arrancar, detenerse, descomponerse, entre otros
//los metodos llevan parentesis

console.log(txt.toUpperCase())

//Más métodos
//endswith: devuelve true or false si se encuentra el caracter o palabra
console.log(txt.endsWith('a'))
//indexOf: devuelve el indice del primer caracter ó palabra en la oración
console.log(txt.indexOf('o'))
//lastIndexOf: devuleve el ultimo caracter o palabra en la oración
console.log(txt.lastIndexOf('o'))
//slice: si quiero cortar una parte de la oración
console.log(txt.slice(0,4))
//replace: reemplaza parte del texto, pero sólo la primera si hubiera 2 coincidencias
console.log(txt.replace('mundo', 'sebas'))
//includes: incluye algo? retorna true o false
console.log(txt.includes('hol'))
