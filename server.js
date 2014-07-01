// server.js
var fs = require('fs');
var logfmt = require("logfmt");//heroku logs
var express = require("express");//servidor web
var app = express();
var file = 'contador.data';
var contador = 0;

app.use(logfmt.requestLogger());

//http://contarvisitas.herokuapp.com/
app.get('/', function(req, res) {
    fs.exists(file, function(exists){
        if (exists) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) throw err;
                contador = data.toString();
                contador = new Number(contador).valueOf()+1;
                res.send('Hola, visitante numero: '+ contador);
                saveContador(contador);
            });
        }else{
            saveContador(1);
            res.send('Hola, primer visitante');
        }
    });
});

//http://contarvisitas.herokuapp.com/json
app.get('/json', function(req, res) {
    fs.exists(file, function(exists){
        if (exists && contador>0) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) throw err;
                contador = data.toString();
                contador = new Number(contador).valueOf();

                var objetoJSON = {};
                //         clave    valor
                objetoJSON.saludo = "Hola";
                objetoJSON.usuarios = contador;
                var jsonString = JSON.stringify(objetoJSON);
                var json = JSON.parse(jsonString);
                res.send(json);
            });
        }else{
            saveContador(0);
            res.send('No hay datos json');
        }
    });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Server listening on " + port);
});

//persistencia contador
function saveContador(datos){
    contador = datos;
    fs.writeFile(file, datos, function (err) {
        if (err) throw err;
        console.log('Contador guardado con datos='+datos);
    });
}
