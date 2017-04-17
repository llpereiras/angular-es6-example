import ClienteController from './cliente_controller.js';
import ClienteDirective from './cliente_directive.js';
import ApiService from '../services/api_service.js';
import Configuracao from '../config/config.js';

export default angular.module('cliente', [])
    .controller('clienteController', ClienteController)
    .service('apiService', ApiService)
    .service('Configuracao', Configuracao)
    .directive('clienteDirective', () => new ClienteDirective);