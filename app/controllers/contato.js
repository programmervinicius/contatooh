//app/controllers/contato.js

module.exports = function(app) {
	var controller = {};
	var Contato = app.models.contato;

	controller.listaContatos = function(req, res) {
		Contato.find().populate('emergencia').exec().then(function(contatos) {
			res.json(contatos);
		}, function(erro) {
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	controller.obtemContato = function(req, res) {
		var _id = req.params.id;
		Contato.findById(_id).exec().then(function(contato) {
			if (!contato)
				throw new Error("Contato não encontrado");
			res.json(contato);
		}, function(erro) {
			console.log(erro);
			res.status(404).json(erro);
		});
	};

	controller.removeContato = function(req, res) {
		var _id = req.params.id;
		Contato.remove({
			"_id" : _id
		}).exec().then(function() {
			res.status(204).end();
		}, function(erro) {
			return console.error(erro);
		});
	};

	controller.salvaContato = function(req, res) {
		var _id = req.body._id;
		if (_id) {
			Contato.findByIdAndUpdate(_id, req.body).exec().then(function(contato) {
				res.json(contato);
			}, function(erro) {
				console.error(erro);
				res.status(500).json(erro);
			});
		} else {
			Contato.create(req.body).then(function(contato) {
				res.status(201).json(contato);
			}, function(erro) {
				console.log(erro);
				res.status(500).json(erro);
			});
		}
	};

	return controller;
}
function adiciona(contatoNovo) {
	contatoNovo._id = ++ID_CONTATO_INC;
	contatos.push(contatoNovo);
	return contatoNovo;
}

function atualiza(contatoAlterar) {
	contatos = contatos.map(function(contato) {
		if (contato._id == contatoAlterar._id) {
			contato = contatoAlterar;
		}
		return contato;
	});
	return contatoAlterar;
};