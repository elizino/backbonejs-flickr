
FlickrGrid.Routers.Start = Backbone.Router.extend({
	routes: {
		"" : "index"
	},
	index: function() {
	  FlickrGrid.FlickrGridView.fetch();
	}
});
