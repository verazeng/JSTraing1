function Location(views, model) {	
	var searchRoot = '#searchResults #results';
	var likeRoot = '#likedPlaces';
	return {
		search : function (searchKey) {
			model(searchKey, function(data) {
		      	var renderedResults = _.map(data, function(result){
		                  return views.searchResultTemplete(result);
		                });
		      	$(searchRoot).empty();
      			$(searchRoot).append(renderedResults);
		  	});
		},
		like : function (placeName) {
			var alreadyInLikedPlaces = _.find($(likeRoot +' li'), function(list) { return list.textContent == placeName})
        	if(!alreadyInLikedPlaces) {
          		$('ul', $(likeRoot)).append(views.likedResultTemplete({place: placeName}))
        	}  
		}
	};
};

