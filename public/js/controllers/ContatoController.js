//public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {
	Contato.query(function(contatos) {
		$scope.contatos = contatos;
	});

	$scope.salvar = function() {
		$scope.contato.$save().then(function() {
			$scope.mensagem = {
				texto : 'Contato salvo com sucesso.'
			};
			$scope.contato = new Contato();
		}).catch(function(erro) {
			console.log(erro);
			$scope.mensagem = {
				texto : 'Não foi possível salvar contato.'
			};
		});
	}
	if ($routeParams.contatoId) {
		Contato.get({
			id : $routeParams.contatoId
		}, function(dado) {
			$scope.contato = dado;
			console.log("Contato encontrado com sucesso. " + dado);
		}, function(erro) {
			$scope.mensagem = {
				texto : 'Não foi possível obter o contato.'
			};
			console.log(erro);
		});
		console.info($routeParams.contatoId);
	} else {
		$scope.contato = new Contato();
	}
}); 