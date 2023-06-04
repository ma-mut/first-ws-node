const path = require("path");
const express = require("express");
const hbs = require('hbs');

require('dotenv').config();

const app = express();

const port = process.env.PORT;

//HANDLEBARS
//user handlebars con express para renderizar contenido estático
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


//servir contenido estático
//toma la carpeta pública
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {
    res.render('home', {
        nombre: "WEB SERVER APP",
        titulo: "TEST WEB SERVER",
        autor: "MahMUT",
        titular: "WEB SERVER"
    });
});

app.get('/elements', ( req, res ) => {
    //res.sendFile( __dirname + '/public/elements.html' );
    res.render('elements', {
        nombre: "WEB SERVER APP",
        titulo: "TEST WEB SERVER",
        autor: "MahMUT"
    });
});

app.get('/generic', ( req, res ) => {
    //res.sendFile( __dirname + '/public/generic.html' );
    res.render('generic', {
        nombre: "WEB SERVER APP",
        titulo: "TEST WEB SERVER",
        autor: "MahMUT"
    });
});

app.get('*', ( req, res ) => {
    //res.send(' 404 | Page not found ');
    
    //enviar archivo con path absoluto
    //res.sendFile( __dirname + '/public/404.html' );
    console.log("404")
    //enviar vista con hbs
    res.render('404');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en http://localhost:${ port }`);
});

//
//const http = require('http');
//
//http.createServer(  (request, response) => {
//
//    console.log(request)
//      
//    //escribir Headers
//      response.writeHead(200, { 'Content-Type': 'application/json' });
//      response.writeHead(404, { 'Content-Type': 'text/plain' });
//      response.setHead(200, { 'Content-Type': 'application/csv' })
//
//    response.write('Hola Mundo!');
//    response.end()
//
//})
//.listen( 5050 );
//
//console.log('Escuchando en puerto 5050')