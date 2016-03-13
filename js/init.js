  var FlickrGrid = FlickrGrid || {};
	  FlickrGrid = {
		Views: {},
		Models: {},
		Routers: {},
		FlickrGridView: null
	  };

$(function(){
	new FlickrGrid.Routers.Start();
	FlickrGrid.FlickrGridView = new FlickrGrid.Views.FlickrGridView();
	Backbone.history.start();            	
});