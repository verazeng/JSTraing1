
describe('LocationModal', function(){
  'use strict';

  var SEARCH_API = 'http://location-backend-service.herokuapp.com/locations';
  var modal = new LocationModal();

  beforeEach(function() {
      jasmine.Ajax.install();
  });
   
  afterEach(function() {
      jasmine.Ajax.uninstall();
  });

  it('should call the right search api with no param', function(){
    modal(false, function(data){});

    var request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe(SEARCH_API);
  });

  it('should call the right search api', function(){
    modal('bj', function(data){});

    var request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe(SEARCH_API + '?name=bj');
  });

  it("should return the specified locations", function() {
    var result;
    modal(false, function(data) {
        result = data;
    });

    jasmine.Ajax.requests.mostRecent().respondWith(TestResponses.search.success);
 
    expect(result[0].name).toBe("city1");
    expect(result[0].description).toBe("The descriptions for first city.");
  });
});