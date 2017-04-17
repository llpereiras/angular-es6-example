import angular from 'angular';
import cliente from './clientes/clientes.js'

angular.module('app', [
	'cliente'
]);

angular.bootstrap(document, ['app']);