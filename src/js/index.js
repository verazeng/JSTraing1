
$(function(){
  'use strict';

  var views = new LocationViews();
  var model = new LocationModel();
  var locationInstance = new Location(views, model);

  $('#searchForm #searchButton').click(function(){
    locationInstance.search($('#locationInput').val())
  });

  $('#searchResults #results').on('click', '.like', function(){
      var place = $('h5', this.parentElement).text();
      locationInstance.like(place);
  })
})