//app/routes/contato.js
module.exports = function(app) {
    var controller = app.controllers.contato;
    /*app.route('/contatos');
    app.route('/contatos/:id');*/
    app.get('/contatos', controller.listaTodos);
    //app.post('/contatos', controller.salvaContato);
    app.get('/contatos/:id', controller.obtemContato);
    app.delete('/contatos/:id', controller.removeContato);
};
