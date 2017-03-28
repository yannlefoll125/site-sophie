'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/gestalt', {
      template: '<gestalt></gestalt>'
    });
}
