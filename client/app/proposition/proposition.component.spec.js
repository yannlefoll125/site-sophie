'use strict';

//Component created with generator-my-ng-generator (modified)

import PropositionModule from './Proposition.component';

describe('Component: PropositionComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(PropositionModule));

  var PropositionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PropositionComponent = $componentController('proposition', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
