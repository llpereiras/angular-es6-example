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
