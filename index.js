var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var resultadosController = require('./controllers/resultados.js');
var mensagensController = require('./controllers/mensagens.js')

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://172.16.15.143:27017/lorem'));


//libera o acesso a API a patir de  qualquer cliente, host, etc....
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// endpoints formulario
app.get('/resultados', resultadosController.listar);
app.post('/resultados', resultadosController.procurar);
// endpoints mensagens
app.get('/chat', mensagensController.listar);
app.post('/chat', mensagensController.criar);


// inicializa o servidor na porta especificada
app.listen(3000, "0.0.0.0", function() {
  console.log('Acesse o servidor http://172.16.15.143:3000');
});
