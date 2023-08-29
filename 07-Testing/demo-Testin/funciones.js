const suma = (a, b) => a + b;

const multiplicacion = (c, d) => c * d;

const obj = () => {
    return { 
        name: '41b',
        modalidad: 'FT'
    }
}

const array = () => {
    const arr = ['Camila', 'Javier', 'Mailen', 'Silvi']
    return arr;
}


const promise = () => {

    const newPromise = new Promise((resolve, reject) => {
        resolve('demo test promise')
    })
    return newPromise
}


// const result = (a, b) => {
//     return a + b;
// } 

const suma2 = (a, b, result) => {
    result(a, b) // La llamamos una sola vez
}



module.exports = {
    suma,
    multiplicacion,
    obj,
    array,
    promise,
    suma2
}