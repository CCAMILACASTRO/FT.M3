
// PROMESAS:

const fulfilled1 = new Promise((resolve, reject) => {

    resolve('Resuelto')

})

const rejected1 = new Promise((resolve, reject) => {

    reject('Rechazado')

})

const fulfilled2 = new Promise((resolve, reject) => {
    
    resolve('Resuelto 2')

 })


// CASE 1: la promesa se resuelve correctamente y no tengo manejador de errores.
fulfilled1.then((value) => console.log('caso 1: ', value))


// CASE 2: la promesa se rechaza y ese error se maneja con el errorHandler del .then()
rejected1.then(
    (value) => console.log(value),
    (error) => console.log('caso 2: ',error)
)

//CASE 3: La promesa se resuelve (todo ok), pero no tengo successHandler.
fulfilled1
.then()
.then((value) => console.log('caso 3: ', value))

// CASE 4: La promesa se rechaza y no tengo un errorHandler
rejected1
.then((value) => console.log(value))
.then((value) => console.log(value))
.then((value) => console.log(value))
.catch((error) => console.log('caso 4: ', error))

// CASE 5: La promesa se resuelve
fulfilled1
.then(
    (value) => {return 'te paso info'}, //Este then retorna una promesa con ese valor
    (error) => console.log(error)
)
.then((value) => console.log('caso 5: este es el segundo then: ',value))
 //Recibe el resultado del 1er .then() y retorna otra promesa con el valor del resultado del 1er .then()


// CASE 6: La promesa se rechaza y usamos el THROW para lanzarle el error al siguiente .then()
rejected1
.then(
    (value) => { return 'otro value' },
    (error) => { throw error } //Usamos throw para que le llegue el error al siguiente .then y lo muestre en pantalla
)
.then(
    (value) => console.log('caso 6: ', value),
    (error) => console.log('errorHandler: ', error)
)

// CASE 7: La promesa se resuelve y en su 1er .then retorna otra promesa con el valor de una nueva promesa.
fulfilled1
.then(
    // (value) => { return fulfilled2 }, //retorna otra promesa con el valor de la nueva promesa resuelta
    (value) => { return rejected1}, //retorna otra promesa con el valor de una nueva promesa rechazada
    (error) => { throw error}
)
.then(
    (value) => console.log('successHandler: ', value),
    // (error) => console.log('errorHandler2: ', error),
    (error) => { throw error}
)
.catch((error) => console.log('catch: ', error))




















