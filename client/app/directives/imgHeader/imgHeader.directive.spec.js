'use strict';

describe('Directive: imgHeader', function() {
  // load the directive's module and view
  beforeEach(module('siteSophieApp.imgHeader'));
  beforeEach(module('app/directives/imgHeader/imgHeader.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<img-header></img-header>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the imgHeader directive');
  }));
});
