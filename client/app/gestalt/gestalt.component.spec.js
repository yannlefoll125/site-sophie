'use strict';

//Component created with generator-my-ng-generator (modified)

import GestaltModule from './Gestalt.component';

describe('Component: GestaltComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(GestaltModule));

  var GestaltComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GestaltComponent = $componentController('gestalt', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
