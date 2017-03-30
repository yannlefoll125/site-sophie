'use strict';
const angular = require('angular');

export default angular.module('siteSophieApp.labeledInput', [])
  .directive('labeledInput', function() {
    return {
      template: require('./labeledInput.html'),
      restrict: 'E',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
