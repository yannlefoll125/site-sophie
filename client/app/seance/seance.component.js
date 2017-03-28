'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './seance.routes';

export class SeanceComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('siteSophieApp.seance', [ngRoute])
  .config(routes)
  .component('seance', {
    template: require('./seance.html'),
    controller: SeanceComponent,
    controllerAs: 'seanceCtrl'
  })
  .name;
