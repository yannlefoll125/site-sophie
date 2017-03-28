'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/accueil', {
      template: '<accueil></accueil>'
    });
}
