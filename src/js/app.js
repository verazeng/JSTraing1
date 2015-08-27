var $ = require('jquery');
var SearchResultsModel = require('./models/search-results-model.js');
var LikePlacesModel = require('./models/like-places-model.js');
var SearchFormView = require('./views/search-form-view.js');
var SearchResultsView = require('./views/search-results-view.js');
var LikePlacesView = require('./views/like-places-view.js');

$(function(){
  var searchResultsModel = new SearchResultsModel();
  var likePlacesModel = new LikePlacesModel();

  var searchFormView = new SearchFormView(searchResultsModel);
  var searchResultsView = new SearchResultsView(searchResultsModel, likePlacesModel);
  var likePlacesView = new LikePlacesView(likePlacesModel);

  searchFormView.render();
  searchResultsView.render();
  likePlacesView.render();
})