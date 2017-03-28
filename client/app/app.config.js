'use strict';

export function routeConfig($routeProvider, $locationProvider) {
  'ngInject';

  $routeProvider.otherwise({
    redirectTo: '/accueil'
  });

  $locationProvider.html5Mode(true);
}
