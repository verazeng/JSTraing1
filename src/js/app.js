

function App() {
	
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

	this.search = function (searchKey, callback) {
		var resultTemplate = _.template('<div class="panel large-12 columns">' +
	                                            '<h5><%= name %></h5>' +
	                                            '<h6><%= description %></h6>' +
	                                            '<a href="#" class="like button tiny right">Like</a>' +
	                                          '</div>');

		getLocationData(searchKey, function(data) {
	      var renderedResults = _.map(data, function(result){
	                  return resultTemplate(result);
	                });
	      callback(renderedResults);
	  	});
	};

	this.like = function (placeName, callback) {
		var likedTemplate = _.template('<li class="like"><%= place %></li>')
		callback(likedTemplate({place: placeName}))
	}

};

