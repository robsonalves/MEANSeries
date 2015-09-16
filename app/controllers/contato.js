var contatos = [
	{Codigo: 1, nome: 'Robson Alves', email: 'robsonalves@robsonalves.net', vip: 'true', img:'' },
	{Codigo: 2, nome: 'Fulano Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' },
	{Codigo: 3, nome: 'Ciclano Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' },
	{Codigo: 4, nome: 'Malandro Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' }
			  ]

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req,res){
		res.json(contatos);
		//res.send(contatos);
	};
	
	controller.obterContato = function(req,res){
		console.log(req.params.id);
		
		var codigoContato = req.params.id;
		var contato = contatos.filter(function(contato){return contato.Codigo == codigoContato})[0];
		
		contato ? res.json(contato) : res.status(404).send("Nenhum item encontrado.");
	}
	
	return controller;
}