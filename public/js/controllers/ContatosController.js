//public/js/controllers/ContatosController.js
$resource:
angular.module('contatooh').controller('ContatosController', function($scope, $resource) {
    $scope.contatos = [];
    $scope.total = 0;
    $scope.filtro = '';

    $scope.init = function() {
        buscaContatos();
        //tarefa1();
        //tarefa2();
    };
    $scope.init();

    /* $http.get('/contatos').success(function(data) {
     $scope.contatos = data;
     }).error(function(statusText) {
     console.log("Não foi possível obter a lista de contatos");
     console.log(statusText);
     });*/

    var Contato = $resource('/contatos');
    function buscaContatos() {
        /*
        Contato.query(function(contatos) {
        $scope.contatos = contatos;
        }, function(erro) {
        console.log("Não foi possível obter a lista de contatos");
        console.log(erro);*/

        //get a list of todos
        /*
        Contato.query(function(contatos) {
            //do something with todos
            angular.forEach(contatos, function(Contato) {
                 Contato.foo += ' something'; 
                $scope.contatos = Contato;
                Contato.$save();
            });
        });
        */
    }

    buscaContatos();
});
