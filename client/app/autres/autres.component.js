'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './autres.routes';

export class AutresComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('siteSophieApp.autres', [ngRoute])
  .config(routes)
  .component('autres', {
    template: require('./autres.html'),
    controller: AutresComponent,
    controllerAs: 'autresCtrl'
  })
  .name;
