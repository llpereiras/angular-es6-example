export default class ClienteController {

  constructor(apiService) {
    this.clientes = [];
    let clientesPromise = apiService.getRecurso('clientes');
    this.config = apiService.config.url_legado;
    clientesPromise.then(response => {
      this.clientes = response.data;
    });
  }
}

ClienteController.$inject = ['apiService'];
