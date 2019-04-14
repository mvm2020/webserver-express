const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Marce V',
            edad: 39,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //SALIDA: {"nombre":"Marce V", "edad":39, "url":"/"}

        // res.write('Hola mundo, mi primer webServer con http');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');

//Se puede ver en Postman too