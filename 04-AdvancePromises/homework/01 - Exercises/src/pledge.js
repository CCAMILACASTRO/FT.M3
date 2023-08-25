'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
    constructor(executor){
        if(typeof executor !== 'function'){
            throw TypeError('Executor must be a function')
        }

        this._state = 'pending'
        this._value = undefined
        this._handlerGroups = [] //Creamos un array para guardar el objeto de cada then, donde se guardan los metodos success y error handlers de cada then

        const resolve = (value) => { //Creamos la funcion resolve para que se ejecute la internalResolve con el value que recibe por parametro
            this._internalResolve(value)
        }
    
        const reject = (reason) => { //Creamos la funcion reject para que se ejecute la internalReject con el value que recibe por parametro
            this._internalReject(reason)
        }

        executor(resolve, reject) //Ejecutamos el executor con las funciones resolve y reject

    }

    _internalResolve = (value) => {
        if(this._state !== 'pending') return; // para que corte la ejecucion
        this._state = 'fulfilled'; //cambia el estado a fulfilled
        this._value = value; //almacena el valor que recibe
        this._callHandlers(this._value) // Cuando la promoesa se completa llamo al callHandlers para ejecutar el successCb
    }

    _internalReject = (reason) => {
        if(this._state !== 'pending') return; // para que corte la ejecucion
        this._state = 'rejected'; //cambia el estado a rejected.
        this._value = reason // almacena el valor que recibe.
        this._callHandlers(this._value) // Cuando la promoesa se completa llamo al callHandlers para ejecutar el errorCb
    }

    then = (successCb, errorCb) => { //Creamos un objeto donde se guarden las funciones successCb y errorCb. 
        const handlerGroup = {
            successCb: typeof successCb === 'function' ? successCb : false, //Si successCb es una funcion que lo guarde en la prop de successCb
            errorCb: typeof errorCb === 'function' ? errorCb : false, ////Si errorCb es una funcion que lo guarde en la prop de errorCb
        }

        this._handlerGroups.push(handlerGroup) //Guardamos en el array de handlers el objeto de funciones callbacks creado para cada handler.
        
        this._state !== 'pending' && this._callHandlers(this._value)
    }

    catch = (errorCb) => { //Creamos la funcion catch que hace lo mismo que el then pero solo maneja el errorCb.
        this.then(null, errorCb) // ejecuta el then con el errorCb, pero sin el successCb, por eso esta en null.
    }


//Es un método que llama a cada handler del then y de acuerdo al estado en el que este lo ejecuta con el valor que recibe por parametro
    _callHandlers = (value) => {  //ejecuta el successCb o el errorCb
        while(this._handlerGroups.length){
            const currentHandler = this._handlerGroups.shift(); //Si el array de handlers tiene elementos, sacamos el primero
        // En el currentHandler se guardan los .then que se van ejecutando con su {successCb y errorCb}
            this._state === 'fulfilled' && currentHandler.successCb && currentHandler.successCb(value)
        // si el estado esta en fulfilled y el currentHandler tiene un success , ejecutamos y maneja el resultado
            this._state === 'rejected' && currentHandler.errorCb && currentHandler.errorCb(value)
        // si el estado esta en rejected y el currentHandler tiene un error, ejecutamos y maneja el error
        }
    }
}







module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
