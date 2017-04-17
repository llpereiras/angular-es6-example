import ClienteController from './cliente_controller.js';

export default class ClienteDirective {
    constructor() {
        this.templateUrl = "../src/app/clientes/clientes_listar.html";
        this.restrict = 'E';
        this.scope = {};
        this.controller = ClienteController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }
}
