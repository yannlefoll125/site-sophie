'use strict';

//Component created with generator-my-ng-generator (modified)

import ContactModule from './Contact.component';

describe('Component: ContactComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(ContactModule));

  var ContactComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ContactComponent = $componentController('contact', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
