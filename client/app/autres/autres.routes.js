'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/autres', {
      template: '<autres></autres>'
    });
}
