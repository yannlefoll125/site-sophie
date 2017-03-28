'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './gestalt.routes';

export class GestaltComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('siteSophieApp.gestalt', [ngRoute])
  .config(routes)
  .component('gestalt', {
    template: require('./gestalt.html'),
    controller: GestaltComponent,
    controllerAs: 'gestaltCtrl'
  })
  .name;
