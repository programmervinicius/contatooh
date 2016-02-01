//app/controllers/contato.js

var contatos = [{
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}, {
    _id : 1,
    nome : 'Contato Exemplo 1',
    email : 'cont1@empresa.com.br'
}, {
    _id : 2,
    nome : 'Contato Exemplo 2',
    email : 'cont2@empresa.com.br'
}, {
    _id : 3,
    nome : 'Contato Exemplo 3',
    email : 'cont3@empresa.com.br'
}, {
    _id : 4,
    nome : 'Contato Exemplo 4',
    email : 'cont4@empresa.com.br'
}];

module.exports = function() {
    var ID_CONTATO_INC = 32;
    var controller = {};

    controller.listaTodos = function(req, res) {
        res.json(contatos);
    };

    controller.obtemContato = function(req, res) {
        var idContato = req.params.id,
            contato = contatos.filter(function(contato){
        return contato._id == idContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado.');
    };

    controller.removeContato = function(req, res) {
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });
        res.send(204).end();
    };

    controller.salvaContato = function(req, res) {
        try {
            var contato = req.body;
            //console.log(contato._id);
            contato = contato._id ? atualiza(contato) : adiciona(contato, req);
            res.json(contato);
        } catch(err) {
            console.log("Erro ao salvar contato." + " Erro: " + err);
        }
    };

    /*
     controller.salvaContato = function(req, res) {
     // criando o objeto de query
     // para fazer a busca da cerveja a ser alterada
     var query = {
     _id : req.params.id
     };

     // crio o objeto de modificação da cerveja
     // recebendo os dados via req.body
     var mod = req.body;

     contato.update(query, mod, function(err, data) {
     if (err) {
     console.log('Erro: ', err);
     msg = 'Erro ao atualizar a cerveja!';
     // Enviamos a msg para view
     res.render('beer/show', {
     title : 'Adega Be MEAN',
     cerveja : data,
     msg : msg
     });
     } else {
     console.log('Cerveja atualizada com sucesso', data);
     msg = 'Cerveja atualizada com sucesso!';
     // Enviamos a cerveja para view
     res.render('beer/show', {
     title : 'Adega Be MEAN',
     cerveja : data,
     msg : msg
     });
     }
     });
     };
     */

    function adiciona(contatoNovo, req) {
        try {
            req.params._id = ++ID_CONTATO_INC;
            //contatoNovo.
            contatos.push(contatoNovo);
            return contatoNovo;
        } catch(err) {
            console.log("Erro ao adicionar contato." + " Erro: " + err);
        }
    };

    function atualiza(contatoAlterar) {
        try {
            contatos = contatos.map(function(contato) {
                if (contato._id == contatoAlterar._id) {
                    contato = contatoAlterar;
                }
                return contato;
            });
            return contatoAlterar;
        } catch(err) {
            console.log("Erro ao atualizar contato." + " Erro: " + err);
        }
    };

    return controller;
};
