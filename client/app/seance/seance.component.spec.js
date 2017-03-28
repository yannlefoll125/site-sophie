'use strict';

//Component created with generator-my-ng-generator (modified)

import SeanceModule from './Seance.component';

describe('Component: SeanceComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(SeanceModule));

  var SeanceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SeanceComponent = $componentController('seance', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
