requirejs.config({
	baseUrl: 'scripts',
	paths: {
        	jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		json2: 'lib/json2',
		backbone: 'lib/backbone/backbone',
		marionette: 'lib/marionette/backbone.marionette'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore', 'json2'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	}
});

require(["marionette", "views/hello-view"], function(Marionette, HelloView) {
	var app = new Marionette.Application();
	app.addRegions({
		mainRegion: '#main-region'
	});
	app.addInitializer(function(options) {
		var helloView = new HelloView();
		this.mainRegion.show(helloView);
	});
	app.start();
});
