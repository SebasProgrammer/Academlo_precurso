//Enviar un correo a un usuario
//1- Obtener correo
//2- Enviar correo

const firstUser = 
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    }

function obtenerCorreo(user){
    return user.email
}
function EnviarCorreo(email){
    console.log('Enviado a', email)
}

const email = obtenerCorreo(firstUser)  
EnviarCorreo(email)