//public/js/controllers/ContatosController.js
angular.module('contatooh').controller('ContatosController', function($scope) {
	$scope.total = 0;
	$scope.hora = "S/N";
	$scope.incrementa = function() {
		$scope.total++;
	};
}); 