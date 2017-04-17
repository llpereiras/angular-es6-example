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

