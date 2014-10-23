define(['marionette'], function (Marionette) {
	return Marionette.ItemView.extend({
		template : _.template('<span>Hello, world!</span>')
	});
});
