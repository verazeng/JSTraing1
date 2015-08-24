function Location() {	
	var getLocationData = function (locationKey, callback) {
		var name = locationKey ? '?name=' + locationKey : '' ;
	    var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';

		$.ajax({
	      url: LOCATION_SERVICE_API + name,
	      success: function(data){
	      	callback(data);
	      }
	    })
	};

	return {
		search : function (searchKey, rootSelector) {
			var resultTemplate = _.template('<div class="panel large-12 columns">' +
		                                            '<h5><%= name %></h5>' +
		                                            '<h6><%= description %></h6>' +
		                                            '<a href="#" class="like button tiny right">Like</a>' +
		                                          '</div>');

			getLocationData(searchKey, function(data) {
				console.log(data);
		      	var renderedResults = _.map(data, function(result){
		                  return resultTemplate(result);
		                });
		      	$(rootSelector).empty();
      			$(rootSelector).append(renderedResults);
		  	});
		},
		like : function (placeName, rootSelector) {
			var likedTemplate = _.template('<li class="like"><%= place %></li>')
			var alreadyInLikedPlaces = _.find($(rootSelector +' li'), function(list) { return list.textContent == place})
        	if(!alreadyInLikedPlaces) {
          		$('ul', $(rootSelector)).append(likedTemplate({place: placeName}))
        	}  
		}
	};
};

