const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

const pwd = (print) => {
    print(process.cwd());
};

const date = (print) => {
    print(Date()) //Es una funcion constructora de Node.
};

const echo = (print, args) => {
    print(args);
};

const ls = (print) => {
    fs.readdir('.', (error, files) => { //El . hace referencia al directorio actual.
        if (error) throw Error(error) //El throw funciona como un return y corta la ejecucion.
        print(files.join(' ')) //Para que se vean en forma de lista en la consola usamos ('\n')
    })
};

const cat = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if(error) throw Error(error);
        print(data);
    })
};

const head = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if(error) throw Error(error);
        print(data.split('\n')[0]) //Cuando haya un salto de linea, y agarrar la posicion 0
    })
/* Para tomar las primeras 8 lineas:
print(data.split('\n').splice(0, 8).join('\n'))
*/
};

const tail = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if(error) throw Error(error);
        print(data.split('\n').at(-1).trim()) 
    } ) //Se queda con lo que haya dsp del salto de linea, toma la ultima linea y sin espacios.
};

const curl = (print, args) => {
    utils.request(`https://${args}` , (error, response) => {
        if(error) throw Error(error)
        print(response)
    })
};

module.exports = {pwd, date, echo, ls, cat, head, tail, curl};
