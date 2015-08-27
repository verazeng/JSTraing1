var LikePlacesView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.model.bind('change:likePlaces', _.bind(this.render, this));
    this.template = $('#liked-places-template').html();
  },

  events: {
    // 'click .toggle': 'toggleLike'
  },

  // toggleLike: function(e) {
  //   e.preventDefault();

  //   var result = $(e.currentTarget).data('info');
  //   var likePlaces = this.likePlacesModel.get('likePlaces');
  //   var current = _.findWhere(likePlaces, result.name);
  //   if (!current) {
  //     likePlaces.push(result.name);
  //   }
  //   this.likePlacesModel.trigger('change:likePlaces', likePlaces);
  // },

  el: '#liked-places',

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.model.toJSON());

    this.$el.html(html);

    return this.$el;
  }
});