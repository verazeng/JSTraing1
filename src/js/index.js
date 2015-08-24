
$(function(){
  'use strict';

  var appInstance = new App();

  $('#searchForm #searchButton').click(function(){
    appInstance.search($('#locationInput').val(), function(searchResultsDom) {
      $('#searchResults #results').empty();
      $('#searchResults #results').append(searchResultsDom);
    })
  })

  $('#searchResults #results').on('click', '.like', function(){
      var place = $('h5', this.parentElement).text();
      appInstance.like(place, function(likeResultDom) {
        var alreadyInLikedPlaces = _.find($('#likedPlaces li'), function(list) { return list.textContent == place})
        if(!alreadyInLikedPlaces) {
          $('ul', $('#likedPlaces')).append(likeResultDom)
        }    
      })
  })
})