describe('basic location functions', function(){
  'use strict';

  beforeEach(function(){
  	jasmine.Ajax.install();

  	var response = TestResponses.search.success;
	jasmine.Ajax.stubRequest(
	    'http://location-backend-service.herokuapp.com',
	    /.*locations.*/
	).andReturn(response);
  });

  it('should render search results', function(){
  	var fixture = setFixtures('<div id="app"></div>');	
    var locationInstance = new Location();

    locationInstance.search('', '#app');

    expect(fixture.find('#app')).toContainElement('.panel.large-12.columns');
  });
});
