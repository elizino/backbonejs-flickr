FlickrGrid.Models.Photo = Backbone.Model.extend({
	view: null,
	initialize: function() {
		this.view = new FlickrGrid.Views.Photos({model: this});
		return this;
	}
});

FlickrGrid.Models.GridModel= Backbone.Model.extend({
	api_key: '',
	photo_id: '',
	group_id: '',
	
	initialize: function() {
		return this;
	},

	url: function() {
		var params = '',
		flickrUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=tree&tagmode=any&format=json&jsoncallback=?';
		return flickrUrl + params;
	},

	fetchData: function( callback ) {
		this.fetch({
			success: function() { callback(); },
			error: function() { callback(); }
		});		
	}	
});