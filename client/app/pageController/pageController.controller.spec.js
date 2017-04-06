'use strict';

import PageControllerModule from './PageController.controller';

describe('Controller: PageControllerController', function() {
  // load the controller's module
  beforeEach(angular.mock.module(PageControllerModule));

  var PageControllerController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    PageControllerController = $controller('PageControllerController', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
