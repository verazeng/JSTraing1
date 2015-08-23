var searchLocation = function (searchKey, callback) {
	var name = searchKey ? '?name=' + searchKey : '' ;
    var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';

	$.ajax({
      url: LOCATION_SERVICE_API + filter,
      success: function(data){
      	callback(data);
      })
    })
};
