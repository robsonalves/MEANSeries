var contatos = [
	{Codigo: 1, nome: 'Robson Alves', email: 'robsonalves@robsonalves.net', vip: 'true', img:'' },
	{Codigo: 2, nome: 'Fulano Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' },
	{Codigo: 3, nome: 'Ciclano Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' },
	{Codigo: 4, nome: 'Malandro Alves', email: 'robsonalves@robsonalves.net', vip: 'false', img:'' }
			  ]

angular.module('MEAN')
	.controller('ContatoController',
				function($scope){
            $scope.total = 0;     
	   
			$scope.incrementa = function(){
				$scope.total++;
			};
    
            $scope.contatos = contatos;
            $scope.filtro = '';
	});