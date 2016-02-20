//public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', function($scope, Contato) {
	$scope.contatos = [];
	$scope.filtros = '';
	$scope.mensagem = {
		text : ''
	};

	$scope.remove = function(contato) {
		Contato.delete({
			id : contato._id
		}, buscaContatos, function(erro) {
			$scope.mensagem = {
				text : "Não foi possível remover o contato."
			};
			console.log(erro);
		});
	}

	$scope.incrementa = function() {
		$scope.total++;
	};

	function buscaContatos() {
		Contato.query(function(contatos) {
			$scope.contatos = contatos;
		}, function(erro) {
			$scope.mensagem = {
				text : "Não foi possível obter a lista de contatos."
			};
			console.log(erro);
		});
	}

	buscaContatos();

});
