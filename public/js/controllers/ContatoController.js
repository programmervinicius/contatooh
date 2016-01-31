//public/js/controllers/ContatoController.js
angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {
    // console.log($routeParams.contatoId);
    $scope.mensagem = {
        texto : ''
    };
    // aqui continua no plural, é a rota no lado do servidor
    //var Contato = $resource('/contatos/:id');

    if ($routeParams.contatoId) {
        Contato.get({
            id : $routeParams.contatoId
        }, function(contato) {
            $scope.contato = contato;
        }, function(erro) {
            $scope.mensagem = {
                texto : 'Contato não existe. Novo contato.'
            };
            // console.log(erro);
        });
    } else {
        $scope.contato = {};
    }

    $scope.salva = function() {
        // lógica de salvamento
        $scope.contato.$save().then(function() {
            $scope.mensagem = {
                texto : 'Salvo com sucesso'
            };
            // limpa o formulário
            $scope.contato = new Contato();
        }).catch(function(erro) {
            $scope.mensagem = {
                texto : 'Não foi possível salvar'
            };
        });
    };

});
