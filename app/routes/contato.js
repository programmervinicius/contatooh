//app/routes/contato.js
module.exports = function(app) {
    var ID_CONTATO_INC = 3;
    var controller = app.controllers.contato;
    app.route('/contatos').get(controller.listaTodos)
    .post(controller.salvaContato);

    app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.removeContato)

};
