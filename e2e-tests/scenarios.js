'use strict';


describe('my emploeeManagerApp', function() {

  browser.get('index.html');

  it('should automatically redirect to /typeahead when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/typeaheadlist');
  });

  //e2e tests for typeahead list of employees tab
  describe('typeaheadlist', function() {

    beforeEach(function() {
      browser.get('/app/#/typeaheadlist');
    });
  });

  //e2e tests for full list of employees tab
  describe('fullist', function() {

    beforeEach(function() {
      browser.get('/app/#/fullist');
    });
  });
});