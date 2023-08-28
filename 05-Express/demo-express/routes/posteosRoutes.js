const express = require('express')
const routerPosteos = express.Router()

const users = []  //simula ser la Base de Datos.
let id = 0 //Creamos una variable del id que inicie en 0

routerPosteos.post('/', (request, response) => {
    console.log(request.body)

    const { name, alumnos } = request.body

    const newUser = {
        id : ++id, //La variable id se incrementa en 1
        name,
        alumnos
    }

    users.push(newUser)

    response.json(users)

})

module.exports = routerPosteos