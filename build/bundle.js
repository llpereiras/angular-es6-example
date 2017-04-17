
ApiService.$inject = ["$http", "Configuracao"];(function() {
    'use strict';

    angular.module('app', []);

})();
angular.module('app')

.controller('ClienteController', ['$scope', '$compile', 'apiService', function ($scope, $compile, ApiService) {
    $scope.listarClientes = function(){
        $scope.clientes = [];
        var clientesPromise = ApiService.getRecurso('clientes');
        $scope.config = ApiService.config.url_legado;
        clientesPromise.then(function(response) {
            $scope.clientes = response.data;
            console.log(response.data);
        });
    };
}]);


// angular
//   .module('app')
//   // .controller('clienteController', ClienteController);

//   .controller('clienteController', ['apiService', function (apiService) {

// // function ClienteController(apiService) {
//     this.clientes = [];
//     var clientesPromise = apiService.getRecurso('clientes');
//     this.config = apiService.config.url_legado;
//     clientesPromise.then(function(response) {
//       this.clientes = response.data;
//     });

// // }


// }]);

angular.module('app')

.directive('clienteDirective', function() {

    var directive = {
        link: link,
        templateUrl: "../src/app/clientes/clientes_listar.html",
        restrict: 'E'
    };

    function link () {
    }
    return directive;
});


// angular
//     .module('app')
//     .directive('clienteDirective', ClienteDirective);

// function ClienteDirective(clienteController) {
//     var directive = {
//         link: link,
//         templateUrl: "../src/app/clientes/clientes_listar.html",
//         restrict: 'E',
//         scope: {},
//         controller: clienteController,
//         controllerAs: 'ctrl',
//         bindToController: true

//     };
//     return directive;
    
// }


// (function() {
//     'use strict';
//     var clientes = angular.module('app.clientes', []);
// })();


angular
    .module("app")
    .service('Configuracao', Configuracao);

function Configuracao () {
   
    var vm = this;

    vm.api_clientes = function() { 
        return 'http://ruby-dev-llpereiras452669.codeanyapp.com:3000/';
        // return 'http://localhost:3005/';
    };

    vm.url_legado = function() { 
         return 'http://dev.old.gazetapress.com/';
    };

}

angular
    .module("app")
    .service('apiService', ApiService);

function ApiService ($http, Configuracao) {

    var vm = this;
    vm.$http = $http;
    vm.config = Configuracao;

    return {
        config: config,
        getRecurso: getRecurso
    };

    function config() { 
        return vm.config;
    }

    function getRecurso(recurso) { 
        return vm.$http({method: 'GET', url: vm.config.api_clientes() + recurso + '.json' });
    }

}
