var ObjectID = require('mongodb').ObjectID;

// lista pokemons
exports.listar = function (req, res) {
  req.db.collection('coordenadas').find().toArray(function(err, result) {
    if (err) {
      return console.log(err)
    };

    return res.send(result);
  })
};

exports.criar = function (req, res) {
  var resultado = req.body;

  req.db.collection('coordenadas').save(coordenadas, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    };
    return res.sendStatus(201);
  })
  };
