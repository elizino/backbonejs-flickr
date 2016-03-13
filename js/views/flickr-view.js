FlickrGrid.Views.Photos = Backbone.View.extend({
	template: $('#grid-tmpl').html(),
	className: 'thumbs',
	
	initialize: function() {
		var $el = $(this.el);
		$el.hover(function(){
			$("span.fadein", $el).fadeIn();
		}, function() {
			$("span.fadeout", $el).fadeOut();
		});
	},
	
	render: function() {
		var image = _.template(this.template, {phtos:this.model.toJSON()});
		$('#container').html(image);
		return this;
	}
});

FlickrGrid.Views.FlickrGridView = Backbone.View.extend({
	el: $('#photos-wrapper'),

	initialize: function() {
		var self = this;
		this.model = new FlickrGrid.Models.GridModel();
	},
	
	events: {
		"click a.zoom": "showPhoto",
		"click div#mask" : "closeModal"
	},

	showPhoto: function(event) {
		event.preventDefault();
		var uri = event.target.getAttribute('src').replace('_s','_q');
		$('.modal').css({'background':'no-repeat url('+uri+')'});
		$("#mask").toggleClass("hide");
	},
	
	closeModal: function(event){
		$("#mask").toggleClass("hide");
	},
	
	render: function() {
			this.loading.hide();
			this.inProgress = false;
	},
	
	renderGrid: function( options ) {
		var photo = [], self = this;

		var data = self.model.get('items');
		if (data) {
			data.forEach(function(item,i) {
				photo.push(item.media);
			});
			var photos = new FlickrGrid.Models.Photo(photo);
			photos.view.render();
		} else {
			self.render();
		}

	},
	
	fetch: function( el, options ) {
		var self = this;
 
		this.model.fetchData( function() {
			self.renderGrid( options );
			console.log("flickr data loading...")
		});	
	}
});
