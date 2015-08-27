var SearchFormView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.template = $('#search-form-template').html();
  },

  events: {
    'click #search-button': 'searchPlaces'
  },

  el: '#search-Form',

  searchPlaces: function(e) {
    e.preventDefault();

    var searchKey = $('#location-input').val();
    var LOACTION_SEARCH_API = 'http://location-backend-service.herokuapp.com/locations';
	var searchAPI = searchKey ? LOACTION_SEARCH_API + '?name=' + searchKey : LOACTION_SEARCH_API;

	var formView = this;
	$.ajax({
      url: searchAPI,
      success: function(data) {
		formView.model.set('searchResults', data);
	    formView.model.trigger('change:searchResults');
	  }
	})
  },

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled();
    this.$el.html(html);

    return this.$el;
  }
});