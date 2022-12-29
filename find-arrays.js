//find(): returns the value that i am looking for
//solo retorna EL PRIMER VALOR 
const numbers = [1,3,4,5,6,6,6,6,7,8]

const newArray = numbers.filter(ele=>ele===6)
console.log(newArray)

const newArray2 = numbers.find(ele=> ele ===1)
console.log(newArray2)