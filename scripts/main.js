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

require([
    'marionette',
    'models/hello-model',
    'views/hello-view',
], function(
    Marionette,
    HelloModel,
    HelloView
) {
    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '#main-region'
    });

    app.addInitializer(function(options) {
        var helloView = new HelloView({
            model: new HelloModel()
        });
        this.mainRegion.show(helloView);
    });

    app.start();
});
