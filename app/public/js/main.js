angular.module('MEAN',['ngRoute'])
    .config(function($routeProvider){
    
    $routeProvider.when('/contatos',
                        { templateUrl: 'partials/contatos.html',
                          controller: 'ContatoController'
                        });
    
$routeProvider.when('/contato/:contatoId',
                        { templateUrl: 'partials/contato.html',
                          controller:  'ContatoController'
                        });

    $routeProvider.otherwise({redirectTo: '/contatos'});
    
});

    