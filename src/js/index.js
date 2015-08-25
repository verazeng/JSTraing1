
$(function(){
  'use strict';

  var views = new LocationViews();
  var modal = new LocationModal();
  var locationInstance = new Location(views, modal);

  $('#searchForm #searchButton').click(function(){
    locationInstance.search($('#locationInput').val())
  });

  $('#searchResults #results').on('click', '.like', function(){
      var place = $('h5', this.parentElement).text();
      locationInstance.like(place);
  })
})