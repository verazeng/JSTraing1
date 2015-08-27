
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