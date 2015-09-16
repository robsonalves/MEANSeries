module.exports = function(app){
	var controller = app.controllers.contato;
	app.get('/Contatos', controller.listaContatos);
	app.get('/Contatos/:id',controller.obterContato);
}