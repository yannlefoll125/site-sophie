'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'La Gestalt-thérapie',
    link: '/gestalt'
  },{
    title: 'Autres thérapies',
    link: '/autres'
  },{
    title: 'Ma proposition',
    link: '/proposition'
  },{
    title: 'Séance et tarifs',
    link: '/seance'
  }, {
    title: 'Contact',
    link: '/contact'
  }];

  isCollapsed = true;

  constructor($location) {
    'ngInject';

    this.$location = $location;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
