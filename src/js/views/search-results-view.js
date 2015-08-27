var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  initialize: function(searchResultsModel, likePlacesModel) {
    this.searchResultsModel = searchResultsModel;
    this.searchResultsModel.bind('change:searchResults', _.bind(this.render, this));
    this.likePlacesModel = likePlacesModel;
    this.template = $('#search-results-template').html();
  },

  events: {
    'click .like': 'toggleLike'
  },

  toggleLike: function(e) {
    e.preventDefault();

    var result = $(e.currentTarget).data('name');
    var likePlaces = this.likePlacesModel.get('likePlaces');
    var exist = _.contains(likePlaces, result);
    if (!exist) {
      likePlaces.push(result);
    }
    this.likePlacesModel.trigger('change:likePlaces');
  },

  el: '#search-results',

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.searchResultsModel.toJSON());

    this.$el.html(html);

    return this.$el;
  }
});