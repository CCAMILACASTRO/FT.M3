const express = require('express')
const routerUsers = express.Router(); //Permite modularizar rutas.
//En esta constante guardamos todas las rutas que dirigen a /users

routerUsers.get('/:id/:name', (request, response) => {

    const { id, name} = request.params

    if( id == 29 && name === 'cami'){
        
        const infoUser = {
            cohorte: '41b',
            name: 'Cami',
            id: 29,
            alumnos: 'somos 40 alumnos'
        }
        return response.json(infoUser) // tambien puedo poner el .send y la info se envia igualmente
    }
    //Si no se cumple...
    return response.status(404).send('Hubo un error')

})

routerUsers.get('/', (request, response) => {

    const { name } = request.query;

    if( name) { //Si me mandan un name ...
        return response.send(`Me mandaron este ${name}`)
    }
    return response.send('No hay name pero igual funciona')


}) 

module.exports = routerUsers;