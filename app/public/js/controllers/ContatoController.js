angular.module('MEAN')
	.controller('ContatoController',
				function($scope){
			var self = this;
			this.total = 0;	
	
			self.incrementa = function(){
				this.total++;	
			};
	});