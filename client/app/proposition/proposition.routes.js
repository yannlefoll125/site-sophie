'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/proposition', {
      template: '<proposition></proposition>'
    });
}
