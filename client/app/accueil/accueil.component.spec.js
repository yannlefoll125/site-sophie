'use strict';

//Component created with generator-my-ng-generator (modified)

import AccueilModule from './Accueil.component';

describe('Component: AccueilComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(AccueilModule));

  var AccueilComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AccueilComponent = $componentController('accueil', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
