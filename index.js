var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');
var resultadosController = require('./controllers/resultados.js')

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/lorem'));


// inicializa o servidor na porta especificada
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

//libera o acesso a API a patir de  qualquer cliente, host, etc....
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// importa controllers
var resultadosController = require('./controllers/resultados.js');

// cria enpoints para funcoes de controllers
app.get('/resultados', resultadosController.listar);
app.post('/resultados', resultadosController.procurar);
