//CREACION DE SERVER/API CON EXPRESS:

const express = require('express')
const server = express()
const morgan = require('morgan');

const usersRoutes = require('./routes/usersRoutes')
const posteosRoutes = require ('./routes/posteosRoutes')

//Middleware:
server.use(express.json()) // Este middleware permite parsear de JSON a objeto de JavaScript
server.use(morgan('dev')) // se ve en consola ---> GET /users/29/cami 200 4.177 ms - 68  

//Rutas modularizadas:
server.use('/user', usersRoutes )
server.use('/posteo', posteosRoutes)

//Rutas:
server.get('/', (request, response) => {
    response.send('Esta ruta fue creada con express')
})

server.get('/users', (request, response) => {
    response.send('Esta ruta es para usuarios')
})

server.listen(3001, () => {
    console.log('Server listen on port 3001') //Para ver el servidor en la consola
})

//Ruta pasandole un parámetro:
// server.get('/users/:id', (request, response) => {
//     const { id } = request.params

// })

//ENVIO DE INFORMACION:

// PARAMS: permite enviar informacion buscando por ID

// server.get('/users/:id/:name', (request, response) => {
//     const { id, name } = request.params
//     console.log(request.params) //Para ver el objeto params que esta dentro de request.
// })

// Como hago para enviar un objeto con los datos del usuario:

// server.get('/users/:id', (request, response) => {
//     const { id } = request.params

//     const infoUser = {
//         cohorte: '41b',
//         name: 'Cami',
//         id: 29,
//         alumnos: 'somos 40 alumnos'
//     }

//     response.json(infoUser) // tambien puedo poner el .send y la info se envia igualmente
// })

//CONDICIONAL PARA ENVIAR INFORMACION:

// server.get('/users/:id/:name', (request, response) => {

//     const { id, name} = request.params

//     if( id == 29 && name === 'cami'){
        
//         const infoUser = {
//             cohorte: '41b',
//             name: 'Cami',
//             id: 29,
//             alumnos: 'somos 40 alumnos'
//         }
//         return response.json(infoUser) // tambien puedo poner el .send y la info se envia igualmente
//     }
//     //Si no se cumple...
//     return response.status(404).send('Hubo un error')

// })


//QUERYS: permite enviar informacion buscando por NOMBRE

// server.get('/user', (request, response) => {

//     const { name } = request.query;

//     if( name) { //Si me mandan un name ...
//         return response.send(`Me mandaron este ${name}`)
//     }
//     return response.send('No hay name pero igual funciona')


// }) 

//BODY : permite enviar informacion buscando por OBJETO (Ej: datos de un formulario)
//Para recibir la informacion, como la recibo en formato JSON necesito de express.json para transformarlo a JS.

// const users = []  //simula ser la Base de Datos.
// let id = 0 //Creamos una variable del id que inicie en 0

// server.post('/posteos', (request, response) => {
//     console.log(request.body)

//     const { name, alumnos } = request.body

//     const newUser = {
//         id : ++id, //La variable id se incrementa en 1
//         name,
//         alumnos
//     }

//     users.push(newUser)

//     response.json(users)

// })


// server.listen(3001, () => {
//     console.log('Server listen on port 3001') //Para ver el servidor en la consola
// })



