'use strict';

//Component created with generator-my-ng-generator (modified)

import AutresModule from './Autres.component';

describe('Component: AutresComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(AutresModule));

  var AutresComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AutresComponent = $componentController('autres', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
