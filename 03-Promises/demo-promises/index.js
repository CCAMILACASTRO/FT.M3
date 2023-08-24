//CREAMOS NUESTRA PROPIA PROMESA
// const miPromesa = new Promise((resolve, reason) => {
//     resolve('salio todo bien')
//     reason('salio todo mal') // lo ignora porque el status cambia una unica vez.
// });



// miPromesa.then(
//     (value) => console.log(value), // si sale todo bien => successHandler, e ignora al errorHander
//     (reason) => console.log(reason) //si sale todo mal => errorHandler, e ignora al successHander
// )

//CREAMOS PROMESAS CON AXIOS:
//Primero creo el package.json y dsp instalo axios.

const axios = require('axios');

// axios('https://rickandmortyapi.com/api/character') // ASINCRONIA: llamado a la api
// .then( //Se queda con la informacion de la API
//     (response) => response.data, // successHandler, si sale todo ok
//     (reason) => reason // errorHandler , si sale todo mal.
// )
// .then( //Se queda con el array de personajes
//     (data) => data.results, // Si sale todo bien el .then anterior me retorna a data y lo recibe el siguiente .then
//     (error) => console.log(error)     // Si sale todo mal me lanza el error.
// )

// // para quedarnos con el error:
// .then( 
//     (response) => response.data, // successHandler, si sale todo ok
//     (error) => console.log(error.response.data) // errorHandler , si sale todo mal lanza el error
// )

//USAMOS AXIOS Y MANEJAMOS EL ERROR CON .CATCH():

axios('https://rickandmortyapi.com/api/characterrr')
.then((response) => response.data.results) // Se queda con el array de la API directamente.
.then((results) => console.log(results)) 
.catch(error => console.log(error))  //Como los .then() no tienen manejador de errores, recibe el error el .catch() directamente
.finally(() => console.log('Este es el finally'))







