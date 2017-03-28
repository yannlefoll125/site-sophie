'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './accueil.routes';

export class AccueilComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('siteSophieApp.accueil', [ngRoute])
  .config(routes)
  .component('accueil', {
    template: require('./accueil.html'),
    controller: AccueilComponent,
    controllerAs: 'accueilCtrl'
  })
  .name;
