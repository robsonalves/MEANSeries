angular.module('MEAN',[])
	.controller('ContatoController',[function($scope){
		var self = this;
		
		self.total = 0
		
		self.incrementa = function(){
			self.total++;
		};	
	}]);