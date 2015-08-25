describe('Views', function(){
  'use strict';
  
  it('should get right html from search result template', function(){
  	var locationData = {description:"First City", name:"City1"};
    var views = new LocationViews();
    var searchView = views.searchResultTemplete(locationData);

    expect($(searchView)).toContainHtml('<h5>City1</h5>');
    expect($(searchView)).toContainHtml('<h6>First City</h6>');
    expect($(searchView)).toContainHtml('<a href="#" class="like button tiny right">Like</a>');
  });

  it('should get right html from like template', function(){
    var views = new LocationViews();
    var likeView = views.likedResultTemplete({place: "City1"});
    
    expect($(likeView)[0]).toHaveText('City1');
    expect($(likeView)[0]).toHaveClass('like');
  });

});