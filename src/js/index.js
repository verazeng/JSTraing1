
$(function(){
  'use strict';

  var locationInstance = new Location();

  $('#searchForm #searchButton').click(function(){
    locationInstance.search($('#locationInput').val(), '#searchResults #results')
  });

  $('#searchResults #results').on('click', '.like', function(){
      var place = $('h5', this.parentElement).text();
      locationInstance.like(place, '#likedPlaces');
  })
})