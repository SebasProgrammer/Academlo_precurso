//map: crea un nuevo arreglo cambiando los valores del arreglo segun la 
//la funcion condicion que le otoguemos

const ages = [1,2,3,4,5,6,7,8,10]

const newArray = ages.map(ele=> ele*3)
console.log(newArray);

const users = [
    {name: 'sebas', lastname: 'arana'},
    {name: 'claudia', lastname: 'lopez'}
]

const newArray2 = users.map(u=>u.name+' '+u.lastname)
console.log(newArray2);
