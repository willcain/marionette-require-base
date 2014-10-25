define([
    'marionette',
    'templates/hello-template'
], function (
    Marionette,
    helloTemplate
) {
    return Marionette.ItemView.extend({
        template : _.template(helloTemplate)
    });
});
