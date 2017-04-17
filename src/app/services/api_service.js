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
