describe('Location', function(){
  'use strict';

  beforeEach(function() {
      jasmine.Ajax.install();
  });
   
  afterEach(function() {
      jasmine.Ajax.uninstall();
  });


  it('should get the right dom after click search button', function(){
    var fixture = setFixtures('<div id="searchResults"><div id="results"></div></div>')

    var locationInstance = new Location(new LocationViews(), new LocationModal());
    locationInstance.search('bj');
    jasmine.Ajax.requests.mostRecent().respondWith(TestResponses.search.success);

    expect(fixture.find('a.like').length).toBe(2);
    expect(fixture.find('div.panel').length).toBe(2);
    expect(fixture.find('h5')[0]).toHaveText('city1');
    expect(fixture.find('h5')[1]).toHaveText('city2');
    expect(fixture.find('h6')[0]).toHaveText('The descriptions for first city.');
    expect(fixture.find('h6')[1]).toHaveText('The descriptions for second city.');
  });

  it('should get the right dom after click like link', function(){
    var fixture = setFixtures('<div id="likedPlaces"><ul></ul></div>')

    var locationInstance = new Location(new LocationViews(), new LocationModal());
    locationInstance.like('city1');

    expect(fixture.find('li.like').length).toBe(1);
    expect(fixture.find('li.like')[0]).toHaveText('city1');

    locationInstance.like('city2');

    expect(fixture.find('li.like').length).toBe(2);
    expect(fixture.find('li.like')[1]).toHaveText('city2');
  });

  it('should only like one city once', function(){
    var fixture = setFixtures('<div id="likedPlaces"><ul></ul></div>')

    var locationInstance = new Location(new LocationViews(), new LocationModal());
    locationInstance.like('city1');

    expect(fixture.find('li.like').length).toBe(1);

    locationInstance.like('city1');
    
    expect(fixture.find('li.like').length).toBe(1);
  });

});
