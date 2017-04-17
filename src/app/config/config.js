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
