'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/seance', {
      template: '<seance></seance>'
    });
}
