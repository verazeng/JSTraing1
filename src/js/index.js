
$(function(){
  'use strict';

  $('#searchForm #searchButton').click(function(){
    var resultTemplate = _.template('<div class="panel large-12 columns">' +
                                            '<h5><%= name %></h5>' +
                                            '<h6><%= description %></h6>' +
                                            '<a href="#" class="like button tiny right">Like</a>' +
                                          '</div>');

    var name = $('#locationInput').val(),
        filter = name ? '?name=' + name : '' ;
    var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';

    $.ajax({
      url: LOCATION_SERVICE_API + filter,
      success: function(data){
            var renderedResults = _.map(data, function(result){
              return resultTemplate(result);
            });

            $('#searchResults #results').empty();
            $('#searchResults #results').append(renderedResults);
          }
        })
    })

  $('#searchResults #results').on('click', '.like', function(){
    var likedTemplate = _.template('<li class="like"><%= place %></li>')
    var place = $('h5', this.parentElement).text();
    var alreadyInLikedPlaces = _.find($('#likedPlaces li'), function(list) { return list.textContent == place})
    if(!alreadyInLikedPlaces) {
      $('ul', $('#likedPlaces')).append(likedTemplate({place: place}))
    }
  });
});