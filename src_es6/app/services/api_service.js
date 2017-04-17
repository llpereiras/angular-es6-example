export default class ApiService {

  constructor($http, config) {
    this.$http = $http;
    this.config = config;
  }

  getRecurso (recurso) {
    return this.$http({method: 'GET', url: `${this.config.api_clientes()}${recurso}.json` });
  }

  config () {
    return this.config;
  }
}

ApiService.$inject = ['$http', 'Configuracao'];