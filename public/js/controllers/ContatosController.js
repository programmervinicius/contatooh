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

	function buscaContatos() {
		var Contato = $resource('/contatos');
		$scope.contatos = Contato.query();
	};
	buscaContatos();
});
