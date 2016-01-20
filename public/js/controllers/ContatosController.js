//public/js/controllers/ContatosController.js
$resource:
angular.module('contatooh').controller('ContatosController', function($scope, $resource) {
	$scope.contatos = [];
	$scope.total = 0;
	$scope.filtro = '';

	$scope.init = function() {
		buscaContatos();
	};
	$scope.init();

	// Exemplo de promise
	/*
	 $http.get('/contatos').then(function(result) {
	 foo = result.data;
	 console.log("Lista de contatos encontrada.");
	 console.log(foo);
	 }, function(errorMsg) {
	 console.log("Lista de contatos não encontrada.");
	 console.log(errorMsg);
	 });
	 */

	function buscaContatos() {
		var Contato = $resource('/contatos');

		Contato.query(function(contatos) {
			if (contatos.length > 0) {
				$scope.contatos = contatos;
				console.log(contatos.length + " contato(s) encontrado(s).");
			} else {
				console.log("Nenhum contato encontrado.");
			}
		});
	};
	buscaContatos();
});
