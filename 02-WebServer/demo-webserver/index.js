const http = require('http');

// http.createServer((request, response) => {
//     response.writeHead(200, { "Content-type": "text/plain" })
//     response.end('Holi! Creaste tu primer server')
// })



http.createServer((request, response) => {
    // if(request.url === '/users'){
    //     response.writeHead(200, { "Content-type": "text/plain"})
    //     return response.end('Hola, esta ruta es para usuarios')
    // }

    if(request.url === '/users'){ //Para mostrar un ARRAY
        response.writeHead(200, { "Content-type": "application/json"})
        
        const users = [
            { id: 1, name: 'Camila'},
            { id: 2, name: 'Javier'},
            { id: 3, name: 'Mailen'},
            { id: 4, name: 'Silvia'},
        ]
        return response.end(JSON.stringify(users))
    }

    if(request.url === '/posteos'){
        response.writeHead(200, { "Content-type": "text/plain"})
        return response.end('Esta ruta es para los posteos')
    }
    else{
        response.writeHead(404, { "Content-type": "text/plain"})
        return response.end('Error: ruta no encontrada')
    }
})
.listen(3001, 'localhost') 