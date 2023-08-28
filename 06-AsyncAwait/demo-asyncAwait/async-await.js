const axios = require('axios')

// async function getUsers() {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(data)
// }

// getUsers()



// // IDEM CON ARROW FUNCTIONS:
// const getUsers2 = async () => {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(data)
// }

// getUsers2()


// const getUsers3 = async () => {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    
//     const users = data.map( user => {
//         return {
//             id: user.id,
//             name: user.name
//         }
//     })

//     return users;
// }

// MANEJO DE ERRORES TRY/CATCH:
//Controlador:
const getUsers4 = async () => {
    try { //Intenta hacer todo esto
        const {data} = await axios('https://jsonplaceholder.typicode.com/usersssss')

        if(!data) throw Error ('hubo un inconveniente')
        
        const users = data.map( user => {
            return {
                id: user.id,
                name: user.name
            }
        })
        return users;
        
    } catch (error) { //En caso de que haya un error en lo asinc o en el codigo lo agarra el catch
        return error
    }
}
getUsers4()

//Manejamos la respuesta con la ruta con async y await y ejecutando el controlador:
//Ruta:
// router.get('/', async (request, response) => {
//     try {
//         const users = await getUsers4()

//         return response.status(200).json(users)
        
//     } catch (error) {
//         return response.status(404).send('Not Found')
        
//     }
// })


