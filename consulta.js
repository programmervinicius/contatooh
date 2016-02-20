//consulta.js

var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('559ef4a2c81893a2a7fd5009');
MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(erro, db) {
	if (erro)
		throw erro;
	db.collection('contatos').findOne({
		_id : _idProcurado
	}, function(erro, contato) {
		if (erro)
			throw erro;
		console.log(contato);
	});
}); 