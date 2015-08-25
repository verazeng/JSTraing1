function LocationViews() {
	return {
		searchResultTemplete : _.template('<div class="panel large-12 columns">' +
		                                            '<h5><%= name %></h5>' +
		                                            '<h6><%= description %></h6>' +
		                                            '<a href="#" class="like button tiny right">Like</a>' +
		                                          '</div>'),
		likedResultTemplete : _.template('<li class="like"><%= place %></li>')
	};
};