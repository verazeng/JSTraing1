function LocationModal() {
	return function (key, callback) {
		var name = key ? '?name=' + key : '' ;
	    var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';
	    
		$.ajax({
		      url: LOCATION_SERVICE_API + name,
		      success: function(data){
		      	callback(data);
		      }
		})
	}
};