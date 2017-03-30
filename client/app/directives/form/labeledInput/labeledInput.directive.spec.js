'use strict';

describe('Directive: labeledInput', function() {
  // load the directive's module and view
  beforeEach(module('siteSophieApp.labeledInput'));
  beforeEach(module('app/directives/form/labeledInput/labeledInput.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<labeled-input></labeled-input>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the labeledInput directive');
  }));
});
