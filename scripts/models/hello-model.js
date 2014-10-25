define([
    'backbone'
], function (
    Backbone
) {
    return Backbone.Model.extend({
        defaults: {
            message: 'Hello, world!'
        }
    });
});
