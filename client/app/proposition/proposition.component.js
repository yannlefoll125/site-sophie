'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './proposition.routes';

export class PropositionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('siteSophieApp.proposition', [ngRoute])
  .config(routes)
  .component('proposition', {
    template: require('./proposition.html'),
    controller: PropositionComponent,
    controllerAs: 'propositionCtrl'
  })
  .name;
